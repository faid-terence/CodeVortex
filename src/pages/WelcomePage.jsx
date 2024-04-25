import React from "react";
import myImage from "../assets/user.jpg";
import { Button } from "@/components/ui/button";

const WelcomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="flex flex-col items-center mb-6">
          <img
            src={myImage}
            alt="Your Name"
            className="w-32 h-40 rounded-full object-cover mb-4"
          />
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome, Terence Faid JABO!
          </h1>
        </div>
        <p className="text-gray-600 text-center mb-8">
          We're excited to have you here. This is a personalized welcome page
          just for you.
        </p>
        <Button>Get Started</Button>
      </div>
    </div>
  );
};

export default WelcomePage;
