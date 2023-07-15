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
const contractAddress = "0xeA79a2Eb70445279e233f8b2224363eFd7B67bfD";

// Web3 Instance
let web3;

// Function to connect to Web3 provider
async function connectWeb3() {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
        } catch (error) {
            console.error('Error requesting accounts:', error);
        }
    } else if (window.web3) {
        web3 = new Web3(window.web3.currentProvider);
    } else {
        console.log('No Web3 provider detected');
    }
}

// Function to make a payment
async function makePayment(event) {
    event.preventDefault();
    
    try {
        const accounts = await web3.eth.getAccounts();
        const contract = new web3.eth.Contract(contractAbi, contractAddress);
        
        const paymentAmount = document.getElementById('paymentAmount').value;
        const paymentInWei = web3.utils.toWei(paymentAmount, 'ether');
        
        await contract.methods.sendPayment().send({
            from: accounts[0],
            value: paymentInWei,
        });
        
        updatePaymentStatus('Payment successful!');
    } catch (error) {
        console.error('Error making payment:', error);
        updatePaymentStatus('Payment failed!');
    }
}

// Function to update the payment status
function updatePaymentStatus(status) {
    const paymentStatusElement = document.getElementById('paymentStatus');
    paymentStatusElement.textContent = status;
}

// Main function to initialize the app
async function initApp() {
    await connectWeb3();

    const contractAddressElement = document.getElementById('contractAddress');
    contractAddressElement.textContent = contractAddress;

    const paymentForm = document.getElementById('paymentForm');
    paymentForm.addEventListener('submit', makePayment);
}

// Initialize the app
initApp();
