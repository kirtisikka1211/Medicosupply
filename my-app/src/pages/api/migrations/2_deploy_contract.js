const Payment = artifacts.require("Payment");

module.exports = function (deployer) {
  // This is the vendor public key
  deployer.deploy(Payment, "0x18e00f1B52242dC970c8128F77aEF55c2155Fe12");
};
