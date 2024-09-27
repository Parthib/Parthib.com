import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Projects from './Projects.js';
import './main.scss';
import Header from './props/Header.js';
import Contact from './Contact.js';
import Resume from './Resume.js';
import Home from './Home.js';
import Article from './props/Article.js';

import facebookdata from './data/projects/facebookdata.md';
import zombie from './data/projects/zombie.md';
import chip from './data/projects/chip.md';
import whoshome from './data/projects/whoshome.md';
import chiptest from './data/projects/chiptest.md';
import aboutme from './data/aboutme.md';
import fridgeBuddy from './data/projects/fridgebuddy.md'
import ReactGA from 'react-ga4';

const analyticsId = process.env.REACT_APP_GOOGLE_ANALYTICS_ID;
ReactGA.initialize(analyticsId);

function usePageViews() {
  const location = useLocation();
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });
  }, [location]);
}

function App() {
  usePageViews();

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<Article markdown={aboutme} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects/FacebookData" element={<Article markdown={facebookdata} />} />
        <Route path="/projects/ZombieCastleDefense" element={<Article markdown={zombie} />} />
        <Route path="/projects/WhosHome" element={<Article markdown={whoshome} />} />
        <Route path="/projects/Chip" element={<Article markdown={chip} />} />
        <Route path="/projects/ChipTest" element={<Article markdown={chiptest} />} />
        <Route path="/projects/FridgeBuddy" element={<Article markdown={fridgeBuddy} />} />
      </Routes>
    </div>
  );
}

export default function Root() {
  return (
    <Router>
      <App />
    </Router>
  );
}
