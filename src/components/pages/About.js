import React from "react";
import Team from "./inc/Team";
import Offer from "./inc/Offer";

function About() {
  return (
    <div>
      <section className="py-4 bg-info">
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto">
              <h4> About Us </h4>
            </div>
            <div className="col-md-8 my-auto">
              <h6 className="float-end"> Home / About Us </h6>
            </div>
          </div>
        </div>
      </section>

      <section className="section border-bottom">
        <div className="container text-center">
          <h5 className="main-heading text-center">Welcome to KaamKaaj!
          </h5>
          <div className="underline m-auto mb-3"></div>
          <p>
            At KaamKaaj, we believe that finding the right job and accessing
            essential services should be simple, efficient, and accessible for
            everyone. Our platform is designed to connect job seekers with
            employers and provide a comprehensive directory of services to help
            you navigate your career journey and personal needs.
          </p>
        </div>
      </section>

      {/* our vision and values */}
      <Team />
      <Offer />
    </div>
  );
}

export default About;
