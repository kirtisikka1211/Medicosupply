const Payment = artifacts.require("Payment");

module.exports = function (deployer) {
  // This is the vendor public key
  deployer.deploy(Payment, "0xeA79a2Eb70445279e233f8b2224363eFd7B67bfD");
};
