import React from "react";
import Header from "../component/Header";
import mongo from '../assets/mongodb.svg';
import node from '../assets/node.svg';

import react from '../assets/react.svg';
import js from '../assets/js.svg';
import reactnative from '../assets/react-native.svg';
import angular from '../assets/angular.svg';
import express from '../assets/express.svg';
import figma from '../assets/figma.svg';
import nextjs from '../assets/nextjs.svg';
import git from '../assets/git.svg';


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


        <div className=" w-1/2 bg-primary ">
          <div className="  flex flex-wrap h-96 mt-28 ml-24 mr-28 p-3 justify-around items-center">
            <img src={mongo} alt="mongodb" className="" />
            <img src={node} alt="mongodb" className="w-36" />
            <img src={react} alt="mongodb" className="w-28" />
            <img src={js} alt="mongodb" className="w-14" />
            <img src={reactnative} alt="mongodb" className="w-14" />
            <img src={angular} alt="mongodb" className="w-20" />
            <img src={express} alt="mongodb" className="" />
            <img src={figma} alt="mongodb" className="w-14 h-16" />
            <img src={nextjs} alt="mongodb" className="w-32" />
            <img src={git} alt="mongodb" className="w-28" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
