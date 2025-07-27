import React from "react";
import { Link } from "react-router-dom";
import "./Button.css"

function Navbar() {

  return (
    <div>
      
      <div className="navbar-dark bg-dark shadow">
        <div className="container">
          <div className="row">
            <div className="col-md-12">

              <nav class="py-4 navbar navbar-expand-lg " data-bs-theme="dark">
                <div class="container-fluid">
                  <Link to="/" class="navbar-brand fs-3">
                    KaamKaaj
                  </Link>
                  <button
                    class="navbar-toggler custom-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                        <Link to="/" class="nav-link">
                          Home
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link to="/jobs" class="nav-link">
                          Jobs
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link to="/services" class="nav-link">
                          Services
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link to="/about" class="nav-link">
                          About Us
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link to="/contact" class="nav-link">
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
