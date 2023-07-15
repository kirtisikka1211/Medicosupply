import React, {useState} from 'react';
function PaymentForm() {

  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardExpiry,setCardExpiry] = useState('');
  const [cardCvc,setCardCvc] = useState('');
  const [amountToDonate,setAmount] = useState(' ');
  const [cardError,setCardError] = useState('');
  

  const handleCardNumberChange = (e) => {
    const inputCardNumber = e.target.value.replace(/\D/g, '').slice(0,16);
    setCardNumber(inputCardNumber);
  };

  const handleCardNameChange = (e) => {
    const inputCardName = e.target.value.replace(/[^a-zA-Z]/g, '').slice(0, 20);
    setCardName(inputCardName);
  };
  
  const handleCardExpiryChange = (e) => {
    setCardExpiry(e.target.value);
  };

  const handleCardCvcChange = (e) => {
    const inputCardCvc = e.target.value.replace(/\D/g, '').slice(0, 3);
    setCardCvc(inputCardCvc);
  };

  const handleAmountChange = (e) => {
    const inputAmount = e.target.value.replace(/\D/g, '').slice(0,6);
    setAmount(inputAmount);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate card number
    if (cardNumber.length !== 16 || isNaN(cardNumber)) {
      setCardError('Please enter a valid 16-digit card number.');
      return;
    }

    // Validate card CVC
    if (cardCvc.length !== 3 || isNaN(cardCvc)) {
      setCardError('Please enter a valid 3-digit CVC.');
      return;
    }

    // Validate amount to donate
    if (isNaN(amountToDonate)) {
      setCardError('Please enter a valid amount to donate.');
      return;
    }

    // Proceed with form submission or payment
    setCardError('');
    // Your logic for form submission or payment goes here
  };


  
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden  bg-[#daf5ffe3]" 
    style={{
        backgroundImage: `url("/bg2.jpg")`,
        height: "35vh",
        width: "220vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
        <div className="w-full p-20 m-auto bg-white bg-opacity- rounded-md  shadow-lg lg:max-w-xl ">
            <h1 className="text-3xl font-semibold text-center text-blue-600  uppercase ">Payment form</h1>
        <form className="mt-6" onSubmit={handleSubmit}>
        <div className="mb-2">
            <label for="cardNumber" className='block text-base font-semibold text-gray-800'>Card Number</label>
            <input type="number" placeholder='xxxx-xxxx-xxxx-xxxx' className='block w-full h-[40px] px-4 py-2 mt-2 text-gray-800 bg-white  border-black rounded-md focus:border-black-600 focus:ring focus:ring-opacity-40 ' value={cardNumber}   onChange={handleCardNumberChange} required/>
        </div>
        <div className="mb-2">
            <label for="cardName" className='block text-base font-semibold text-gray-800'>Cardholder Name</label>
            <input type="text" className='block w-full h-[40px] px-4 py-2 mt-2 text-gray-800  y border-black rounded-md focus:border-black-600 focus:ring focus:ring-opacity-40' value={cardName}   onChange={handleCardNameChange} required/>
        </div>
        <div className="mb-2">
            <label for="cardExpiry" className='block text-base font-semibold text-gray-800'>Expiry Date</label>
            <input type="date" className='block w-full h-[40px] px-4 py-2 mt-2 text-gray-800  bg-white  border-black rounded-md focus:border-black-600 focus:ring focus:ring-opacity-40' value={cardExpiry}   onChange={handleCardExpiryChange} required/>
        </div>
        <div className="mb-2">
            <label for="cardCvc" className='block text-base font-semibold text-gray-800'>CVC</label>
            <input type="text" placeholder='123' className='block w-full h-[40px] px-4 py-2 mt-2 text-gray-800  bg-white  border-black rounded-md focus:border-black-600 focus:ring focus:ring-opacity-40' value={cardCvc}   onChange={handleCardCvcChange} required/>
        </div>
        <div className='mb-2'>
  <label htmlFor="amountToDonate" className='block text-base font-semibold text-gray-800'>Amount to donate</label>
  <div className="relative">
    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
      ₹
    </span>
    <input
      type="number"
      className='pl-10 block w-full h-[40px] px-4 py-2 mt-2 text-gray-800  bg-white  border-black rounded-md focus:border-black-600 focus:ring focus:ring-opacity-40'
      value={amountToDonate}
      onChange={handleAmountChange}
      required
    />
  </div>
</div>

        {cardError && <div className="error">{cardError}</div>}
        <div className='mt-6 pt-4'>
            <button className="w-full h-[50px] px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-600  hover:bg-green-500 focus:outline-none focus:bg-blue-600" type="submit"  >Pay Now</button>
                
        </div>
    </form>
    
        </div>
    </div>
  )
}

export default PaymentForm






