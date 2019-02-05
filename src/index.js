import React from "react";
import ReactDOM from "react-dom";
import Hello from "./Hello";
import Footer from "./Footer";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects"
import './css/tailwind.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="page-wrapper">
        <div className="page-content">
          <Header />
          <div className="content-wrapper">
            <Switch>
              <Route exact path='/' component={Hello}></Route>
              <Route exact path='/about' component={About}></Route>
              <Route exact path='/projects' component={Projects}></Route>
            </Switch>
          </div>
          <Footer />
        </div >
    </div >
)
};

ReactDOM.render((
  <BrowserRouter>
      <App />
  </BrowserRouter>
), document.getElementById('app'));