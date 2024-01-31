import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faGitAlt, faPython, faSquareGithub} from '@fortawesome/free-brands-svg-icons';
import { faServer, faDatabase, faGear, faTerminal, faMobileScreen} from '@fortawesome/free-solid-svg-icons';



    const iconStyles = {
      backgroundColor: "#2F3E4F",  
      borderRadius: "10px",       
      padding: "10px",            
      margin: "10px",             
      textAlign: "center",
      width: 100,
    };

function Skills() {
    const sectionStyles = {
        background: "linear-gradient(45deg)"
    }
    return(
        <section className="p-4" style={{ minHeight: "100vh"}}>
            <h2><b>My Toolbox</b></h2>
            <p>The skills, tools and technologies I use to bring your products to life!</p>

            <div className="row d-flex justify-content-center">
    
                <div className="col-md-1 mb-3 me-2 text-center text-white">
                    <div style={iconStyles}>
                        <FontAwesomeIcon icon={faHtml5} size="3x" />
                        <span className="d-block mt-2 me">HTML5</span>
                    </div>
                </div>
               

                <div className="col-md-1 mb-3 me-2 text-center text-white">
                    <div style={iconStyles}>
                        <FontAwesomeIcon icon={faCss3Alt} size="3x" />
                        <span className="d-block mt-2">CSS3</span>
                    </div>
                </div>


                <div className="col-md-1 mb-3 me-2 text-center text-white">
                    <div style={iconStyles}>
                        <FontAwesomeIcon icon={faJs} size="3x" />
                        <span className="d-block mt-2">JavaScript</span>
                    </div>
                </div>

                <div className="col-md-1 mb-3 me-2 text-center text-white">
                    <div style={iconStyles}>
                        <FontAwesomeIcon icon={faReact} size="3x" />
                        <span className="d-block mt-2">React</span>
                    </div>
                </div>

                  <div className="col-md-1 mb-3 me-2 text-center text-white">
                    <div style={iconStyles}>
                        <FontAwesomeIcon icon={faGitAlt} size="3x" />
                        <span className="d-block mt-2">Git</span>
                    </div>
                </div>

                  <div className="col-md-1 mb-3  me-2 text-center text-white">
                    <div style={iconStyles}>
                        <FontAwesomeIcon icon={faPython} size="3x" />
                        <span className="d-block mt-2">Python</span>
                    </div>
                </div>
            </div>

            <div className="row d-flex justify-content-center">
                <div className="col-md-1 mb-3 me-2 text-center text-white">
                    <div style={iconStyles}>
                        <FontAwesomeIcon icon={faServer} size="3x" />
                        <span className="d-block mt-2">Node.js</span>
                    </div>
                </div>

                <div className="col-md-1 mb-3 me-2 text-center text-white">
                    <div style={iconStyles}>
                        <FontAwesomeIcon icon={faDatabase} size="3x" />
                        <span className="d-block mt-2">Database</span>
                    </div>
                </div>

                  <div className="col-md-1 mb-3 me-2 text-center text-white">
                    <div style={iconStyles}>
                        <FontAwesomeIcon icon={faGear} size="3x" />
                        <span className="d-block mt-2">APIs</span>
                    </div>
                </div>

                 <div className="col-md-1 mb-3 me-2 text-center text-white">
                    <div style={iconStyles}>
                        <FontAwesomeIcon icon={faTerminal} size="3x" />
                        <span className="d-block mt-2">CL</span>
                    </div>
                </div>

                 <div className="col-md-1 mb-3 me-2 text-center text-white">
                    <div style={iconStyles}>
                        <FontAwesomeIcon icon={faMobileScreen} size="3x" />
                        <span className="d-block mt-2">Design</span>
                    </div>
                </div>

                 <div className="col-md-1 mb-3 me-2 text-center text-white">
                    <div style={iconStyles}>
                        <FontAwesomeIcon icon={faSquareGithub} size="3x" />
                        <span className="d-block mt-2">Github</span>
                    </div>
                </div>
            </div>

           <h4 className="mt-4"><b>Currently working on:</b></h4>
           <p>Improving my skill, and understanding, of Python. I am currently participating in 100 days of code, wherein I create one project in Python a day! </p>

            
        </section>
    );
}

export default Skills;