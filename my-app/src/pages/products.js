import { useRouter } from "next/router";
import React, { useState } from "react";
import MainNavigation from "./main-navigation";
import Footer from "./footer";

const Home = () => {
  const router = useRouter();

  // Store the prices for each product in an array
  const products = [
    {
      name: "Ventilator",
      price: "5,20,000",
      image:
        "https://media.istockphoto.com/id/1219641664/photo/group-of-ventilator-machines.jpg?s=2048x2048&w=is&k=20&c=145RkxDJ-tgnBg7rG9B0Ri36LMEwJvtOPoUC2gv008A=",
    },
    {
      name: "Oxygen Cylinders",
      price: "11000",
      image:
        "https://media.istockphoto.com/id/1131194018/photo/close-up-of-medical-oxygen-flow-meter-shows-low-oxygen-or-an-nearly-empty-tank.jpg?s=612x612&w=0&k=20&c=NnCjzvcb04FaRJcPH6KHmNAVW0o0xw1o1ZXO0GCDR8Q=",
    },
    {
      name: "Dialysis Machine",
      price: "1250000",
      image:
        "https://media.istockphoto.com/id/477898536/photo/dialysis-machine-in-a-medical-center.jpg?s=612x612&w=0&k=20&c=E273NsXzVZxL4VyJ_B9468FY9SYmIUlpon8e1BXClO8=",
    },
    {
      name: "Electrocardiogram",
      price: "170000",
      image:
        "https://cdn10.bigcommerce.com/s-p10g1rn/product_images/uploaded_images/shutterstock-414452563-ecg2.jpg",
    },
    {
      name: "Ultrasound Scanner",
      price: "350000",
      image:
        "https://150085841.v2.pressablecdn.com/wp-content/uploads/2020/09/Anjue-Ultrasound-AJ-6100B-1.jpg",
    },
    {
      name: "MRI Machine",
      price: "4500000",
      image:
        "https://media.istockphoto.com/id/517458754/photo/mri-magnetic-resonance-imaging-machine.jpg?s=612x612&w=0&k=20&c=JJiAhnpYc-2J2SY1ZLluz7aKLW6o2oeIVO32p5NnPMk=",
    },
    {
      name: "CT Scanner",
      price: "4200000",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz_UPvRopgJvIslo7_Suui-cNDVX0KDQs9Iw",
    },
    {
      name: "X-Ray Machine",
      price: "250000",
      image: "https://cpimg.tistatic.com/05918899/b/4/X-Ray-Machine.jpg",
    },
    {
      name: "Defibrillator",
      price: "157000",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4-Cp6oAxN6kuJ6xuqS98yoYRZ7Der4KybLg",
    },
    // Add hospital equipment here...
  ];

  const [selectedProductPrice, setSelectedProductPrice] = useState(null);

  const ToPayment = (productPrice) => {
    setSelectedProductPrice(productPrice);
    router.push({
      pathname: "/payment",
      query: { productPrice: productPrice },
    });
  };

  return (
    <div className="main">
      <MainNavigation />
      {/* Header code */}
      <div className="w-full py-10 px-9 sm:px-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="shadow-lg rounded-lg overflow-hidden hover:scale-105 duration-300"
            >
              <div className="bg-gray-300 w-full h-60 flex items-center justify-center">
                <p className="text-2xl font-bold text-gray-700">
                  <img src={product.image} alt="" />
                </p>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-center">
                  {product.name}
                </h2>
                <p className="text-black text-lg mb-2">
                  Price: {product.price}
                </p>
                <div className="mt-4 text-center">
                  <button
                    className="bg-green-600 text-white py-3 px-10 rounded-md"
                    onClick={() => ToPayment(product.price)}
                  >
                    Buy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
      <Footer />
    </div>
  );
};

export default Home;
