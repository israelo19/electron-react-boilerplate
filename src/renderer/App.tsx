import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import React, { useState } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import photo1 from '../../assets/photo1.jpg';
import photo2 from '../../assets/photo2.jpg';

import icon from '../../assets/icon.svg';
import sIcon from '../../assets/sspa/sspalogo.png';
import './App.css';
//import sspaLogo from '../../assets/sspa/sspalogo.png';


function logo() {
  return <img src={sIcon} alt="logo" />;
}

function Hello() {
  const [currentPhoto, setCurrentPhoto] = useState(photo2);

  const handlePhotoClick = () => {
     setCurrentPhoto(currentPhoto === photo1 ? photo2 : photo1);


    // setCurrentPhoto(currentPhoto === photo1 ? photo2 : photo2);
  };
  return (
    <div>
      <div className="Hello">
        {/* <div style={{ backgroundColor: 'grey'}}> */}
          <img width="750" alt="icon" src={sIcon} />
        {/* </div> */}
      </div>
      {/* <h1>S.S. Papadopulous and Associates</h1> */}
      <div className="button-bar">
        <a href="https://www.sspa.com/" target="_blank" rel="noreferrer">
          <button type="button">Home</button>
        </a>
        <a href="https://www.sspa.com/expertise" target="_blank" rel="noreferrer">
          <button type="button">Expertise</button>
        </a>
        <a href="https://www.sspa.com/news" target="_blank" rel="noreferrer">
          <button type="button">News</button>
        </a>
        <a href="https://www.sspa.com/software" target="_blank" rel="noreferrer">
          <button type="button">Software</button>
        </a>
        <a href="https://www.sspa.com/featured-projects" target="_blank" rel="noreferrer">
          <button type="button">Projects</button>
        </a>
        <a href="https://www.sspa.com/about" target="_blank" rel="noreferrer">
          <button type="button">About</button>
        </a>
      </div>

      <center>

      <div className="photos">
        <div>
        <img src={photo1} alt="Photo" onClick={handlePhotoClick} />
        </div>

      </div>
      </center>

        {/* <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="folded hands">
              🙏
            </span>
            Donate
          </button>
        </a> */}
      </div>
    // </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
