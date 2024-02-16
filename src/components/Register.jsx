import React from "react";
import img from "../assets/celeb.png";

function Register() {
  return (
    <div>
      <div className="flex flex-col md:flex-row h-96 mt-10">
        {/* First Div */}
        <div className="p-16 md:w-1/2 justify-center inline-flex flex-col ">
          <h2 className="text-blue-400 text-4xl font-serif font-bold">
            Unlock Exclusive Benefits
          </h2>
          <label
            htmlFor="email"
            className="block text-sm font-light text-gray-700 my-2"
          >
            PHONE NUMBER
          </label>
          <div className="relative flex flex-wrap items-stretch gap-2 ">
            <input
              type="text"
              aria-label="First name"
              placeholder="+91 India"
              className="rounded-2xl relative m-0 block w-[1px] min-w-0 flex-auto border border-solid border-black bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            />

            <input
              type="text"
              aria-label="First name"
              placeholder="9645729210"
              className="rounded-2xl relative m-0 block w-[1px] min-w-0 flex-auto border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            />
          </div>
          <label
            htmlFor="email"
            className="block text-sm font-light text-gray-700 mt-3"
          >
            NAME
          </label>

          <input
            type="text"
            aria-label="Username"
            className="rounded-2xl mt-2 border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
          />
          <label
            htmlFor="email"
            className="block text-sm font-light text-gray-700 mt-3"
          >
            EMAIL[OPTIONAL]
          </label>
          <input
            type="text"
            aria-label="Username"
            className="rounded-2xl mt-2 border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
          />

          <button className="bg-blue-400 hover:bg-slate-700 text-white font-bold py-1 px-4 rounded-full w-100 mt-4">
            CONTINUE
          </button>

          <p className="mt-4 font-normal">
            Get ready to recieve a secret code (OTP) on your phone
          </p>
        </div>

        {/* Second Div */}
        <div className="p-4 md:w-1/2">
          <img src={img} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default Register;
