import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';

import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import resumeData from './resumeData';

import ReactGA from 'react-ga';

ReactGA.initialize('UA-125629487-1');
ReactGA.pageview(window.location.pathname + window.location.search);
class App extends Component {

	
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        
        <ContactUs resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}

export default App;