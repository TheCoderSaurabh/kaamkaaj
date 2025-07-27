import React from "react";

function Contact() {
  return (
    <div>
      <section className="py-4 bg-info">
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto">
              <h4> Contact </h4>
            </div>
            <div className="col-md-8 my-auto">
              <h6 className="float-end"> Home / Contact </h6>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h3>Contact Us</h3>
                  <hr />
                  <div className="form-group">
                    <label className="mb-1">Full Name</label>
                    <input type="text" className="form-control" placeholder="Enter your full name"/>
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Phone Number</label>
                    <input type="text" className="form-control" placeholder="Enter your Phone Number"/>
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Email Address</label>
                    <input type="text" className="form-control" placeholder="Enter your email address"/>
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Message</label>
                    <textarea rows="4" className="form-control" placeholder="Type Message here..." ></textarea>
                  </div>
                  <div className="form-group">
                    <button type="button" className="btn btn-warning shadow" style={{textAlign:"center", marginTop:"10px", marginLeft:"40%"}}>Submit</button>
                  </div>
                </div>

                <div className="col-md-6 border-start">
                  <h5 className="main-heading">Address Information</h5>
                  <div className="underline"></div>
                  <p>
                  <i className="fas fa-map-marker-alt"></i> Address: 
                  </p>
                  <p>
                  <i className="fas fa-phone"></i> Phone: +91 99887XXXXX
                  </p>
                  <p>
                  <i className="fas fa-envelope"></i> Email: kaamkaaj@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
