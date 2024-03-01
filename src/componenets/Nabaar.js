import React from "react";
import { useState } from "react";
// import {Link} from "react-router-dom" ;



function Nav(props) {


         // use state for dark mode

         const [DarkMode, setDarkMode] = useState("light")  
    
    

         // dark theme function
    let toggle=()=>{
        if(DarkMode==="light"){
            setDarkMode('dark')
           
        }else{
            setDarkMode('light')
           
        }
    }





    return (
        <div>
            

            <nav className={`navbar navbar-expand-lg navbar-${DarkMode} bg-${DarkMode } p-3`}>
                <div className="container-fluid">
                    <a className="navbar-brand text-success" href="#">Textutils</a>
                    <div className="collapse navbar-collapse" id="navbarNav">

                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <a className="nav-link active" href="#">Home</a>
                            </li>


                            {/* <li className="nav-item">
                                <a className="nav-link" href="#">about</a>
                            </li> */}

                        </ul>

                       
                        </div>
                        <div className={`form-check form-switch text-${DarkMode ==='light' ? 'dark':'light'}`}>
                            <input className="form-check-input" onClick={toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" > dark Mode</label>
                    </div>
                </div>
            </nav>


        </div>


    )
}

export default Nav