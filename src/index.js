import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx';
import About from './pages/About.jsx';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Switch>
        <Route
          exact path={"/"}
          component={Home}
        />
        <Route
          path={"/projects"}
          component={Projects}
        />
        <Route
          path={"/about"}
          component={About}
        />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)