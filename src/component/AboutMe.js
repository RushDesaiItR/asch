import React from 'react'
import Me from "../me-01-alt.png"
export default function AboutMe() {
    return (
        <div className="aboutme">
            <div className="container">
            <div className="services__heading">
            <h3 className="heading">SERVICES</h3>
             <h1 className="main__heading">My Services </h1>
             <p className="mainContent">I'm Ready To Provide Any Services That You Want..</p>
             <div className="border-middle">
             </div>
          </div>


          <div className="row">
            <div className="col-6">
                <div className="me_img">
                   <img src={Me}/>
                </div>
            </div>
            <div className="col-6">
               <div className="me_info">
                  <h3><strong>Hi Guys..!</strong></h3>
                  <p>In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis

                  nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis porta sem turpis quis leo. Nulla in feugiat elit</p>
                  <div className="me-other">
                    <div className="row">
                       <div className="col-6">
                          <h5>
                            <span> <strong>Name:</strong></span>
                            <br/>
                             Rushi Desai
                          </h5>
                         
                       </div>
                       <div className="col-6">
                       <h5>
                            <span> <strong>Email:</strong></span>
                            <br/>
                            rushikeshmahavirdesai@gmail.com
                          </h5>
                      
                    </div>
                    </div>

                    <div className="row">
                    <div className="col-6">
                       <h5>
                         <span> <strong>Phone:</strong></span>
                         <br/>
                          9890436254
                       </h5>
                      
                    </div>
                    <div className="col-6">
                    <h5>
                         <span> <strong>Address:</strong></span>
                         <br/>
                         Jaysingpur, Mahastra India
                       </h5>
                   
                 </div>
                 </div>
                  </div>
               </div>
            </div>
            </div>
            </div>
        </div>
    )
}
