import React from 'react';
import styles, { layout } from "../style";

const Video = () => {
  const videos = [
    'E0otLJeiKgY',
    'mlUeCE7zlQE',
    '_qfPNl6nRo8',
    'hJ85OSevYV0',
    'RRTzQzkcIHo',
  ];

  return (
    <section className={`${layout.sectionReverse} overflow-x-auto`}>
      <div className={`${layout.sectionImgReverse} flex`} style={{ minWidth: `${100 * videos.length}vw` }}>
        {videos.map((videoId, index) => (
          <div key={index} className="w-full">
            <iframe
              title={`video${index + 1}`}
              width="100%"
              height="300px"
              src={`https://www.youtube.com/embed/${videoId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Video;
