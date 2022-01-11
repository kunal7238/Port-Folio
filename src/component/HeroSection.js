import React from "react";
import bob from "../assets/bob.png";


const Landing = () => {
  return (
    <div className=" w-full bg-primary flex justify-between">
      <div className=" w-1/2  text-white pt-40 pl-20">
        <h1 className="font-semibold text-purple-200">--------who is he?</h1>
        <h1 className="font-bold text-6xl ">Kunal Singh</h1>
        <p className="mt-4 text-purple-200">
          "A fresher with experience", this line says exactly who he is. He is a
          software developer who crafts beautiful web and apps. His perfect
          balance of technical & managerial skills stands him apart from the
          crowd.
        </p>
        <div className="w-full  flex justify-start mt-5">
          <button className="bg-red-300 w-60 mr-3 py-4 rounded-lg border-2 border-red-300   hover:bg-primary  hover:text-red-300  hover:border-red-300">
            Know More
          </button>
          <button className=" bg-primary w-60 rounded-lg text-red-300 border-2 border-red-300 hover:bg-red-300 hover:text-black">
            Download Resume
          </button>
        </div>
      </div>
      <div className="h-fit w-1/2 bg-primary">
    <img src={bob} alt="" className=" w-3/4 "  />
      </div>
    </div>
  );
};

export default Landing;
