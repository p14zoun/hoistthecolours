import React from "react";

function Navbar() {
  return (
    <div className="navbar bg-black">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">HoistTheColours</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
