import React from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';



function AboutMe() {
    return (
        <section className="p-4 bg-light" style={{ minHeight: "100vh"}}>
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6">
                        <h1><b>Hi, I'm Billy Nunes, <br></br>FULL STACK DEVELOPER</b></h1>
                        <p>Hi, I'm Billy Nunes. A full stack developer from London. I graduated with a BSc in Computer Science from the University of Westminster. I want to help your business grow and level up my skills as a developer.</p>
                        <Link type="button" class="btn btn-primary" to="/contact">Contact Me <FontAwesomeIcon icon={faArrowRight} /></Link>
                    </div> 

                    <div className="col-md-6">
                    <img src="/sc-1.png" alt="Illustration" className="headerimg w-100"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;