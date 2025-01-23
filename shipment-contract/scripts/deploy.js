const hr = require("hardhat")

async function main() {
    const ShipmentTracking = await hr.ethers.getContractFactory("ShipmentTracking");
    const shipmentTracking = await ShipmentTracking.deploy();

    await shipmentTracking.waitForDeployment();
    console.log("ShipmentTracking deployed to:", shipmentTracking);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
