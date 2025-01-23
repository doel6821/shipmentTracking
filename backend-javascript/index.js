const express = require('express');
const { ethers } = require('ethers');
const cors = require('cors'); 
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken'); 
require('dotenv').config();


const app = express();
app.use(express.json());

// Konfigurasi CORS
const corsOptions = {
  origin: 'http://localhost:8080', // Ganti dengan URL frontend Anda
  methods: 'GET,POST,PUT,DELETE', // Metode HTTP yang diizinkan
  allowedHeaders: ['Content-Type', 'Authorization'], // Header yang diizinkan
};
app.use(cors(corsOptions)); // Pasang middleware CORS

// Dummy data user untuk autentikasi
const users = [
    { username: 'admin', password: 'password123' }, // Tambahkan data pengguna sesuai kebutuhan
];

// Konfigurasi smart contract
const contractABI = [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "id",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "status",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "recipientName",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "recipientAddress",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "recipientEmail",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "recipientPhone",
          "type": "string"
        }
      ],
      "name": "ShipmentCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "id",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "newStatus",
          "type": "string"
        }
      ],
      "name": "ShipmentUpdated",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_id",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_status",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_recipientName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_recipientAddress",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_recipientEmail",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_recipientPhone",
          "type": "string"
        }
      ],
      "name": "createShipment",
      "outputs": [
        {
          "internalType": "string",
          "name": "id",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_id",
          "type": "string"
        }
      ],
      "name": "getShipment",
      "outputs": [
        {
          "internalType": "string",
          "name": "id",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "status",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "recipientName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "recipientAddress",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "recipientEmail",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "recipientPhone",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_id",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_newStatus",
          "type": "string"
        }
      ],
      "name": "updateShipmentStatus",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];
const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

// Konfigurasi JWT
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

// Hubungkan ke provider Ethereum (contoh: Ganache atau Infura)
const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545"); // Ganti dengan URL node Anda
const privateKey = process.env.PRIVATE_KEY; // Kunci privat akun pengirim transaksi
const wallet = new ethers.Wallet(privateKey, provider);
const contract = new ethers.Contract(contractAddress, contractABI, wallet);

function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; // Karakter yang digunakan
  let result = '';
  for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length); // Pilih indeks acak
      result += characters[randomIndex]; // Tambahkan karakter ke hasil
  }
  return result;
}

// Middleware untuk validasi token Bearer
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(401).json({ error: 'Access token missing' });

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ error: 'Invalid or expired token' });
        req.user = user;
        next();
    });
};


// Endpoint untuk login dan mendapatkan token
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Validasi username dan password
    const user = users.find((u) => u.username === username && u.password === password);
    if (!user) return res.status(401).json({ error: 'Invalid username or password' });

    // Generate token
    const accessToken = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ accessToken });
});

// Endpoint untuk membuat shipment
app.post('/shipment', authenticateToken, async (req, res) => {
    const { recipientName, recipientAddress, recipientEmail, recipientPhone } = req.body;

    id = generateRandomString(10)
    
    try {
        // Panggil fungsi createShipment dari smart contract
        const tx = await contract.createShipment(
            id,
            "Created",
            recipientName,
            recipientAddress,
            recipientEmail,
            recipientPhone
        );
        await tx.wait();

        res.status(200).json({
            message: 'Shipment created successfully',
            transactionHash: tx.hash,
            shipmentId: id, // Return ID pengiriman
        });
    } catch (error) {
        console.error('Error creating shipment:', error);
        res.status(500).json({ error: 'Failed to create shipment' });
    }
});

// Endpoint untuk mendapatkan detail shipment
app.get('/shipment/:id', async (req, res) => {
    const shipmentId = req.params.id;

    try {
        // Panggil fungsi shipments dari smart contract
        const shipment = await contract.getShipment(shipmentId);

        if (shipment.id === '') {
            return res.status(404).json({ error: 'Shipment not found' });
        }

        res.status(200).json({
            id: shipment.id,
            status: shipment.status,
            recipientName: shipment.recipientName,
            recipientAddress: shipment.recipientAddress,
            recipientEmail: shipment.recipientEmail,
            recipientPhone: shipment.recipientPhone,
        });
    } catch (error) {
        console.error('Error fetching shipment:', error);
        res.status(500).json({ error: 'Failed to fetch shipment' });
    }
});

// Endpoint untuk memperbarui status shipment
app.put('/shipment', authenticateToken, async (req, res) => {
    const { id, status } = req.body;

    try {
        // Panggil fungsi updateShipmentStatus dari smart contract
        const tx = await contract.updateShipmentStatus(id, status);
        await tx.wait();

        res.status(200).json({
            message: 'Shipment status updated successfully',
            transactionHash: tx.hash,
            shipmentId: id, // Return ID pengiriman yang diperbarui
        });
    } catch (error) {
        console.error('Error updating shipment status:', error);
        res.status(500).json({ error: 'Failed to update shipment status' });
    }
});

// Jalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
