import React from "react";
import { Link } from "react-router-dom";
import './style/Top.css'

function Top() {
  return (
    <header className="hero-section text-center text-white">
      <div className="container">
        <h1 className="display-4">Find Your Next Opportunity with KaamKaaj</h1>
        <p className="lead">
          Connecting you with jobs and services to advance your career.
        </p>
        <Link to="/jobs" className="btn btn-primary btn-lg mx-2">
          Search Jobs
        </Link>
        <Link to="/services" className="btn btn-secondary btn-lg mx-2">
          Explore Services
        </Link>
      </div>
    </header>
  );
}

export default Top;
