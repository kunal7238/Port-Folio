import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Card from "./Card";
import { data } from "../assets/data";
import Header from "./Header";

const Project = () => {
  const history = useHistory();

  const path = history.location.pathname.split("/")[1];

  const [project, setproject] = useState([]);
  console.log(project);
  useEffect(() => {
    const newData = data.filter((each) => each.name === path);
    setproject(newData[0]);
  }, []);

  return (
    <>
      <Header />
      <div className=" bg-primary">
       
        <div className="bg-primary flex items-center">
          <div className="w-1/2 text-white py-40 px-20">
            <h1 className="font-bold text-6xl  ">{project.name}</h1>
            <p className="mt-4 text-purple-200">{project.desc}</p>
            <div className="w-full  flex justify-start mt-5">
              {project.github && (
                <a
                  href={`${project.github}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-red-300 text-center w-60 mr-3 py-4 rounded-lg border-2 border-red-300   hover:bg-primary  hover:text-red-300  hover:border-red-300"
                >
                  View on GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={`${project.live}`}
                  target="_blank"
                  rel="noreferrer"
                  className=" py-4 bg-primary w-60 text-center  rounded-lg text-red-300 border-2 border-red-300 hover:bg-red-300 hover:text-black"
                >
                  Visit Prject
                </a>
              )}
            </div>
          </div>

          <div className="pl-20 text-center">
            <Card name={project.name} desc={project.desc} />
          </div>
        </div>


        <div className="pb-20">
          <div className="mx-72">
            <h1 className="font-bold text-6xl text-center text-white mb-5 ">
              Let's talk about the project
            </h1>
            <p className="text-center"> 
              conneKt helps the alumni strengthen their relationships in the
              alma mater. It is an web based platform for students to get to
              know people around their college,connect with alumni, raise
              questions and widen their network. The alumni can share their
              experiences, provide the budding developers with opportunities,
              update their job details and renew their connections.
            </p>
          </div>

          <div className="mx-70 ">
            <h1 className="font-bold text-6xl text-center text-white ">
              What <span className="text-red-300"> Technologies </span> are used?
            </h1>
          </div>
        </div>


      </div>
    </>
  );
};

export default Project;
