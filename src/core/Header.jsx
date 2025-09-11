import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div>
        <div className="flex justify-between">
          <div className="flex">
            <Link to="/" className="p-3 text-black"> HOME </Link>
            <Link className="p-3 text-black ">ABOUT</Link>
            <Link className="p-3 text-black ">FORTFILO</Link>
            <Link className="p-3 text-black ">CONTACT</Link>
          </div>
          <div>
            <div className="h-8 w-8 m-2 ">
              <img src="assets/images/search.png" alt="s" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
