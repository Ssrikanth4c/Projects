import React from "react";
// import { Link } from "react-router-dom";

const About = () => {
  return (
    <div style={{ display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh' }}>
      <div className="jumbotron bg-danger">
        <div className="container">
          <h1 className="display-1 text-primary">Big Brother</h1>
          <p className="lead text-white">
            BigBrother is an Indian e-commerce company based in Bangalore,
            Karnataka, India.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
