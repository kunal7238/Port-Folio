import React from 'react'
import { data } from '../assets/data';
import Card from '../component/Card'
import Header from '../component/Header'

import {Link} from 'react-router-dom';



function ProjectPage() {
    return (
        <div className="bg-primary">
            <Header/>
            {/* <Project/> */}
            <div className="bg-primary">
            <h1 className="font-bold text-5xl text-center text-white pt-16 ">Something that he has build</h1>
        <p className="mt-4 text-purple-200 text-center text-lg font-light">
        with love, expertise and pinch of magical ingredients
        </p>
            </div>

{/* Card */}
            <div className="flex flex-wrap justify-center mt-14">
                {
                    data.map((each)=>(
                         <Link to={`/${each.name}`}>
                            <Card name={each.name} desc={each.desc}/>
                        </Link>                       
                    )) 
                }        
            </div>
        </div>
    )
}

export default ProjectPage;
