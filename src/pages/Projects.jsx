import React from 'react';
import { MemoryRouter } from 'react-router';
import { Link, Switch, Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Featured1 from 'components/Featured1.jsx';
import Featured2 from 'components/Featured2.jsx';
import Featured3 from 'components/Featured3.jsx';
import Featured4 from 'components/Featured4.jsx';

function Projects() {
  return (
    <div>
      <h2> Projects page</h2>
      <div className="featuredProjects">
        <div className="proj">
          <a href="https://slice-the-pie.erho20.repl.co/"
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
      <div className="featuredProjects">
        <div className="proj">
          <a href="https://github.com/libben/the-ocean"
            className="projLink"
            target="_blank"
            rel="noreferrer noopener">
            <Featured4 />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;