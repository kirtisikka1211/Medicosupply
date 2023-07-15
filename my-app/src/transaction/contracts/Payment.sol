pragma solidity ^0.8.0;

contract Payment {
    address payable public recipient;

    constructor(address payable _recipient) {
        recipient = _recipient;
    }

    function sendPayment() public payable {
        require(msg.value > 0, "Payment amount must be greater than zero.");
        recipient.transfer(msg.value);
    }
}
