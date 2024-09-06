import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Fade ,Zoom,Slide} from 'react-slideshow-image';
import { slideImages } from '../constants/slideImages.js';

function HomeSlider() {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((image, index) => (
          <div key={index}>
            <div
              className="flex items-center justify-center h-[800px] bg-cover"
              style={{ backgroundImage: `url(${image.url})` }}
            >
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default HomeSlider;
