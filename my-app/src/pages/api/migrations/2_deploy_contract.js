const Payment = artifacts.require("Payment");

module.exports = function (deployer) {
  // This is the vendor public key
  deployer.deploy(Payment, "0x8e4a8283604E1f4ec27cEF5EC4e0E4CB274b7dB4");
};
