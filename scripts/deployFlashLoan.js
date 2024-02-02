const hre = require("hardhat");

async function main() {
  console.log("Deploying FlashLoan contract...");
  const FlashLoan = await hre.ethers.getContractFactory('FlashLoan');
  const flashLoan = await FlashLoan.deploy("0x012bAC54348C0E635dCAc9D5FB99f06F24136C9A");

  console.log("Flash loan contract deployed at:", flashLoan.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
