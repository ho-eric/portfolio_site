import React from 'react';
import Typist from 'react-typist';
import './Typist.css';
import Eric1 from 'images/Eric.jpg';

function Intro() {
  return (
    <div className="intro">
      <img src={Eric1} alt="It's me!" className="EricPic" />
      <Typist className="introText">
        <span>Hi, I'm Eric! </span>
        <br />
        <br />
        <span>Welcome to my website.</span>
        <br />
        <br />
        <span>I am passionate about computer science.</span>
        <Typist.Backspace count={17} delay={450} />
        <span>cooking.</span>
        <Typist.Backspace count={8} delay={450} />
        <span>health.</span>
        <br />
        <br />
        <span>Feel free to check out some of my projects! :)</span>
      </Typist>
    </div>
  )
}

export default Intro;