import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
    return(
        <nav class="navbar navbar-expand-lg bg-light " data-bs-theme="light">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">billynunes.dev</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarColor03">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <Link class="nav-link me-4" to="#">Skills</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link me-4" tof="#">Projects</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link me-4" to="/cv">CV</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link me-4" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;