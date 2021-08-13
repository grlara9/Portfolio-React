import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Aboutme.css'
import guillermo from '../images/guillermo.jpg'
import { Link } from 'react-router-dom';

const Aboutme =()=>{
    return(
       <div className="container">
           <div className="aboutme">
            <div className="aboutme__image"> 
                <img src={guillermo} alt="my profile picture" />
            </div>

            <div className="aboutme__info"> 
                <h1>Guillermo Lara</h1>
                <h2>Full Stack Developer/ React Developer</h2> 
                <p>Hi, I'm <span style={{color: 'rgb(227, 64, 95)', fontWeight: 'bolder'}}>Guillermo,</span>, I'm a full stack developer living in San Diego</p>
    
            </div>
            <div className="aboutme__links">
                <p><a href="https://www.linkedin.com/in/guillermo-lara-7a0147161/"><img src="https://img.icons8.com/color/48/000000/linkedin-circled--v1.png" className="links"
                /></a>  | 
               <a href="https://github.com/grlara9"><img src="https://img.icons8.com/color/48/000000/github--v1.png" className="links"/> </a> </p>
            </div>
        </div>
        </div>
        
    );
}
export default Aboutme
