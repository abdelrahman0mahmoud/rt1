import React from "react";
import img1 from '../assets/poert1.png'
import img2 from '../assets/port2.png'
import img3 from '../assets/port3.png'

export default function Portfolio() {
  return (
    <>
      <div className="portfolio-section p-[18px] text-center">
        <h1 className="text-4xl font-bold my-[18px]">Portfolio component</h1>
        <div className="grid grid-cols-3 gap-5">
          {[img1, img2, img3, img1, img2, img3].map((img, idx) => (
            <div key={idx} className="port-img">
              <img src={img} alt={`portfolio-${idx}`} className="w-full h-auto" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
