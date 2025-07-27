import React from "react";
// import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer class="footer bg-dark text-white">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <h2>KaamKaaj</h2>
          </div>
          <div class="col-md-3">
            <h5>About Us</h5>
            <p className="text-white">
              At KaamKaaj, we believe that finding the right job and accessing
              essential services should be simple, efficient, and accessible for
              everyone. Our platform is designed to connect job seekers with
              employers and provide a comprehensive directory of services to
              help you navigate your career journey and personal needs.
            </p>
          </div>
          <div class="col-md-3">
            <h5>Contact Us</h5>
            <ul class="list-unstyled">
              <li>Email: kaamkaaj@gmail.com</li>
              <li>Phone: +1233567890</li>
              <li>Address: Bhubaneswar, Odisha</li>
            </ul>
          </div>
          <div class="col-md-3">
            <h5>Follow Us</h5>
            <ul class="list-inline footer-links">
              <li class="list-inline-item">
                <div>
                  <i class="fab fa-facebook"></i>
                </div>
              </li>
              <li class="list-inline-item">
                <div>
                  <i class="fab fa-twitter"></i>
                </div>
              </li>
              <li class="list-inline-item">
                <div>
                  <i class="fab fa-instagram"></i>
                </div>
              </li>
              <li class="list-inline-item">
                <div>
                  <i class="fab fa-linkedin"></i>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div class="row">
          <div class="col-md-6">
            <p className="text-white">© 2024 KaamKaaj. All rights reserved.</p>
          </div>
          <div class="col-md-6 text-end">
            <ul class="list-inline footer-links">
              <li class="list-inline-item">
                <p>Privacy Policy</p>
              </li>
              <li class="list-inline-item">
                <p>Terms of Service</p>
              </li>
              <li class="list-inline-item">
                <p>Sitemap</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

    // <section className="section footer bg-dark text-white">
    //   <div className="container">
    //     <div className="row">

    //       <div className="col-md-4">
    //         <h6>Company Info</h6>
    //         <hr />
    //         <p className="text-white">
    //           Contrary to popular belief, Lorem Ipsum is not simply random text.
    //           It has roots in a piece of classical Latin literature from 45 BC,
    //           making it over 2000 years old.
    //         </p>
    //       </div>

    //       <div className="col-md-4">
    //         <h6>Quick Links</h6>
    //         <hr />
    //         <div><Link to="/">Home</Link></div>
    //         <div><Link to="/about">About</Link></div>
    //         <div><Link to="/contact">Contact</Link></div>
    //       </div>

    //       <div className="col-md-4">
    //         <h6>Contact Information</h6>
    //         <hr />
    //         <div><p className="text-white mb-1">#XX Street Name City Country</p></div>
    //         <div><p className="text-white mb-1">+91 99999XXXXX</p></div>
    //         <div><p className="text-white mb-1">+91 99999XXXXX</p></div>
    //         <div><p className="text-white mb-1">email@gmail.com</p></div>
    //       </div>

    //     </div>
    //   </div>
    // </section>
  );
}

export default Footer;
