import React, { useEffect } from 'react'
import {Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import underline from '../assets/nav_active.svg'

const Header = () => {

   const history = useHistory();


   const path = history.location.pathname.split("/")[1];
   
   useEffect(() => {
       
   }, [path])

    return (
        <div className="h-20 bg-primary w-full flex justify-between items-center">
            <div className="text-5xl text-white ml-3 font-bold logo" >Kunal</div>
            <div className="text-xl">
                <div className="flex absolute right-0 justify-evenly -mt-3 pr-5 font-semibold text-white">
                    <Link to="/" className="w-28">Home  
                    {path === "" &&
                    <img src={underline} alt="" /> }
                    </Link>
                    <Link to="/explore" className="w-28">Explore 
                    {path === "explore" && 
                    <img src={underline} alt="" />}
                    </Link>
                    <Link to="/work" className="w-28">Work 
                    {path === "work" && 
                    <img src={underline} alt="" />}
                    </Link>
                    <Link to="/project" className="w-28">Project 
                    {path === "project" && 
                    <img src={underline} alt="" />}
                    </Link>
                    <Link to="/contact" className="w-28">Contact 
                    {path === "contact" && 
                    <img src={underline} alt="" />}
                    </Link>
                </div>
            </div>
            
        </div>
    )
}

export default Header;
