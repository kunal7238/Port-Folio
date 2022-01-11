import React, { useState } from "react";
import Header from "../component/Header";

const Contact = () => {

  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [message, setmessage] = useState('')

  

  const handleSubmit =(e)=>{

    e.preventDefault();
    console.log(name, email, message)
    setname("");
    setemail("");
    setmessage("")
  }

  return (
    <div className="bg-primary h-screen ">
      <Header />

      <div className="bg-primary flex items-center">
        <div className="w-1/2 text-white py-40 px-20">
          <h1 className="font-bold text-6xl  ">Get In Touch</h1>
          <p className="mt-4 text-purple-200">
            Let's talk about everything! 👋
          </p>
        </div>

        <div className="pl-20 w-1/2 text-center bg-primary  pr-10 mt-20">
          <div className="bg-gray-400 p-5 text-left rounded-md">
           <form action="" onSubmit={handleSubmit} className="flex flex-col px-10 py-5 space-y-5">

               <div className="flex flex-col ">
               <label htmlFor="name" className="text-xl font-bold ">Name</label>
               <input type="text" value={name} onChange={(e)=>setname(e.target.value)} required className="rounded-sm py-1.5 bg-slate-600  text-white pl-1.5" placeholder="Enter Your Name" />
               </div>

                  <div className="flex flex-col">
               <label htmlFor="email" className="text-xl font-bold">Email</label>
               <input type="text" value={email} onChange={(e)=>setemail(e.target.value)} required className="rounded-sm py-1.5 bg-slate-600 text-white pl-1.5" placeholder="Enter Your Email"/>
               </div>

               <div className="flex flex-col">
               <label htmlFor="message" className="text-xl font-bold">Message</label>
               <textarea type="text" value={message} onChange={(e)=>setmessage(e.target.value)} required className="rounded-sm py-1.5 bg-slate-600  text-white pl-1.5" placeholder="Type your messages!"/>
               </div>

               <button className="mx-auto bg-primary py-4 w-60 rounded-lg  border-primary border-2 text-red-300 hover:bg-red-300 hover:text-black">
            Send
          </button>
           </form>
          </div>
        </div>
      </div>

      <div className="flex bottom-3 w-full absolute bg-primary justify-center items-center text-white ">
        <div className=" h-0.5 bg-white w-1/3 mr-2"></div>
        <h1 className="text-center">Made with❤️by Kunal Singh</h1>
        <div className=" h-0.5 bg-white w-1/3 ml-2 "></div>
      </div>
    </div>
  );
};

export default Contact;
