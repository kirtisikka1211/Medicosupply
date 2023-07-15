import Footer from "./footer";
import MainNavigation from "./main-navigation";


const AboutPage = () => {
  return (
    <div className="">
      <MainNavigation />

      <div className="flex">
        <div
          style={{
            backgroundImage: `url("/image-4@2x.png")`,
            height: "35vh",
            width: "220vh",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className=" text-white text-[3.56rem] flex font-quicksand text-center items-center justify-center"
        >
          <span className="mt-12 font-quicksand justify-self-center">About</span>
        </div>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 md:gap-x-6 justify-items-center place-items-center mb-8 mt-5">
        <div className="md:justify-self-center lg:justify-self-start md:ml-9 md:mt-5 ">
          <img
            className="rounded md:w-[35.13rem] md:h-[23.13rem] w-[21.13rem] h-[15.75rem] "
            alt=""
            src="/image-5@2x.png"
          />
        </div>

        <div className="justify-self-center md:mr-4 ml-4 mr-4">
          <h1 className="text-[2rem] md:text-[3rem] mb-6 text-center font-semibold  text-darksalmon font-quicksand">
          Welcome to Medico
          </h1>
          <p className="text-[1rem] text-gray-700 md:text-[1.3rem] text-center md:mt-3 leading-[2rem]">
          At Medico, we are dedicated to providing you with a seamless experience in purchasing hospital equipment. We understand the critical role that high-quality medical devices play in patient care, and our goal is to make the process of acquiring essential equipment as efficient and reliable as possible.


          </p>
        </div>
        

      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
