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
            Welcome to Booktown Foundation
          </h1>
          <p className="text-[1rem] text-gray-700 md:text-[1.3rem] text-center md:mt-3 leading-[2rem]">
            Booktown Foundation is a non-profit organization that provides books
            to the needy in multiple Indian languages. Everyone has the right to
            read and we ensure it. Books help us throughout our lives in shaping
            person our future Money is not a big concern for us and thus, we
            don't accept donations in cash. If you really want to help someone,
            just donate us your old books, books that you don't anymore. As a
            nonprofit organization, our dream is to see a world where no one has
            to worry for these knowledgeable assets.
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
