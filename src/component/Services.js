import React from 'react'
import { FaGithub, FaLaptopCode,FaAndroid, FaApple, FaSearchengin, FaCodepen } from "react-icons/fa";
export default function Services() {
    return (
        <div className="servies">
            <div className="container">
              <div className="services__heading">
                <h3 className="heading">SERVICES</h3>
                 <h1 className="main__heading">My Services </h1>
                 <p className="mainContent">I'm Ready To Provide Any Services That You Want..</p>
                 <div className="border-middle">
                 </div>
              </div>

              <div className="row">
                <div className="col-4">
                   <div className="services__box">
                      <FaGithub className="cardIcon"/>
                      <div className="services__box__heading">
                        <h5> Web Development</h5>
                      </div>
                      <div className="services__box__content">
                      We are an international award-winning IT company with 6 offices across India, and offers web design, web development and digital marketing services.
                      </div>
                   </div>
                </div>
                <div className="col-4">
                <div className="services__box">
                <FaCodepen className="cardIcon"/>
                <div className="services__box__heading">
                  <h5> Web Design</h5>
                </div>
                <div className="services__box__content">
                We are an international award-winning IT company with 6 offices across India, and offers web design, web development and digital marketing services.
                </div>
             </div>
                </div>
                <div className="col-4">
                <div className="services__box">
                <FaAndroid className="cardIcon"/>
                <div className="services__box__heading">
                  <h5>Android Devlopment</h5>
                </div>
                <div className="services__box__content">
                We are an international award-winning IT company with 6 offices across India, and offers web design, web development and digital marketing services.
                </div>
             </div>
                </div>
              </div>



              
              <div className="row" style={{marginTop:"20px"}}>
                <div className="col-4">
                   <div className="services__box">
                      <FaApple className="cardIcon"/>
                      <div className="services__box__heading">
                        <h5>Apple Development</h5>
                      </div>
                      <div className="services__box__content">
                      We are an international award-winning IT company with 6 offices across India, and offers web design, web development and digital marketing services.
                      </div>
                   </div>
                </div>
                <div className="col-4">
                <div className="services__box">
                <FaSearchengin className="cardIcon"/>
                <div className="services__box__heading">
                  <h5> SEO</h5>
                </div>
                <div className="services__box__content">
                We are an international award-winning IT company with 6 offices across India, and offers web design, web development and digital marketing services.
                </div>
             </div>
                </div>
                <div className="col-4">
                <div className="services__box">
                <FaLaptopCode className="cardIcon"/>
                <div className="services__box__heading">
                  <h5>Software Devlopment</h5>
                </div>
                <div className="services__box__content">
                We are an international award-winning IT company with 6 offices across India, and offers web design, web development and digital marketing services.
                </div>
             </div>
                </div>
              </div>
            </div>
        </div>
    )
}
