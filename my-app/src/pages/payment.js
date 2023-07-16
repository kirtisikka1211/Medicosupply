import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Web3 from "web3"; // Import Web3.js library

// Contract ABI
const contractAbi = [
  {
    inputs: [
      { internalType: "address payable", name: "_recipient", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "recipient",
    outputs: [{ internalType: "address payable", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "sendPayment",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

// Contract Address
// This is the vendor contract address
// you get after deploying the contract
// using truffle migrate --reset
const contractAddress = "0x8e4a8283604E1f4ec27cEF5EC4e0E4CB274b7dB4";

const Payment = () => {
  const router = useRouter();
  const [MetaMaskID, LoggedinUser] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [productPrice, setProductPrice] = useState("0");
  const [PaymentStatus, setPaymentStatus] = useState("");

  useEffect(() => {
    const price = router.query.productPrice || "0";
    setProductPrice(price);
  }, [router.query.productPrice]);

  useEffect(() => {
    // Function to get the user's Ethereum address (MetaMask ID) after they log in
    const getMetaMaskID = async () => {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: "eth_accounts" });
        if (accounts.length > 0) {
          LoggedinUser(accounts[0]); // Update the MetaMaskID state with the user's Ethereum address
        }
      }
    };

    getMetaMaskID();
  }, []);

  const amountPayable =
    (quantity * parseFloat(productPrice.replace(/,/g, ""))) / 150000;

  // Web3 Instance

  // Function to make a payment using Web3.js
  const makePayment = async (event) => {
    event.preventDefault();

    try {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });

        const accounts = await web3.eth.getAccounts();
        const contract = new web3.eth.Contract(contractAbi, contractAddress);

        const paymentInWei = web3.utils.toWei(
          amountPayable.toString(),
          "ether"
        );

        await contract.methods.sendPayment().send({
          from: accounts[0],
          value: paymentInWei,
        });

        setPaymentStatus("Payment successful!"); // Simulated payment success
      } else {
        console.log("No Web3 provider detected");
        setPaymentStatus("Payment failed!");
      }
    } catch (error) {
      console.error("Error making payment:", error);
      setPaymentStatus("Payment failed!");
    }
  };

  return (
    <div
      className="relative flex flex-col justify-center min-h-screen overflow-hidden  bg-[#daf5ffe3]"
      style={{
        backgroundImage: `url("/bg2.jpg")`,
        height: "35vh",
        width: "220vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full p-20 m-auto bg-white bg-opacity- rounded-md  shadow-lg lg:max-w-xl ">
        <h1 className="text-3xl font-semibold text-center text-blue-600  uppercase ">
          Payment form
        </h1>
        <form className="mt-6" onSubmit={makePayment}>
          <div className="mb-2">
            <label
              htmlFor="cardName"
              className="block text-base font-semibold text-gray-800"
            >
              Meta Mask ID
            </label>
            <input
              type="text"
              className="block w-full h-[40px] px-4 py-2 mt-2 text-gray-800  y border-black rounded-md focus:border-black-600 focus:ring focus:ring-opacity-40"
              value={MetaMaskID}
              placeholder={LoggedinUser}
              readOnly
            />
          </div>
          <br />
          <div className="flex items-center">
            <label
              htmlFor="quantity"
              className="block text-base font-semibold text-gray-800"
            >
              Quantity:
            </label>
            <input
              className="block w-20 h-[30px] px-2 py-1 text-gray-800 bg-white border border-black rounded-md focus:border-black-600 focus:ring focus:ring-opacity-40"
              type="number"
              min="0"
              value={quantity}
              name="quantity"
              onChange={(event) => setQuantity(event.target.value)}
            />
          </div>
          <br />
          <div className="mb-2">
            <label
              htmlFor="amountPayable"
              className="block text-base font-semibold text-gray-800"
            >
              Amount payable
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                ETH
              </span>
              <input
                type="number"
                className="pl-16 block w-full h-[40px] px-4 py-2 mt-2 text-gray-800  bg-white  border-black rounded-md focus:border-black-600 focus:ring focus:ring-opacity-40"
                value={amountPayable}
                readOnly
              />
            </div>
          </div>
          <br />
          <div className="mb-2">
            <label className="block text-base font-semibold text-gray-800">
              Payment Status
            </label>
            <label>{PaymentStatus}</label>
          </div>

          <div className="mt-6 pt-4">
            <button
              className="w-full h-[50px] px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-600  hover:bg-green-500 focus:outline-none focus:bg-blue-600"
              type="submit"
              onClick={makePayment}
            >
              Pay Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;
