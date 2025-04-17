import React from "react";
import avatar from "../assets/gamer.png";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4">
        <img src={avatar} className="w-[200px] h-[200px]"/>
        <p className="font-bold text-center text-3xl">START FRAMEWORK</p>
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </>
  );
}
