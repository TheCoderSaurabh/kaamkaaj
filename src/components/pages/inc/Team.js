import React from "react";
// import Card from './Card';

function Team() {
  return (
    <section className="section bg-c-light border-top">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-4 text-center">
            <h3 className="main-heading">Vission, Mission & Values</h3>
            <div className="underline mx-auto"></div>
          </div>

          <div className="col-md-4 text-center">
            <h6>Our Vission</h6>
            <p>
              To be the leading platform that bridges the gap between job
              seekers and employers while providing comprehensive services that
              enhance professional and personal growth.
            </p>
          </div>
          <div className="col-md-4 text-center">
            <h6>Our Mission</h6>
            <p>
              To empower individuals and organizations by offering a seamless,
              user-friendly platform that facilitates job discovery, application
              processes, and access to essential services, fostering a community
              of growth, support, and opportunity.
            </p>
          </div>
          <div className="col-md-4 text-center">
            <h6>Our Values</h6>
            <p>
              At KaamKaaj, we are committed to upholding integrity by ensuring
              transparency, honesty, and fairness in all our interactions. We
              empower our users with the tools and support they need to achieve
              their career and personal goals, fostering a community that
              thrives on mutual support and collaboration.
            </p>
          </div>
        </div>
      </div>
    </section>

    
  );
}

export default Team;
