import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  const myStyle = {
    fontFamily: "Inter, sans-serif",
  };
  return (
    <div className="container mx-auto my-8" style={myStyle}>
      <h1 className="text-4xl font-bold text-indigo-700 text-center">
        About Us
      </h1>
      <p className="text-gray-700 mb-8 text-center text-[15px]" style={myStyle}>
        We are a small passionate team.
      </p>
      <div className="flex flex-col lg:flex-row lg:space-x-12">
        <div className="lg:w-1/2">
          <img
            src="https://via.placeholder.com/800x500"
            alt="About Us"
            className="rounded-lg object-cover w-full h-64 lg:h-auto mb-4"
          />
        </div>
        <div className="lg:w-1/2">
          <p
            className="text-gray-700 leading-loose text-center text-[17px]"
            style={myStyle}
          >
            We provide real-time connectivity to enable software providers and
            financial institutions to build integrated products for their small
            business customers.
          </p>
          <p
            className="text-gray-700 leading-loose text-center mt-4 text-[17px]"
            style={myStyle}
          >
            Our API infrastructure is leveraged by clients ranging from lenders
            to corporate card providers and business forecasting tools, with use
            cases including automatic reconciliation, business dashboarding, and
            loan decisioning.
          </p>
        </div>
        <div className="flex items-center justify-center underline text-[18px] block mt-6">
          <Link to="/contact" className="text-black font-semibold" style={myStyle}>
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
