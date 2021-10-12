import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import FaceIcon from '@material-ui/icons/Face';
import { Link } from 'react-router-dom';

import siteLogo from 'images/favicon.ico';

function Header() {

  return (

    <div className="header">
      <AppBar position="static" >
        <Toolbar className="headerToolbar">
        
          <Typography variant="h5">
            <img src={siteLogo} alt="site logo"/>
          </Typography>
          
          <Typography variant="h6">
            <Button
              color="inherit"
              startIcon={<HomeIcon />}
              component={Link}
              to="/"
            >
              Home
              </Button>
            <Button
              color="inherit"
              startIcon={<AccountTreeIcon/>}
              component={Link}
              to={"/projects"}
            >
              Projects
              </Button>
            <Button
              color="inherit"
              startIcon={<FaceIcon />}
              component={Link}
              to="/about"
            >
              About
              </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;