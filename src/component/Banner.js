import React from 'react'
import { FaFacebookF, FaTwitter,FaInstagram,FaGithubSquare, FaPlay } from 'react-icons/fa';
import Man from "../man.png";
//FaFacebook
export default function Banner() {
    return (
        <header className="header">
            <div className="container">
              <div className="row">
                 <div className="col-6">
                     <div className="header__content">
                        <div className="header__section">
                        <ul className="header_ul">
                        <li>
                          <FaFacebookF/>
                        </li>
                        <li>
                        <FaTwitter/>
                      </li>
                      <li>
                        <FaInstagram/>
                      </li>
                      <li>
                      <FaGithubSquare/>
                    </li>
                     </ul>
                       
                        <h1>I Am Rushi Desai</h1>
                        <p>I,m Rushi, Professional Web Developer & Mobile App ​Developer</p>
                        <div className="header__buttons">
                          <a href="#" className="btn btn-outline">My Portfolio</a>
                          <a href="#" className="btn btn-smart">
                            <FaPlay/>
                          </a>
                        </div>
                     </div>
                     </div>
                 </div>
                 <div className="col-6">
                  <div className="banner_img">
                      <img src={Man} alt="ok"/>
                  </div>
                 </div>
              </div>
            </div>
        </header>
    )
}
