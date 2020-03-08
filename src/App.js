import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Projects from './Projects.js';
import './main.scss';
import Header from './props/Header.js';
import Contact from './Contact.js';
import Resume from './Resume.js';
import Home from './Home.js';
import Analytics from 'react-router-ga';
import Article from './props/Article.js';

import facebookdata from './data/projects/facebookdata.md';
import zombie from './data/projects/zombie.md';
import chip from './data/projects/chip.md';
import whoshome from './data/projects/whoshome.md';
import aboutme from './data/aboutme.md';
import data from './data/private';

function App() {

  return (
    <BrowserRouter>
      <Analytics id={data.analyticsId}>
        <div className="App">
          <Header/>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route path="/about" component={() => <Article markdown={aboutme} />} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
          <Route path="/projects/FacebookData" component={() => <Article markdown={facebookdata} />} />
          <Route path="/projects/ZombieCastleDefense" component={() => <Article markdown={zombie} />} />
          <Route path="/projects/Chip" component={() => <Article markdown={chip} />} />
          <Route path="/projects/WhosHome" component={() => <Article markdown={whoshome} />} />

        </div>
        </Analytics>
    </BrowserRouter>
  );
}

export default App;
