import React from "react";

export default function Contact() {
  return (
    <>
      <div className="contact-section">
        <h1 className="text-4xl font-bold my-[18px] text-center">Contact component</h1>
        <form className="flex flex-col items-start w-[500px]">
          <input type="text" placeholder="Name"/>
          <input type="tel" placeholder="Phone"/>
          <input type="email" placeholder="Email"/>
          <input type="password" placeholder="Password"/>
          <button className="bg-green-500 p-2 my-2 rounded text-white">Send Message</button>
        </form>
      </div>
    </>
  );
}
