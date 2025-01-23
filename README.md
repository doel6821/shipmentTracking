# Shipment Tracking System - README

## **1. Pendahuluan**
Proyek ini adalah sistem pelacakan pengiriman berbasis blockchain menggunakan teknologi **Ethereum**, **Hardhat**, **Node.js** (backend), dan **Vue.js** (frontend). Sistem memungkinkan pengguna mencatat pengiriman, memperbarui status, dan memverifikasi data secara transparan menggunakan **smart contract**.

---

## **2. Prasyarat**
Pastikan Anda sudah menginstal alat berikut:
- **Node.js** (https://nodejs.org/) - Minimal versi 14.
- **Metamask** (https://metamask.io/) - Ekstensi browser untuk pengelolaan wallet.
- **Git** (https://git-scm.com/) - Untuk mengelola repository.

---

## **3. Langkah Instalasi**

### **3.1. Clone Repository**
Clone repository proyek ini:
```bash
git clone <url-repository>
cd shipment-tracking
```

---

## **4. Menjalankan Blockchain Lokal**

### **4.1. Instal Hardhat**
Hardhat digunakan untuk menjalankan node Ethereum lokal dan melakukan deployment smart contract. Instal Hardhat di dalam folder proyek:
```bash
npm install --save-dev hardhat
```

### **4.2. Inisialisasi Hardhat**
Inisialisasi Hardhat:
```bash
npx hardhat
```
Pilih opsi `Create an empty hardhat.config.js`.

### **4.3. Menjalankan Node Lokal**
Jalankan node Ethereum lokal menggunakan Hardhat:
```bash
npx hardhat node
```
Hardhat akan memulai node lokal di `http://127.0.0.1:8545` dan menampilkan beberapa akun default lengkap dengan private key.

---

## **5. Menyambungkan Hardhat Node ke Metamask**

1. Buka **Metamask** di browser Anda.
2. Klik ikon akun Anda > **Settings** > **Networks** > **Add Network**.
3. Isi informasi berikut:
   - **Network Name**: Hardhat Localhost
   - **New RPC URL**: `http://127.0.0.1:8545`
   - **Chain ID**: `31337`
4. Simpan jaringan.
5. Import akun dari private key:
   - Pilih "Import Account" di Metamask.
   - Masukkan private key dari akun yang ditampilkan oleh Hardhat.

---

## **6. Deploy Smart Contract**

Jalankan skrip deploy:
```bash
npx hardhat run scripts/deploy.js --network localhost
```

Catat **alamat kontrak** yang dihasilkan.

---

## **7. Menjalankan Backend**

### **7.1. Instal Dependensi Backend**
Masuk ke folder backend dan instal semua dependensi:
```bash
cd backend-javascript
npm install
```

### **7.2. Konfigurasi `.env`**
Buat file `.env` di folder backend:
```plaintext
PRIVATE_KEY=<Private Key Salah Satu Akun Hardhat>
CONTRACT_ADDRESS=<Alamat Kontrak>
RPC_URL=http://127.0.0.1:8545
PORT=3000
```

### **7.3. Jalankan Backend**
Jalankan server backend:
```bash
node index.js
```

Backend akan berjalan di `http://localhost:3000`.

---

## **8. Menjalankan Frontend**

### **8.1. Instal Dependensi Frontend**
Masuk ke folder frontend dan instal semua dependensi:
```bash
cd frontend
npm install
```

### **8.2. Jalankan Frontend**
Jalankan frontend:
```bash
npm run serve
```

Frontend akan berjalan di `http://localhost:8080`.

---

## **9. Pengujian Sistem**

### **9.1. Tracking Status Pengiriman**
1. Buka **http://localhost:8080**.
2. Pada tampilan awal masukkan no pengiriman kemudian klik "Search"
3. Data Status Pengiriman akan ditampilkan

### **9.2. Membuat Pengiriman**
1. Buka **http://localhost:8080**.
2. login
2. Pembuatan pengiriman pilih menu create shipment:
   - Nama Penerima, Alamat, Email, dan Nomor Telepon.
3. Klik "Create Shipment".
4. Simpan No Pengiran jika proses telah berhasil.

### **9.3. Memperbarui Status Pengiriman**
1. Buka **http://localhost:8080**.
2. Login
3. Pilih Menu Tracking di frontend.
4. Input Nomor Pengiriman kemudian klik "Search"
5. Data Pengiriman akan ditampilkan
6. Perbarui status (misalnya: "Delivered").
7. Klik "Update" untuk memperbarui status pengiriman.

---

## **10. Catatan**
- Gunakan Hardhat node hanya untuk pengembangan lokal.
- Untuk testnet (misalnya Sepolia atau Goerli), ganti `RPC_URL` dan deploy kontrak ulang.
