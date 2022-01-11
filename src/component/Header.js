import React from 'react'
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className="h-20 bg-primary w-full flex justify-between items-center">
            <div className="text-5xl text-white ml-5 font-bold logo" >Kunal</div>
            <div className="text-xl">
                <div className="flex space-x-4 pr-5 font-semibold text-white">
                    <Link to="/">Home</Link>
                    <Link to="/explore">Explore</Link>
                    <Link to="/work">Work</Link>
                    <Link to="/project">Project</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
            
        </div>
    )
}

export default Header;
