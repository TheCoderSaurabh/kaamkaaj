import React from "react";
// import Slider from "../inc/Slider";
import { Link } from "react-router-dom";
import Vmc from "./inc/Team";
// import Services1 from "../images/img4.jpg";
import Top from "./inc/Top";

function Home() {
  return (
    <div>

      {/* <Slider /> */}
      <Top />

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading">KaamKaaj</h3>
              <div className="underline mx-auto"></div>
              <p>
                KaamKaaj is your go-to platform for all your job search and
                service needs. Whether you're a job seeker looking for the
                perfect opportunity, an employer seeking top talent, or someone
                in need of professional services, KaamKaaj has you covered. Our
                user-friendly interface, comprehensive listings, and supportive
                community make it easy to navigate your career journey and
                access essential services. Join us today and take the next step
                towards achieving your career and personal goals with KaamKaaj.
              </p>
              <Link to="/about" className="btn btn-warning shadow">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      

      {/* our vision and values */}
      <Vmc />

      {/* Our Services */}
      {/* <section className="section border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4 text-center">
              <h3 className="main-heading">Our Services</h3>
              <div className="underline mx-auto"></div>
            </div>

            <div className="col-md-4">
              <div className="card shadow">
                <img
                  src={Services1}
                  className="w-100 border-bottom"
                  alt="Services"
                />
                <div className="card-body">
                  <h6>Service 1</h6>
                  <div className="underline"></div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <Link to="/services" className="btn btn-link">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow">
                <img
                  src={Services1}
                  className="w-100 border-bottom"
                  alt="Services"
                />
                <div className="card-body">
                  <h6>Service 1</h6>
                  <div className="underline"></div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <Link to="/services" className="btn btn-link">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow">
                <img
                  src={Services1}
                  className="w-100 border-bottom"
                  alt="Services"
                />
                <div className="card-body">
                  <h6>Service 1</h6>
                  <div className="underline"></div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <Link to="/services" className="btn btn-link">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default Home;
