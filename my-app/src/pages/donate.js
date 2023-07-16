import MainNavigation from "./main-navigation";
import { useState, useContext } from "react";
import Link from "next/link";
import AuthenticationContext from "@/context/AuthenticationContext";
import Footer from "./footer";
import axios from "axios";
import { InputTwoTone } from "@mui/icons-material";

const DonatePage = () => {
  const [name, setName] = useState("");
  const [Address, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setProblem] = useState("");
  const [PinCode, setAmount] = useState("");
  const [machine, setUpi] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      Address,
      email,
      phone,
      PinCode,
      machine,
      quantity,
    };

    try {
      const response = await axios.post("http://localhost:8000/api/book", data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="">
      <MainNavigation />

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-items-center md:place-items-center">
        <div className="sm:place-self-center">
          <img
            className="rounded-2xl w-[21rem] h-[27rem] md:w-[30.25rem] md:h-[25.25rem] "
            alt=""
            src="/dab20razorpay20lead20photo-koznvw5y6htr2qjpeg@2x.png"
          />
        </div>
        <div className="border border-black p-5">
          <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-white">
            <div className="w-full p-20 m-auto bg-white border border-black bg-opacity-90 rounded-md lg:max-w-xl">
              <h2 className="text-3xl font-semibold text-center text-blue-600 uppercase">
                Upload Your Details Here
              </h2>
              <form className="mt-6 " onSubmit={handleSubmit}>
                <div className="mb-2 border">
                  <label className="">Name:</label>
                  <input
                    className="block w-full h-[40px] px-4 py-2 mt-2 text-gray-800 bg-white border border-black rounded-md focus:border-black-600 focus:ring focus:ring-opacity-40"
                    type="text"
                    value={name}
                    name="name"
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
                <div className="">
                  <label className="">Address:</label>
                  <input
                    className="block w-full h-[80px] px-4 py-2 mt-2 text-gray-800 bg-white border border-black rounded-md focus:border-black-600 focus:ring focus:ring-opacity-40"
                    type="text"
                    value={Address}
                    name="age"
                    onChange={(event) => setAge(event.target.value)}
                  />
                </div>
                <div className="">
                  <label className="">Email:</label>
                  <input
                    className="block w-full h-[30px] px-4 py-2 mt-2 text-gray-800 bg-white border border-black rounded-md focus:border-black-600 focus:ring focus:ring-opacity-40"
                    type="email"
                    value={email}
                    name="email"
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div className="">
                  <label className="">Phone:</label>
                  <input
                    className="block w-full h-[30px] px-4 py-2 mt-2 text-gray-800 bg-white border border-black rounded-md focus:border-black-600 focus:ring focus:ring-opacity-40"
                    type="text"
                    value={phone}
                    name="problem"
                    onChange={(event) => setProblem(event.target.value)}
                  />
                </div>
                <div className="">
                  <label className="">PinCode:</label>
                  <input
                    className="block w-full h-[30px] px-4 py-2 mt-2 text-gray-800 bg-white border border-black rounded-md focus:border-black-600 focus:ring focus:ring-opacity-40"
                    type="text"
                    value={PinCode}
                    name="amount"
                    onChange={(event) => setAmount(event.target.value)}
                  />
                </div>
                <div className="">
                  <label className="">Machine:</label>
                  <input
                    className="block w-full h-[30px] px-4 py-2 mt-2 text-gray-800 bg-white border border-black rounded-md focus:border-black-600 focus:ring focus:ring-opacity-40"
                    type="text"
                    value={machine}
                    name="upi"
                    onChange={(event) => setUpi(event.target.value)}
                  />
                </div>
                <div className="">
                  <label className="">Type of Machine:</label>
                  <select
                    className="block w-full h-[40px] px-4 py-2 mt-2 text-gray-800 bg-white border border-black rounded-md focus:border-black-600 focus:ring focus:ring-opacity-40"
                    name="type_of_machine"
                    onChange={(event) => setMachine(event.target.value)}
                    value={machine}
                  >
                    <option value="">Select Type of Machine</option>
                    <option value="Machine 1">Machine 1</option>
                    <option value="Machine 2">Machine 2</option>
                    <option value="Machine 3">Machine 3</option>
                  </select>
                </div>
                <div className="">
                  <label className="">Quantity:</label>
                  <input
                    className="block w-full h-[30px] px-4 py-2 mt-2 text-gray-800 bg-white border border-black rounded-md focus:border-black-600 focus:ring focus:ring-opacity-40"
                    type="number"
                    min="0"
                    value={quantity}
                    name="quantity"
                    onChange={(event) => setQuantity(event.target.value)}
                  />
                </div>
                <div className="flex justify-center items-center mt-5">
                  <button
                    className="hover:bg-green-500 bg-red-500 text-white py-2 px-4 rounded"
                    type="submit"
                  >
                    <Link href="/payment">Submit</Link>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DonatePage;
