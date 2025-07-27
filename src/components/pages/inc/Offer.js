import React from "react";
import TeamCard from './TeamCard';

function Offer() {
  return (
    <div>
      <section className="section bg-light border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4 text-center">
              <h3 className="main-heading">What We Offer</h3>
              <div className="underline mx-auto"></div>
            </div>

            <div className="col-md-4 text-center">
              <h6>For Job Seekers:</h6>
              <p>Job Listings: Explore diverse job opportunities.</p>
              <p>Easy Application Process: Apply effortlessly.</p>
              <p>Career Resources: Enhance your job search. </p>
            </div>
            <div className="col-md-4 text-center">
              <h6>For Employers:</h6>
              <p>Post Job Openings: Access qualified candidates.</p>
              <p>Candidate Management: Track applicants easily.</p>
              <p>Employer Branding: Attract top talent.</p>
            </div>
            <div className="col-md-4 text-center">
              <h6>For Everyone</h6>
              <p>Services Directory: Access various professional services.</p>
              <p>Community Support: Share experiences and seek advice.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-c-light border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4 text-center">
              <h3 className="main-heading">Why Choose KaamKaaj?</h3>
              <div className="underline mx-auto"></div>
            </div>

            <div className="col-md-12 text-justify">
              <ul>
                <li>
                  User-Friendly Interface: Our platform is designed to be
                  intuitive and easy to use.
                </li>
                <li>
                  Comprehensive Listings: We provide a wide range of job
                  opportunities and services to cater to your diverse needs.
                </li>
                <li>
                  Secure and Reliable: Your privacy and security are our top
                  priorities. We ensure a safe and trustworthy environment for
                  all users.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <TeamCard />

      <section className="section bg-c-light border-top">
        <div className="container text-center">
          <h5 className="main-heading text-center">Join Us Today!</h5>
          <div className="underline m-auto mb-3"></div>
          <p>
            Whether you're a job seeker, an employer, or someone in need of
            services, KaamKaaj is the perfect place to start. Join our community
            today and take the next step towards achieving your career goals and
            accessing the services you need.
            <br />
            <br />
            Thank you for choosing KaamKaaj - your trusted partner in career and
            personal growth.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Offer;
