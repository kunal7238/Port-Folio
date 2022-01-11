import React from "react";
import Header from "../component/Header";

function Explore() {
  return (
    <div className="bg-primary h-screen w-screen">
      <Header />
      <div className=" bg-primary flex justify-between">
        <div className=" w-1/2  text-white pt-40 pl-20">
          <h1 className="font-semibold text-purple-200">
            --------What does he do?
          </h1>
          <p className="mt-3 text-purple-200 text-3xl">
            He creates elegant, logical web and mobile app solutions. In his
            hobby time, he designs.
          </p>
          <h1 className="font-extrabold text-6xl ">
            Think. <span className="text-red-300">Code.</span> <br /> Debug.
          </h1>
        </div>
        <div className="  bg-primary"></div>
      </div>
    </div>
  );
}

export default Explore;
