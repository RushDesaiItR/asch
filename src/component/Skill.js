import React from 'react'
import { FaJava, FaReact, FaAngular, FaJs, FaCss3Alt, FaHtml5, FaPython, FaMicrosoft, FaCss3 } from "react-icons/fa";
export default function Skill() {
    return (
        <div className="skills">
            <div className="container">
               <div className="row">
                 <div className="col-6">
                    <div className="skills-left">
                    <h6>My Sills</h6>
                    <h1>Let,s Work Together</h1>
                    <p>Phasellus accumsan scelerisque dolor, quis mattis justo bibendum non. Nulla sollicitudin turpis in elementum varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae</p>
                   <br/>  <a href="#" className="hireme">HIRE ME</a>
                    </div>
                 </div>
                 <div className="col-6">
                    <div className="skills-cards">
                      <div className="row">
                         <div className="col-3">
                           <FaHtml5 className="skillslogo"/>
                           <h6>HTML</h6>
                         </div>
                         <div className="col-3">
                         <FaCss3 className="skillslogo"/>
                         <h6>CSS</h6>
                       </div>
                       <div className="col-3">
                       <FaJs className="skillslogo"/>
                       <h6>JS</h6>
                     </div>
                     <div className="col-3">
                     <FaJava className="skillslogo"/>
                     <h6>JAVA</h6>
                   </div>



                      </div>



                      <div className="row">
                      <div className="col-3">
                        <FaPython className="skillslogo"/>
                        <h6>Python</h6>
                      </div>
                      <div className="col-3">
                      <FaReact className="skillslogo"/>
                      <h6>ReactJs & Native</h6>
                    </div>
                    <div className="col-3">
                    <FaAngular className="skillslogo"/>
                    <h6>Angular</h6>
                  </div>
                  <div className="col-3">
                  <FaMicrosoft className="skillslogo"/>
                  <h6>.Net</h6>
                </div>



                   </div>
                    </div>
                 </div>
               </div>
            </div>
        </div>
    )
}
