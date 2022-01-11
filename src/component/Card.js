import React from 'react'
// import { VscGithub } from 'react-icons/vsc';
// import {HiOutlineExternalLink} from 'react-icons/hi'
 
function Card({
    name, desc, github, live
}) {
    return (
        <div className="text-white w-96  bg-gray-500 rounded-lg p-5 flex flex-col border-2 border-gray-500 hover:border-white  justify-between m-2 shadow-lg shadow-gray-600" >
            <div className="">
                <h1 className="text-2xl font-bold">{name}</h1>
                <p>{desc}

                </p>
            </div>

            {/* <div className=" space-x-3 mt-3 flex text-primary" >
               {  ( <a href={github} className="font-bold text-sm hover:text-white flex items-center ">GitHub <VscGithub className="ml-1"/></a>
               )}
                <a  href={live} className="font-bold text-sm hover:text-white flex items-center">Live <HiOutlineExternalLink className="ml-1"/></a>
            </div> */}
        </div>
    )
}

export default Card;
