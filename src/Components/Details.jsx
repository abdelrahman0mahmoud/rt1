import React from "react";

export default function Details() {
  return (
    <>
      <div className="details-section flex justify-around bg-gray-800 text-white px-[32px] py-[56px] text-center">
        <div className="details-item">
          <h3>Location</h3>
          <p>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>
        <div className="details-item">
          <h3>Around the web</h3>
          <div className="icons">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-solid fa-globe"></i>
          </div>
        </div>
        <div className="details-item">
          <h3>About Freelancer</h3>
          <p>
            Freelance is a free to use, licensed Bootstrap theme created by
            Route
          </p>
        </div>
      </div>
    </>
  );
}
