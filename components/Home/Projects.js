import React from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import "../../styles/styles.css";

function Projects() {
    return (
        <section className="p-4 bg-light" style={{ minHeight: "100vh"}}>
            <h2><b>Projects</b></h2>

            <div className="row">
                {/* card 1 */}
                <div className="col-12 col-md-4">
                <div class="card mb-3 bg-primary text-white">
                    <h3 class="card-header">Archive</h3>
                        <div class="card-body">
                            <h5 class="card-title">A landing page concept</h5>
                        </div>

                            <svg xmlns="http://www.w3.org/2000/svg" class="d-block user-select-none" width="100%" height="200" aria-label="Placeholder: Image cap" focusable="false" role="img" preserveAspectRatio="xMidYMid slice" viewBox="0 0 318 180" style={{fontSize: '1.125rem', textAnchor: 'middle'}}>
                                <rect width="100%" height="100%" fill="#868e96"></rect>
                                <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text>
                            </svg>

                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>

                        <div className="card-body">
                            <span className="badge bg-dark d-inline me-1">React</span>
                            <span className="badge bg-dark d-inline">CSS</span>
                        </div>

                        <div class="card-body text-center">
                            <a href="#" class="card-link">Code</a>
                            <a href="#" class="card-link">Live Demo</a>
                        </div>
                    </div>
                </div>

                {/* card 2 */}
                <div className="col-12 col-md-4">
                <div className="card mb-3 bg-primary text-white">
                    <div className="overlay">
                        <p className="coming-soon">Coming Soon!</p>
                    </div>
                    <h3 class="card-header">Card header</h3>
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                        </div>

                            <svg xmlns="http://www.w3.org/2000/svg" class="d-block user-select-none" width="100%" height="200" aria-label="Placeholder: Image cap" focusable="false" role="img" preserveAspectRatio="xMidYMid slice" viewBox="0 0 318 180" style={{fontSize: '1.125rem', textAnchor: 'middle'}}>
                                <rect width="100%" height="100%" fill="#868e96"></rect>
                                <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text>
                            </svg>

                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>

                        <div className="card-body">
                            <span className="badge bg-dark d-inline me-1">React</span>
                            <span className="badge bg-dark d-inline me-1">CSS</span>
                            <span className="badge bg-dark d-inline me-1">CSS</span>
                            <span className="badge bg-dark d-inline">CSS</span>
                        </div>


                        <div class="card-body text-center">
                            <a href="#" class="card-link">Code</a>
                            <a href="#" class="card-link">Live Demo</a>
                        </div>

                        {/*<div class="card-footer text-muted">
                            <b>Last updated:</b> 2 days ago
                             </div> */}
                    </div>
                </div>

                {/* card 3 */}
                <div className="col-12 col-md-4">
                <div className="card mb-3 bg-primary text-white">
                    <div className="overlay">
                        <p className="coming-soon">Coming Soon!</p>
                    </div>
                    <h3 class="card-header">Card header</h3>
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                        </div>

                            <svg xmlns="http://www.w3.org/2000/svg" class="d-block user-select-none" width="100%" height="200" aria-label="Placeholder: Image cap" focusable="false" role="img" preserveAspectRatio="xMidYMid slice" viewBox="0 0 318 180" style={{fontSize: '1.125rem', textAnchor: 'middle'}}>
                                <rect width="100%" height="100%" fill="#868e96"></rect>
                                <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text>
                            </svg>

                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>

                        <div className="card-body">
                            <span className="badge bg-dark d-inline me-1">React</span>
                            <span className="badge bg-dark d-inline me-1">CSS</span>
                            <span className="badge bg-dark d-inline me-1">React</span>
                            <span className="badge bg-dark d-inline me-1">React</span>
                            <span className="badge bg-dark d-inline me-1">CSS</span>
                        </div>

                        <div class="card-body text-center">
                            <a href="#" class="card-link">Code</a>
                            <a href="#" class="card-link">Live Demo</a>
                        </div>


                    </div>
                </div>
            </div>

            <Link type="button" class="btn btn-primary" to="/contact">Check out my other projects <FontAwesomeIcon icon={faArrowRight} /></Link>

            
        </section>
    );
}

export default Projects;