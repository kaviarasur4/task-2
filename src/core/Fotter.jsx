import React from "react";

export default function Fotter() {
  return (
    <div>
      <div className="">
        <div className="bg-black/50 hover:bg-black w-full h-[300px] mt-10 ">
          <div className="flex justify-center">
            <div>
              <button className="flex items-center gap-2 p-2 bg-white hover:bg-gray-400 text-xl mt-20 rounded">
                <img
                  src="assets/images/arrow.png"
                  alt="arrow"
                  className="h-5 w-5"
                />
                <span>To the top</span>
              </button>
            </div>
          </div>
          <div className="flex justify-center mt-7 gap-4">
            <img src="assets/images/facebook.png" alt="" className=" w-8 h-8" />
            <img
              src="assets/images/instagram.png"
              alt=""
              className=" w-8 h-8"
            />
            <img src="assets/images/logo.png" alt="" className=" w-8 h-8" />
            <img
              src="assets/images/pinterest.png"
              alt=""
              className=" w-8 h-8"
            />
            <img src="assets/images/twitter.png" alt="" className=" w-8 h-8" />
            <img
              src="assets/images/linkedin .png"
              alt=""
              className=" w-8 h-8"
            />
          </div>
          <div className="flex justify-center mt-5 text-xl text-white gap-1">
            <p>Powered by</p>
            <a
              href="https://www.w3schools.com/"
              className="hover:text-green-700"
            >
              w3.css{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
