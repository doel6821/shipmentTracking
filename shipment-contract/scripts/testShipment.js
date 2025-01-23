const hr = require("hardhat");

async function main() {
    const ShipmentTracking = await hr.ethers.getContractFactory("ShipmentTracking");
    const shipmentTracking = await ShipmentTracking.attach("0x5FbDB2315678afecb367f032d93F642f64180aa3")

    // const id = await shipmentTracking.createShipment(
    //     "KTSGHDGH",
    //     "Created",
    //     "abdul",
    //     "Jl. Test123",
    //     "test@mail.com",
    //     "081229213553"
    // );
    // console.log("id pengiriman : ", id);
    // await shipmentTracking.updateShipmentStatus("Sn5IWqFT", "Shipped")
    
    // await shipmentTracking.updateShipmentStatus("KTSGHDGH", "Terkirim")
    // const dataShipment = await shipmentTracking.getShipment("Sn5IWqFT")
    const dataShipment = await shipmentTracking.getShipment("KTSGHDGH")
    console.log("data pengiriman : ", dataShipment);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
