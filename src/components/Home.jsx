import React, { useState } from "react";
import leftImg from "../assets/membership1.jpg";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const images = [img1, img2, img3];
  const textArray = [
    "Lower Interest Rates",
    "Interest free payments",
    "Discount on materials",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const translateValue = -20 * currentIndex + "%";

  return (
    <div>
      {/* left side */}
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 lg:w-1/3 xl:w-2/4 inline-flex  items-center flex-col">
          <div>
            <h1 className="text-4xl font-normal mr-40">New Arrival</h1>
            <div className="inline-flex gap-1">
              <p className="underline underline-offset-4 font-bold text-xs">
                JOIN
              </p>
              <p className="font-bold text-xs">TODAY</p>
            </div>
          </div>
          <img src={leftImg} alt="" className="w-60" />
          <button
            className="bg-slate-400 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full w-60 mt-1"
            onClick={() => navigate("/register")}
          >
            Join Now
          </button>
        </div>

        {/* right side */}
        <div className="p-4 md:w-1/2 lg:w-2/3 xl:w-3/4 relative items-center inline-flex flex-col mr-5 justify-center ">
          <div>
            <h1 className="text-green-800 text-3xl font-thin inline-flex justify-center mb-4">
              Unlock Premium Features Now
            </h1>

            <div className="overflow-hidden">
              <div
                className="flex transition-transform ease-in-out duration-300"
                style={{
                  transform: `translateX(${translateValue})`,
                  height: "15rem",
                }}
              >
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`w-44 m:w-1/3 flex-shrink-0 border-2 rounded-3xl h-56 border-gray-300 ${
                      index < images.length - 1 ? "mr-4" : ""
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="rounded-t-2xl h-36 w-44 "
                    />
                    <div className="text-center mt-2">
                      <p className='class=" text-l px-8 bg-clip-text text-transparent font-semibold bg-gradient-to-br from-green-700 to-blue-800"'>
                        {textArray[index]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={goToPrevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2"
            >
              <FaAngleLeft />
            </button>

            <button
              onClick={goToNextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2"
            >
              <FaAngleRight />
            </button>
          </div>

          <button
            className="bg-gradient-to-r from-green-900 via-green-300  to-green-900  text-white font-normal py-1 px-4 rounded-full w-60 mt-4"
            onClick={() => navigate("/register")}
          >
            UNLOCK NOW
          </button>

          <button
            className="bg-gradient-to-r from-green-900 via-green-300  to-green-900  text-white font-normal py-1 px-4 rounded-full w-40 mt-4"
            onClick={() => navigate("/register")}
          >
            DETAILS
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
