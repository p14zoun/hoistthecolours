import React from "react";

function Hero() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Shiver me Timbers!</h1>
          <p className="py-6">
            Welcome aboard the vessel of the most fearfull pirates!
          </p>
          <a href="#underHero" className="btn bg-black text-white">
            Set Sail
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
