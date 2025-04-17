import React from "react";

export default function About() {
  return (
    <>
    <div className="about-section flex flex-col text-center">
    <h1 className="text-4xl font-bold my-[28px]">About component</h1>
      <div className="flex text-start gap-4 justify-evenly">
        <p className="w-[35%]">
          Freelancer is a free bootstrap theme created by Route. The download
          includes the complete source files including HTML, CSS, and JavaScript
          as well as optional SASS stylesheets for easy customization.
        </p>
        <p className="w-[35%]">
          Freelancer is a free bootstrap theme created by Route. The download
          includes the complete source files including HTML, CSS, and JavaScript
          as well as optional SASS stylesheets for easy customization.
        </p>
      </div>
    </div>
    </>
  );
}
