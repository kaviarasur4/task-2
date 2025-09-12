import React from "react";

export default function Home() {
  return (
    <div>
      <div>
        <div className="bg-[url('/assets/images/parallax1.png')] h-[800px] w-full mx-auto bg-no-repeat bg-center bg-cover">
          <div className="flex justify-center items-center h-screen">
            <p className="text-2xl font-bold  text-white bg-black/70 p-2">
              MY WEBSITE LOGO
            </p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <p className=" text-[28px] my-7">ABOUT ME</p>
        <p className=" text-[15px] my-7"> I love photography</p>
      </div>
      <div className="mx-60">
        <div>
          <p>
            We have created a fictional "personal" website/blog, and our
            fictional character is a hobby photographer. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 my-10">
          <div>
            <div className="flex mx-20">
              <img
                src="assets/images/user.png"
                alt="user"
                className="h-8 w-8"
              />
              <p className="text-[15px] p-3">My Name</p>
            </div>
            <img
              src="assets/images/avatar_hat.png"
              alt="avatar_hat"
              className="hover:"
            />
          </div>
          <div>
            <p>
              Welcome to my website. I am lorem ipsum consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center text-[23px]">Im really good at:</p>
      </div>
      <div className="mx-60">
        <div className="flex cols-2 p-3">
          <img
            src="assets/images/camera.png"
            alt="camera"
            className="h-8 w-10"
          />
          <p className="ml-10">P h o t o g r a p h y</p>
        </div>
        <div className="bg-black/50 text-white p-2">
          <p className="ml-120">90%</p>
        </div>
        <div className="flex  cols-2 p-3">
          <img
            src="assets/images/laptop.png"
            alt="laptop"
            className="h-8 w-10"
          />
          <p className="ml-10">W e b D e s i g n</p>
        </div>
        <div className="bg-black/50 text-white p-2">
          <p className="ml-100">85%</p>
        </div>
        <div className="flex  cols-2 p-3">
          <img
            src="assets/images/image.png"
            alt="photoshoot"
            className="h-8 w-10"
          />
          <p className="ml-10">P h o t o s h o p</p>
        </div>
        <div className="bg-black/50 text-white p-2 mb-10">
          <p className="ml-80">75%</p>
        </div>
      </div>
      <div>
        <div className="bg-black/50 p-10">
          <div className="flex justify-evenly text-[30px] text-white">
            <p>14+</p>
            <p>55+</p>
            <p>89+</p>
            <p>150+</p>
          </div>
          <div className="flex justify-evenly text-white">
            <p>Partners</p>
            <p>Projects Done</p>
            <p>Happy Clients</p>
            <p>Meetings</p>
          </div>
        </div>
      </div>
      <div className="bg-[url('assets/images/para.png')] h-screen bg-no-repeat bg-cover bg-screen mt-5">
        <div className="flex justify-center items-center h-screen">
          <p className="text-[30px] text-white">P O R T F O L I O</p>
        </div>
      </div>
      <div className="text-center text-gray-500 my-10">
        <p className="text-[30px] mt-10">MY WORK</p>
        <p className="text-[18px] p-1">
          Here are some of my latest lorem work ipsum tipsum.
        </p>
        <p className="text-[18px] p-1">
          Click on the images to make them bigger
        </p>
      </div>
      <div className="grid grid-cols-4 mx-70">
        <img src="assets/images/p1.jpg" alt="p1" className="p-2" />
        <img src="assets/images/p2.jpg" alt="p2" className="p-2" />
        <img src="assets/images/p3.jpg" alt="p3" className="p-2" />
        <img src="assets/images/p4.jpg" alt="p4" className="p-2" />
        <img src="assets/images/p5.jpg" alt="p5" className="p-2" />
        <img src="assets/images/p6.jpg" alt="p6" className="p-2" />
        <img src="assets/images/p7.jpg" alt="p7" className="p-2" />
        <img src="assets/images/p8.jpg" alt="p8" className="p-2" />
      </div>
      <div className="text-center my-10">
        <button className="bg-gray-200 text-center p-3 hover:bg-gray-400 cursor-pointer duration-150 rounded">
          LOAD MORE
        </button>
      </div>
      <div>
        <div className="bg-[url('/assets/images/parallax3.jpg')] h-[400px] bg-no-repeat bg-cover bg-center">
          <div className="flex  items-center justify-center h-100 ">
            <p className=" text-[38px] text-white ">C O N T A C T</p>
          </div>
        </div>
      </div>
      <div className="text-center my-10 text-gray-500">
        <p className="text-bold text-2xl">WHERE I WORK</p>
        <p className="mt-5">I'd love your feedback!</p>
      </div>
      <div className="grid grid-cols-3 mx-60">
        <div className="h-80 w-80 ">
          <img src="assets/images/map.jpg" alt="map" />
        </div>
        <div className="flex flex-col  mx-5">
          <div>
            <div className="mb-5">
              <div className="flex">
                <img src="assets/images/location.png" alt="location" className="w-10 h-10" />
                <p className="ml-2 text-2xl text-gray-400"> Chicago,US</p>
              </div>
            </div>
            <div className="mb-5">
              <div className="flex">
                <img src="assets/images/phone-call.png" alt="phone-call" className="w-10 h-10" />
                <p className="ml-2 text-2xl text-gray-400">Phone:+00151515</p>
              </div>
            </div>
            <div>
              <div className="flex">
                <img src="assets/images/email.png" alt="email" className="w-10 h-10" />
                <p className="ml-2 text-2xl text-gray-400">
                  Email:mail@mail.com
                </p>
              </div>
            </div>
            <div>
              <div>
                <p className="flex text-gray-400 mb-5 gap-3">
                  Swing by for a cup of 
                  <span>
                    <img
                      src="assets/images/cup.png"
                      alt="email"
                      className="w-5 h-5"
                    />
                  </span>
                  ,or leave me a note:
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex my-5">
              <input
                type="text"
                placeholder="Name"
                required
                className="p-3 w-60  border border-gray-400 mr-6 "
              />
              <input
                type="text"
                placeholder="Email"
                className="p-3 w-60  border border-gray-400 required"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Message"
                className="p-3 w-110  border border-gray-400 required"
              />
            </div>
            <div className="my-5 ">
              <button className=" p-2 bg-black text-white hover:bg-gray-300 hover:text-black duration-300 cursor-pointer">
                SEND MESSAGE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
