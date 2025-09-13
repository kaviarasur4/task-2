import React from "react";

export default function Fotter() {
  return (
    <div>
      <div>
        <div className="bg-black/50 hover:bg-black w-full h-[300px] mt-10 ">
          <div className="flex justify-center pt-10">
            <button className="p-2 bg-white hover:bg-gray-400">
              To the top
            </button>
          </div>
          <div className=" flex justify-center mt-5 gap-3">
            <img src="assets/images/facebook.png" alt="" className=" w-8 h-8" />
            <img src="assets/images/instagram.png" alt=""  className=" w-8 h-8"/>
            <img src="assets/images/snapchat.png" alt="" className=" w-8 h-8" />
            <img src="assets/images/social.png" alt="" className=" w-8 h-8" />
            <img src="assets/images/twitter.png" alt="" className=" w-8 h-8" />
            <img src="assets/images/linkedin.png" alt="" className=" w-8 h-8" />
          </div>
        </div>
      </div>
    </div>
  );
}
