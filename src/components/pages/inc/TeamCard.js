import React from "react";
import Card from "./Card";

function TeamCard() {
  // const Component1 = () => (
  //     <div className="p-3 text-white">
  //       <Card name="Ayushman Ghatu" prof="Fullstack Developer" desc="" />

  //     </div>
  //   );

  //   const Component2 = () => (
  //     <div className="p-3 text-white">

  //     </div>
  //   );

  //   const Component3 = () => (
  //     <div className="p-3 text-white">

  //     </div>
  //   );
  //   const Component4 = () => (
  //     <div className="p-3 text-white">

  //     </div>
  //   );

  return (
    <section className="section bg-light border-top">
      <div className="container">
        <div className="col-md-12 mt-5 text-center">
          <h3 className="main-heading">Our Team</h3>
          <div className="underline mx-auto"></div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <Card name="Ankit Rout" prof="Frontend Developer" desc="" />
          </div>
          <div className="col-md-3">
            <Card name="Ayushman Ghatuary" prof="Frontend Developer" desc="" />
          </div>
          <div className="col-md-3">
            <Card name="Barun Kumar Kuiry" prof="Fullstack Developer" desc="" />
          </div>
          <div className="col-md-3">
            <Card name="Biswaranjan Sahu" prof="Frontend Developer" desc="" />
          </div>
          <div className="col-md-3">
            <Card name="Mayank Sarkar" prof="Frontend Developer" desc="" />
          </div>
          <div className="col-md-3">
            <Card name="Pritiranjan Sahoo" prof="Frontend Developer" desc="" />
          </div>
          <div className="col-md-3">
            <Card name="Saurabh Prasad" prof="Fullstack Developer" desc="" />
          </div>
          <div className="col-md-3">
            <Card name="Vijit Kumar" prof="Frontend Developer" desc="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamCard;
