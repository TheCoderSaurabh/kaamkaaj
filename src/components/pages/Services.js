// import React, { useState, useEffect } from 'react';
import SearchServices from './inc/SearchServices';

const Services = () => {
  
  return (
    <div>
      <section className="py-4 bg-info">
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto">
              <h4> Services </h4>
            </div>
            <div className="col-md-8 my-auto">
              <h6 className="float-end"> Home / Services </h6>
            </div>
          </div>
        </div>
      </section>

      <div className="container mt-4">
        <h2 className="main-heading text-center">Services to Avail</h2>
        <div className="underline m-auto mb-4"></div>
        <SearchServices />
      </div>
    </div>
  );
};

export default Services;
