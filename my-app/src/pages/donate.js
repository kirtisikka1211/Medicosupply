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
         
          <div>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6 mt-4 sm:place-items-center justify-items-center py-6 md:justify-self-end md:mt-20 md:ml-20">
                <div className="text-center h-[3rem] md:mb-10 justify-self-center sm:justify-self-center md:text-center md:ml-3 ">
                
                </div>
                <div className="text-center h-[3rem] justify-self-center sm:justify-self-center md:text-center md:ml-3">
                  
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
                   Number of Machines
                  </label>
                  <input
                    type="text"
                    id="n_books"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-darksalmon focus:border-darksalmon hover:border-darksalmon block w-full p-2.5 "
                    placeholder="Number of Machines"
                    required
                    name="n_books"
                  />
                  
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
                <Link href="/payment" passHref>
                  <button
                    type="submit"
                    className="text-white bg-darksalmon hover:bg-white hover:text-darksalmon border-darksalmon font-medium rounded-lg text-sm w-full sm:w-auto px-9 py-2.5 text-center text-[1rem]"
                  >
                    Submit
                  </button>
                </Link>
                </div>
              </div>
            </form>
          </div>  
      </div>
      <Footer />
    </div>
  );
};
export default DonatePage;
