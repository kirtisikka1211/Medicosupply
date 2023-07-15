import MainNavigation from "./main-navigation";
import Footer from "./footer";
import Map from "../components";
import { useState, useContext , useRef} from "react";
import * as React from 'react';
import axios from "axios";
import { Dropdown } from "@nextui-org/react";
import {SSRProvider, useIsSSR} from '@react-aria/ssr';
// import { NextUIProvider } from '@nextui-org/react';
// import { useSSR } from '@nextui-org/react';

const Contact = () => {
  // const { isBrowser, isServer } = useSSR()
  const [email, setEmail] = useState("");
  const [full_name, setFull_name] = useState("");
  const [phone_no, setPhone_no] = useState("");
  const [address, setAddress] = useState("");
  const [selected, setSelected] = React.useState(new Set(["Select type"]));
  const [ngo, setNgo] = useState("");
  const [org, setOrg] = useState("");
  const [query, setQuery] = useState("");
  const [website, setWebsite] = useState("");
  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", "),
    [selected]
  );
  console.log(selectedValue);

  const DonationInfo = async () => {
   
    let formField = new FormData();
    formField.append("email", email);
    formField.append("name", full_name);
    formField.append("phone_no", phone_no);
    formField.append("address", address);
    formField.append("ngo", ngo);
    formField.append("org", org);
    formField.append("type", selectedValue);
    formField.append("website", website);
    formField.append("query", query);
  

    await axios({
      method: "post",
      url: "http://localhost:8000/api/contact",
      data: formField,
    }).then((response) => {
      console.log(response.data);
    });
  };
  return (
   
    <div className="">
    <MainNavigation />
    <div>
    <form>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:place-items-center justify-items-center py-6 md:justify-self-end md:mt-20 ">
              <div className="text-center h-[3rem] mt-12 md:mt-2 justify-self-center sm:justify-self-center md:text-center md:ml-3 mb-3">
                <h3 className="text-black text-[2rem]">
                  Reach Out to us
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-1 divide-x-8 justify-items-center gap-x-40">
                <div className="justify-content-center">
              <div className="w-[20rem] md:w-[20rem]">
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 mt-1"
                >
                  Full name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 mb-2 text-gray-900 text-sm rounded-lg focus:ring-darksalmon focus:border-darksalmon hover:border-darksalmon block w-full p-2.5 "
                  placeholder="Enter full name "
                  onChange={(e) => setFull_name(e.target.value)}
                  value={full_name}
                />
              </div>

              <div className="w-[20rem] md:w-[20rem]">
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 mb-2 text-gray-900 text-sm rounded-lg focus:ring-darksalmon focus:border-darksalmon hover:border-darksalmon block w-full p-2.5 "
                  placeholder="Enter your phone number"
                  required
                  onChange={(e) => setPhone_no(e.target.value)}
                  value={phone_no}
                />
              </div>

              <div className="w-[20rem] md:w-[20rem]">
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 mb-8 text-gray-900 text-sm rounded-lg focus:ring-darksalmon focus:border-darksalmon hover:border-darksalmon block w-full p-2.5 "
                  placeholder="Email address"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              
              <div className="ml-20 mr-5">
                <Dropdown>
                  <Dropdown.Button flat css={{ tt: "capitalize"}} className="bg-white ring-2 text-[0.95rem] ring-darksalmon text-darksalmon px-9 py-2.5">
                    {selectedValue}
                  </Dropdown.Button>
                  <Dropdown.Menu
                  
                    aria-label="Single selection actions"
                    color="secondary"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={selected}
                    onSelectionChange={setSelected}
                  >
                    <Dropdown.Item key="select type" className="text-darksalmon  hover:bg-white focus:ring-darksalmon focus:ring-0 focus:bg-white" >Select type</Dropdown.Item>
                    <Dropdown.Item className="hover:bg-darksalmon text-black hover:text-white focus:text-white focus:ring-0 focus:bg-darksalmon" key="individual" withDivider>Individual</Dropdown.Item>
                    <Dropdown.Item className="hover:bg-darksalmon text-black hover:text-white focus:text-white focus:ring-0 focus:bg-darksalmon" key="business">Business</Dropdown.Item>
                    <Dropdown.Item className="hover:bg-darksalmon text-black hover:text-white focus:text-white focus:ring-0 focus:bg-darksalmon" key="NGO">NGO</Dropdown.Item>

                  </Dropdown.Menu>
                </Dropdown>
              </div>
              
              </div>
              
              <div>
                {selectedValue=="NGO" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 divide-x-8 justify-items-center gap-x-40 mt-7">
                
                  <div className="w-[20rem] md:w-[20rem]">
                <label
                  for="ngo"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Registered name
                </label>
                <input
                  type="text"
                  id="ngo"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-darksalmon focus:border-darksalmon hover:border-darksalmon block w-full p-2.5 "
                  placeholder="Name registered with the Government"
                  required
                  onChange={(e) => setNgo(e.target.value)}
                  value={ngo}
                />

              </div>
              
                  <div className="w-[20rem] md:w-[20rem]">
                <label
                  for="address"
                  className="block mb-2 mt-3 md:mt-0 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-darksalmon focus:border-darksalmon hover:border-darksalmon block w-full p-2.5 "
                  placeholder="Official address"
                  required
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                />

              </div>
              <div className="w-[20rem] md:w-[20rem]">
                <label
                  for="query"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-3"
                >
                  Enter your query:
                </label>
                <textarea
                  type="text"
                  id="query"
                  maxLength={500}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-darksalmon focus:border-darksalmon hover:border-darksalmon block h-[8rem] w-full p-2.5 "
                  placeholder="Ask anything you want to know!"
                  onChange={(e) => setQuery(e.target.value)}
                  value={query}
                />

              </div>
              <div className="w-[20rem] md:w-[20rem]">
                <label
                  for="website"
                  className="block mb-2 text-sm font-medium text-gray-900 justify-self-center dark:text-white mt-3"
                >
                  Website
                </label>
                <input
                  type="text"
                  id="website"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-darksalmon focus:border-darksalmon hover:border-darksalmon block w-full p-2.5 "
                  placeholder="Website url (optional)"
                  onChange={(e) => setWebsite(e.target.value)}
                  value={website}
                />
                <button
                  type="submit"
                  className="text-white bg-darksalmon hover:bg-white mb-5 ml-20 hover:text-darksalmon border-darksalmon mt-7 font-medium rounded-lg text-sm  px-10 py-2.5 text-center text-[1rem]"
                  onClick={DonationInfo}
                >
                  Submit
                </button>
              </div>
              </div>
              ): null}
              {selectedValue=="business" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 divide-x-8 justify-items-center gap-x-40 mt-7">
              
                  <div className="w-[20rem] md:w-[20rem]">
                <label
                  for="org"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name of business
                </label>
                <input
                  type="text"
                  id="org"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-darksalmon focus:border-darksalmon hover:border-darksalmon block w-full p-2.5 "
                  placeholder="Officially registered name"
                  required
                  onChange={(e) => setOrg(e.target.value)}
                  value={org}
                />

              </div>
                  <div className="w-[20rem] md:w-[20rem]">
                <label
                  for="address"
                  className="block mb-2 mt-3 md:mt-0 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-darksalmon focus:border-darksalmon hover:border-darksalmon block w-full p-2.5 "
                  placeholder="Official address"
                  required
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                />

              </div>
              <div className="w-[20rem] md:w-[20rem]">
                <label
                  for="query"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-3"
                >
                  Enter your query:
                </label>
                <textarea
                  type="text"
                  id="query"
                  maxLength={500}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-darksalmon focus:border-darksalmon hover:border-darksalmon block h-[8rem] w-full p-2.5 "
                  placeholder="Ask anything you want to know!"
                  onChange={(e) => setQuery(e.target.value)}
                  value={query}
                />
                
                
              </div>
              <div className="w-[20rem] md:w-[20rem]">
                <label
                  for="website"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-3"
                >
                  Website
                </label>
                <input
                  type="text"
                  id="website"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-darksalmon focus:border-darksalmon hover:border-darksalmon block w-full p-2.5 "
                  placeholder="Website url (optional)"
                  onChange={(e) => setWebsite(e.target.value)}
                  value={website}
                />
                <button
                  type="submit"
                  className="text-white bg-darksalmon hover:bg-white ml-20 mb-5 hover:text-darksalmon border-darksalmon mt-7 font-medium rounded-lg text-sm  px-10 py-2.5 text-center text-[1rem]"
                  onClick={DonationInfo}
                >
                  Submit
                </button>
              </div>
            

              </div>
        
              ): null}
              {selectedValue=="individual" ? (
                
                <div>
              <div className="w-[20rem] md:w-[20rem] mt-6">
                <label
                  for="query"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Enter your query:
                </label>
                <textarea
                  type="text"
                  id="query"
                  maxLength={500}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-darksalmon focus:border-darksalmon hover:border-darksalmon block h-[8rem] w-full p-2.5 "
                  placeholder="Ask anything you want to know!"
                  onChange={(e) => setQuery(e.target.value)}
                  value={query}
                />
                <div className="justify-self-center">
                <button
                  type="submit"
                  className="text-white bg-darksalmon hover:bg-white mb-5 ml-20 hover:text-darksalmon border-darksalmon mt-7 font-medium rounded-lg text-sm  px-10 py-2.5 text-center text-[1rem]"
                  onClick={DonationInfo}
                >
                  Submit
                </button>
              </div>
              </div>
              </div>
              ): null}
              </div>
              
              </div>
              
            </div>
            
          </form>
    </div>
      <div className="grid grid-cols-1 mt-6 justify-items-center sm:grid-cols-3 md:grid-cols-3 gap-y-6 ">
        <div className="grid grid-cols-2 justify-items-center sm:grid-cols-1">
          <div className="w-[3rem] place-self-center">
            <img
              className="rounded-2xl w-[4.25rem] align-self-center h-[8.5rem]"
              alt=""
              src="/frame10.svg"
            />
          </div>
          <div className="w-[8rem] text-center place-self-center">
            <p>+91 R-Z-G 554, Raj Nagar - II,Palam Colony, New Delhi 10077</p>
          </div>
        </div>
        <div className="grid grid-cols-2 justify-items-center sm:grid-cols-1">
          <div className="w-[3rem] place-self-center">
            <img
              className="rounded-2xl w-[4.25rem] align-self-center h-[3rem]"
              alt=""
              src="/frame11.svg"
            />
          </div>
          <div className="w-[8rem] text-center place-self-start">
            <p>+91 95464XXXXX</p>
          </div>
        </div>
        <div className="grid grid-cols-2 justify-items-center sm:grid-cols-1">
          <div className="w-[3rem] place-self-center">
            <img
              className="rounded-2xl w-[4.25rem] align-self-center h-[3.8rem]"
              alt=""
              src="/frame12.svg"
            />
          </div>
          <div className="w-[8.5rem] text-center place-self-start">
            <p>
              info@booktown
              <br />
              foundation.org
            </p>
          </div>
        </div>
      </div>  
      <Map/>
        <Footer/>
    </div>
   
  );
};

export default Contact;