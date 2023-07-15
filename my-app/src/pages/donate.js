import MainNavigation from "./main-navigation";
import { useState, useContext } from "react";
import Link from "next/link";
import AuthenticationContext from "@/context/AuthenticationContext";
import Footer from "./footer";
import axios from "axios";
import { InputTwoTone } from "@mui/icons-material";
// import { Dropdown } from "@nextui-org/react";

const DonatePage = () => {
  const [email, setEmail] = useState("");
  const [full_name, setFull_name] = useState("");
  const [phone_no, setPhone_no] = useState("");
  const [city, setCity] = useState("");
  const [no_of_books, setNo_of_books] = useState("");
  const [address, setAddress] = useState("");
  const [pin_code, setPin_code] = useState("");
  const [showModal, setShowModal] = useState(false);
    const [formValues, setFormValues] = useState([{ type: "", quantity: 0 }])
  const [inputFields, setInputFields] = useState([
    {
      category: "",
      num: "",
    },
  ]);
  
  // const addInputField = () => {
  //   setInputFields([
  //     ...inputFields,
  //     {
  //       category: "",
  //       num: "",
  //     },
  //   ]);
  // };
  // const removeInputFields = (index) => {
  //   const rows = [...inputFields];
  //   rows.splice(index, 1);
  //   setInputFields(rows);
  // };
  // const handleChange = (index, evnt) => {
  //   const { name, value } = evnt.target;
  //   const list = [...inputFields];
  //   list[index][name] = value;
  //   setInputFields(list);
  
  // };
  // console.log(inputFields);
 let dataValue={
    pre_primary:0,
    primary:0,
    secondary:0,
    senior_secondary:0
 }
  var json = JSON.stringify(inputFields);
  console.log(json);
  var stringify = JSON.parse(json);
for (var i = 0; i < stringify.length; i++) {
  if(stringify[i]['category']=='Pre-Primary'){
    //     // console.log('yes');
        pre_primary=stringify[i]['num'];
        console.log(pre_primary);
      }
      else if(stringify[i]['category']=='Primary'){
        primary=stringify[i]['num'];
        console.log(primary);
      }
      else if(stringify[i]['category']=='Secondary'){
        secondary=stringify[i]['num'];
        console.log(secondary);
      }
      else if(stringify[i]['category']=='Senior-Secondary'){
        senior_secondary=stringify[i]['num'];
        console.log(senior_secondary);
      }
}
  const { user } = useContext(AuthenticationContext);
  const a = user;
    const handleTypes = (i, e) => {
        let data = [...formValues];
        data[i][e.target.name] = e.target.value;
        setFormValues(data);
        console.log(formValues)
    }

    let addFormFields = () => {
        setFormValues([...formValues, { type: "", quantity: 0}]);
    }
    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target).entries());
        let books=null
        if (formValues[0].type === "" || formValues[0].quantity === 0) {
            books = null;
        }
        else {
            for(let i=0;i<formValues.length;i++) {
            if(formValues[i].type==="Pre-Primary") {
                dataValue['pre_primary'] = formValues[i].quantity
            }
            else if(formValues[i].type==="Primary"){
                dataValue['primary'] = formValues[i].quantity
            }
            else if(formValues[i].type==="Secondary"){
                dataValue['secondary'] = formValues[i].quantity
            }
            else if(formValues[i].type==="Senior-Secondary"){
                dataValue['senior_secondary'] = formValues[i].quantity
            }
            }
        }
        const bodyObject={
            full_name:data.full_name,
            email:data.email,
            phone_no:data.phone,
            address:data.address,
            pin_code:data.pin_code,
            no_of_books:data.n_books,
            username:a.username,
            pre_primary:Number(dataValue['pre_primary']),
            primary:Number(dataValue['primary']),
            secondary:Number(dataValue['secondary']),
            senior_secondary:Number(dataValue['senior_secondary'])

        }
        const response = await fetch('http://127.0.0.1:8000/api/book', {
            method: 'POST',
            body: JSON.stringify(bodyObject),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const result = await response.json();
        console.log(result);
   }
    const DonationInfo = async () => {
    // for(i=0;i<json.length; i++){
    //   if(json[i].category=='Pre-Primary'){
    //     // console.log('yes');
    //     setPre_primary(json[i].num);
    //   }
    //   else if(json[i].category=='Primary'){
    //     setPrimary(json[i].num);
    //   }
    // }
    let formField = new FormData();
    formField.append("email", email);
    formField.append("full_name", full_name);
    formField.append("phone_no", phone_no);
    formField.append("address", address);
    formField.append("pin_code", pin_code);
    formField.append("no_of_books", no_of_books);
    formField.append("username", a.username);
    formField.append("primary", primary);
    formField.append("pre_primary", pre_primary);
    formField.append("secondary", secondary);
    formField.append("senior_secondary", senior_secondary);
    // for(i=0;i<json.length; i++){
    //   if(json[i].category=='Pre-Primary'){
    //     console.log('yes');
    //     formField.append("primary", json[i].num);
    //   }
    //   else if(json[i].category=='Primary'){
    //     formField.append("pre_primary", json[i].num);
    //   }
    // }
    

    await axios({
      method: "post",
      url: "http://localhost:8000/api/book",
      data: formField,
    }).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <div className="">
      <MainNavigation />
      <div className="flex">
        <div
          style={{
            backgroundColor: "white",
            height: "10vh",
            width: "210vh",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-items-center md:place-items-center">
        <div className="sm:place-self-center">
          <img
            className="rounded-2xl w-[21rem] h-[27rem] md:w-[38.25rem] md:h-[44.25rem]"
            alt=""
            src="/dab20razorpay20lead20photo-koznvw5y6htr2qjpeg@2x.png"
          />
        </div>
        {user ? (
          <div>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6 mt-4 sm:place-items-center justify-items-center py-6 md:justify-self-end md:mt-20 md:ml-20">
                <div className="text-center h-[3rem] md:mb-10 justify-self-center sm:justify-self-center md:text-center md:ml-3 ">
                  <h2 className="text-black text-[1.5rem] md:text-[2rem]">
                    Donate a book to Booktown Foundation
                  </h2>
                </div>
                <div className="text-center h-[3rem] justify-self-center sm:justify-self-center md:text-center md:ml-3">
                  <h3 className="text-darksalmon text-[1.4rem]">
                    #NewChapterForOldBooks.
                  </h3>
                </div>
                <div className="w-[20rem] md:w-[20rem]">
                  <label
                    htmlFor="full_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Full name
                  </label>
                  <input
                    type="text"
                    id="full_name"
                    name="full_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-darksalmon focus:border-darksalmon hover:border-darksalmon block w-full p-2.5 "
                    placeholder="Enter full name "
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
                    name="phone"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-darksalmon focus:border-darksalmon hover:border-darksalmon block w-full p-2.5 "
                    placeholder="Enter your phone number"
                    required
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
                    name="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-darksalmon focus:border-darksalmon hover:border-darksalmon block w-full p-2.5 "
                    placeholder="Email address"
                    required
                  />
                </div>
                <div className="w-[20rem] md:w-[20rem]">
                  <label
                    for="address"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-darksalmon focus:border-darksalmon hover:border-darksalmon block w-full p-2.5 "
                    placeholder="Address"
                    required
                    name="address"
                  />
                </div>
                <div className="w-[20rem] md:w-[20rem]">
                  <label
                    for="city"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-darksalmon focus:border-darksalmon hover:border-darksalmon block w-full p-2.5 "
                    placeholder="City"
                    name="city"
                    required
                  />
                </div>
                <div className="w-[20rem] md:w-[20rem]">
                  <label
                    for="pin_code"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Pincode
                  </label>
                  <input
                    type="text"
                    id="pin_code"
                    name="pin_code"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-darksalmon focus:border-darksalmon hover:border-darksalmon block w-full p-2.5 "
                    placeholder="Area pincode"
                    required
                  />
                </div>
                <div className="w-[20rem] md:w-[20rem]">
                  <label
                    htmlFor="n_books"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Number of books to donate
                  </label>
                  <input
                    type="text"
                    id="n_books"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-darksalmon focus:border-darksalmon hover:border-darksalmon block w-full p-2.5 "
                    placeholder="Number of books"
                    required
                    name="n_books"
                  />
                  {/* <input
                      type="hidden"
                      id="username"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-darksalmon focus:border-darksalmon hover:border-darksalmon block w-full p-2.5 "
                      onChange={(e) => setUsername(e.target.value)}
                      value={username}
                    /> */}
                </div>
             
                    <div className="col-sm-12">
                        {formValues.map((element, index) => (
                            <div className=" mb-6" key={index}>
                                <div className="w-[21.4rem] place-self-end md:w-1/1 px-3 mb-6 ">
                                    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-darksalmon focus:border-darksalmon hover:border-darksalmon block w-full p-2.5" name="type" id="type" defaultValue={"Select Type"} onChange={e => handleTypes(index, e)}>
                                        <option disabled>Select Type</option>
                                        <option className="hover:bg-darksalmon text-black hover:text-white focus:text-white focus:ring-0 focus:bg-darksalmon">Pre-Primary</option>
                                        <option>Primary</option>
                                        <option>Secondary</option>
                                        <option>Senior-Secondary</option>
                                    </select>
                                </div>
                                <div className="w-[21.4rem] md:w-1/1 px-3 mb-6 md:mb-0">
                                    <input title="Quantity" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-darksalmon focus:border-darksalmon hover:border-darksalmon block w-full p-2.5 " name="quantity" id="quantity" type="Number" placeholder="Quantity" onChange={e => handleTypes(index, e)} />
                                </div>
                                <div>
                                {index ?
                                    <button type="button" className="ml-3 mt-3 text-darksalmon bg-white hover:bg-darksalmon hover:text-white border-darksalmon font-medium rounded-lg text-sm w-full sm:w-auto px-7 py-2 text-center text-[1rem]"
                                    onClick={() => removeFormFields(index)}>Remove</button>
                                    : null}</div>
                            </div>
                        ))}

                      <div className="row">
                        <div className="col-sm-12">
                          <button
                          className="ml-3 text-darksalmon bg-white hover:bg-darksalmon hover:text-white border-darksalmon font-medium rounded-lg text-sm w-full sm:w-auto px-7 py-2 text-center text-[1rem]"
                            onClick={() => addFormFields()}
                          >
                            Add New
                          </button>
                        </div>
                      </div>
                
                  <div className="col-sm-4"></div>
                </div>

                <div className=" items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    required
                  />
                  <label
                    for="remember"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    I agree with the{" "}
                    <a
                      href="#"
                      className="text-darksalmon hover:underline dark:text-darksalmon hover:scale-50 ease-in duration-300 "
                      onClick={() => setShowModal(true)}

                    >
                      terms and conditions
                    </a>
                  </label>
                  {showModal ? (
        <>
          <div
            className="justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Terms and conditions
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                  Please read these Terms and Conditions carefully before using the book donation form on our website.<br/>

Acceptance of Terms and Conditions<br/>
By accessing or using the book donation form on our website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not proceed with the donation process.<br/>

Book Donation Eligibility<br/>
2.1 The book donation form is intended for individuals or organizations who wish to donate books.<br/>
2.2 By submitting the donation form, you confirm that you are the legal owner of the books or have obtained the necessary permissions to donate them.<br/>

Book Donation Process<br/>
3.1 Complete and submit the book donation form with accurate and up-to-date information.<br/>
3.2 Once you submit the form, you grant us the right to review the details provided and accept or decline the donation at our discretion.<br/>
3.3 We reserve the right to refuse any book donation without providing a reason for the refusal.<br/>

Book Condition<br/>
4.1 By donating books, you confirm that the books are in good condition, free from excessive damage, mold, or other issues that may render them unfit for use.<br/>
4.2 We reserve the right to inspect the donated books upon receipt and determine their suitability for our purposes.<br/>
4.3 Books that do not meet our criteria may be declined or disposed of at our discretion.<br/>

Ownership and Rights<br/>
5.1 By donating books, you transfer ownership of the donated books to us.<br/>
5.2 We reserve the right to retain, sell, or dispose of the donated books as we see fit.<br/>
5.3 We may use the donated books for our own purposes, including but not limited to resale, distribution, or charitable activities.<br/>

Personal Information<br/>
6.1 By submitting the book donation form, you agree to provide accurate and complete personal information.<br/>
6.2 We will handle your personal information in accordance with our Privacy Policy, which is available on our website.<br/>

Liability<br/>
7.1 We make no guarantees or warranties regarding the suitability, quality, or condition of the donated books.<br/>
7.2 We shall not be held liable for any loss, damage, or injury arising from the donation, use, or handling of the donated books.<br/>
7.3 You agree to indemnify and hold us harmless from any claims, costs, or damages arising from your donation or breach of these Terms and Conditions.<br/>

Modifications and Termination<br/>
8.1 We reserve the right to modify or terminate the book donation form or these Terms and Conditions at any time without prior notice.<br/>
8.2 It is your responsibility to review the Terms and Conditions periodically for any changes.<br/>
8.3 Continued use of the book donation form after any modifications indicates your acceptance of the updated Terms and Conditions.<br/>

Governing Law<br/>
These Terms and Conditions shall be governed by and construed in accordance with the laws of [Jurisdiction]. Any disputes arising under or in connection with these Terms and Conditions shall be subject to the exclusive jurisdiction of the courts of [Jurisdiction].<br/>

By using the book donation form, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-white hover:bg-darksalmon text-darksalmon font-semibold hover:text-white py-2 px-5 border border-darksalmon hover:border-darksalmon rounded  uppercase text-sm mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                 
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    

                </div>
                <div className="">
                  <button
                    type="submit"
                    className="text-white bg-darksalmon hover:bg-white hover:text-darksalmon border-darksalmon font-medium rounded-lg text-sm w-full sm:w-auto px-9 py-2.5 text-center text-[1rem]"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-1 h-[20rem] object-center place-items-center bg-mistyrose">
              <div className="text-center justify-self-center sm:justify-self-center md:text-center md:ml-3">
                <h2 className="text-black text-[1.5rem] md:text-[2rem]">
                  Donate a book to Bookown Foundation
                </h2>
              </div>
              <div className=" text-center h-[2rem] justify-self-center sm:justify-self-center md:text-center md:ml-3">
                <h3 className="text-darksalmon md:text-[1.4rem]">
                  #NewChapterForOldBooks.
                </h3>
              </div>
              <div className="text-[1.3rem] text-black font-quicksand">
                Please login to fill the donation form
              </div>
              <div className="justify-self-center">
                <Link href="/login" passHref>
                  <button className="px-6 py-2 block bg-darksalmon text-white font-semibold border border-darksalmon cursor-pointer hover:bg-white hover:text-darksalmon rounded-lg shadow hover:scale-110 ease-in duration-300">
                    Login
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};
export default DonatePage;
