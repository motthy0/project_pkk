import React from 'react';
import { layout } from "../style";
import { gambar1, gambar2, gambar3, gambar4, gambar5, gambar6 } from "../assets";

const IMG = () => {
  return (
    <section id="galery" className={`${layout.sectionReverse} overflow-x-auto`}>
      <div className={`${layout.sectionImgReverse} flex`} style={{ minWidth: `${100 * 6}vw` }}>
        {[gambar1, gambar2, gambar3, gambar4, gambar5, gambar6].map((gambar, index) => (
          <div key={index} className="w-full">
            <img
              src={gambar}
              alt={`gambar${index + 1}`}
              className="w-full h-auto relative z-5"
            />
            <div className="absolute z-3 -left-1/2 top-0 w-1/2 h-1/2 rounded-full" />
            <div className="absolute z-0 w-1/2 h-1/2 -left-1/2 bottom-0 rounded-full" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default IMG;
