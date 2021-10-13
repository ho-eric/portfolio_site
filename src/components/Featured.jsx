import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Featured1 from 'components/Featured1.jsx';
import Featured2 from 'components/Featured2.jsx';
import Featured3 from 'components/Featured3.jsx';

const style = {
  background: '#2196f3',
  color: 'white'
};

function Featured() {

  return (
    <div>
      <h2> Featured Projects</h2>
      <div className="featuredProjects">
        <div className="proj">
          <a href="https://erho-slice-the-pie.netlify.app/"
            className="projLink"
            target="_blank"
            rel="noreferrer noopener">
            <Featured1 />
          </a>
        </div>
        <div className="proj">
          <a href="https://Fitness-Log.erho20.repl.co"
            className="projLink"
            target="_blank"
            rel="noreferrer noopener">
            <Featured2 />
          </a>
        </div>
        <div className="proj">
          <a href="https://Fitness-Log.erho20.repl.co"
            className="projLink"
            target="_blank"
            rel="noreferrer noopener">
            <Featured3 />
          </a>
        </div>
      </div>
      <div className="projBtn">
        <Button
          style={style}
          variant="contained"
          component={Link}
          to="/projects"
        >
          Click here to view all of my projects!
        </Button>
      </div>
    </div>
  );
}

export default Featured;