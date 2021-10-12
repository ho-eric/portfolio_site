import React from 'react';
import ShowcaseCard1 from "components/ShowcaseCard1.jsx"
import ShowcaseCard2 from "components/ShowcaseCard2.jsx"
import vid from "images/workout.mp4";
import Eric2 from "images/Eric2.jpg"

function About() {
  return (
    <div className="aboutPage">
      <div className="hobbies">
        <video src={vid} width="300" height="400" autoPlay muted loop />
        <p>
          <img src={Eric2} alt="Picture 2 of me!" className="EricPic2" />
          <br />
          <strong>Location:</strong>
          <br />
          San Francisco Bay Area
          <br />
          <br />
          <strong>About me:</strong>
          <br />
          I graduated from the University of California, Davis in 2021 with a Bachelor's degree in Computer Science.
          <br />
          <br />
          <strong>When I'm not coding, I like to:</strong>
          <br />
          work out at the gym or the outdoors. (Healthy body, healthy mind!) I also really enjoy cooking. I also enjoy cooking - I feel that it is a fun outlet for me that really lets me express my creative side outside of coding.
        </p>
      </div >
      <h2>Skills</h2>
      <div className="skills">
        <p>
          <strong>Programming Concepts:</strong>
          <br />
          I have learned how to develop full-stack Web applications, for instance to let a user search a database over the Web or to present dynamic information provided by a constantly updating online source through asynchronous, distributed software.
          <br />
          I have also used Python for web scraping and data analysis and visualizations.
          <br />
          <br />
          <strong>Programming Languages: </strong>
          <br />
          JavaScript, HTML, CSS, Python, SQL, Java, C#, C++, C.
          <br />
          <br />
          <strong>Spoken Languages: </strong>
          <br />
          English, Mandarin, Cantonese
        </p>
      </div>
      <h2>Education</h2>
      <div className="education">
        <ShowcaseCard1 />
      </div>
      <h2>Experience</h2>
      <div className="experience">
        <ShowcaseCard2 />
      </div>
    </div>
  );
}

export default About;