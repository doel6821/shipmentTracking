// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ShipmentTracking {
    // Struktur data untuk pengiriman
    struct Shipment {
        string id;
        string status;
        string recipientName;
        string recipientAddress;
        string recipientEmail;
        string recipientPhone;
    }

    // Mapping untuk menyimpan pengiriman berdasarkan ID
    mapping(string => Shipment) private shipments;

    // Event untuk mencatat pengiriman baru
    event ShipmentCreated(
        string id,
        string status,
        string recipientName,
        string recipientAddress,
        string recipientEmail,
        string recipientPhone
    );

    // Event untuk mencatat pembaruan status pengiriman
    event ShipmentUpdated(string id, string newStatus);

    // Fungsi untuk membuat pengiriman baru
    function createShipment(
        string memory _id,
        string memory _status,
        string memory _recipientName,
        string memory _recipientAddress,
        string memory _recipientEmail,
        string memory _recipientPhone
    ) public returns (string memory id) {
        // Pastikan pengiriman belum ada
        require(bytes(shipments[_id].id).length == 0, "Shipment already exists");

        // Menyimpan pengiriman baru
        shipments[_id] = Shipment(
            _id,
            _status,
            _recipientName,
            _recipientAddress,
            _recipientEmail,
            _recipientPhone
        );

        // Emit event untuk mencatat pengiriman baru
        emit ShipmentCreated(
            _id,
            _status,
            _recipientName,
            _recipientAddress,
            _recipientEmail,
            _recipientPhone
        );

        return (
            _id
        );
    }

    // Fungsi untuk memperbarui status pengiriman
    function updateShipmentStatus(string memory _id, string memory _newStatus) public {
        // Pastikan pengiriman dengan ID tersebut ada
        require(bytes(shipments[_id].id).length != 0, "Shipment does not exist");

        // Perbarui status pengiriman
        shipments[_id].status = _newStatus;

        // Emit event untuk mencatat pembaruan status
        emit ShipmentUpdated(_id, _newStatus);
    }

    // Fungsi untuk mendapatkan detail pengiriman berdasarkan ID
    function getShipment(string memory _id)
        public
        view
        returns (
            string memory id,
            string memory status,
            string memory recipientName,
            string memory recipientAddress,
            string memory recipientEmail,
            string memory recipientPhone
        )
    {
        // Pastikan pengiriman dengan ID tersebut ada
        require(bytes(shipments[_id].id).length != 0, "Shipment does not exist");

        // Mengembalikan detail pengiriman
        Shipment memory shipment = shipments[_id];
        return (
            shipment.id,
            shipment.status,
            shipment.recipientName,
            shipment.recipientAddress,
            shipment.recipientEmail,
            shipment.recipientPhone
        );
    }
}

