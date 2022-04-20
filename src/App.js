import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';

function App() {

  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    fetch("/resume_data.json")
      .then(res => res.json())
      .then(data => {
        setResumeData(data);
      });
  }, []);
  
    return (
      <div className="App">
        <Header data={resumeData.main}/>
        <About data={resumeData.main}/>
        <Resume data={resumeData.resume}/>
        <Portfolio data={resumeData.portfolio}/>
        {/* <References data={resumeData.references}/> */}
        <Contact data={resumeData.main}/>
        <Footer data={resumeData.main}/>
      </div>
    );
}

export default App;
