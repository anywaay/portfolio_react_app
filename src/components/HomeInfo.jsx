import React from 'react'
// import { render } from 'react-dom'
import {Link } from 'react-router-dom';
import {arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText}) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className=" neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain"/>
        </Link>
    </div>
)

const renderContent = {
    1: ( <div className='neo-brutalism-blue'>
            <h1 className='sm:text-xl sm:leading-sung text-center  py-4 px-8 text-white mx-5'>
                Hi, Iam Ayush Tripathi aka <span className=' font-semibold'> Anywaay</span> <br />
                A Web Developer <br /><br/>
                <span className='text-blue-200' >"(spin around to see my world)"</span>
            </h1>
        </div>
    ),
    2: (
        <InfoBox 
            text ="Know more about my skills, achievements and experiences?"
            link = "/about"
            btnText="learn more"
        />
    ),
    3: (
        <InfoBox 
        text ="Explore My Project Journey: Click Here to Dive into My Portfolio and Witness the Impact I've Made from My Learning Phase Till Now!"
        link = "/projects"
        btnText="Visit my Portfolio"
    />
    ),
    4: (
        <InfoBox 
        text ="Seeking a Project Completion or in need of a Developer? I'm Just a Few Keystrokes Away, Ready to Assist!"
        link = "/contact"
        btnText="Let's talk"
    />
    )
}

const HomeInfo = ( {currentStage} ) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo