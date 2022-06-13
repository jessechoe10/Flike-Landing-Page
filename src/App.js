import React from 'react';
import './App.css';
import Cover from './cover.png';

function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <img src='https://goflike.app/flike_logo.svg' className='App-logo' alt = "Logo Here"></img>
        <div className='App-title'>
          <h1> <span>Show your users </span> what they are looking for.</h1>
        </div>
        <div className='Cover-image'>
          <img src={Cover} alt = "Cover" className='cv-img'></img>
        </div>
      </div>
      <div className='App-subheader'>
        <h2>Bring user engagement to new levels with our real-time recommendations engine.</h2>
        <form action='https://calendly.com/yannickflike/20-min-flike-call-with-yannick?month=2022-06'>
          <input className = 'txt-box' type = "text" placeholder="email@company.com"></input>
          <input className='submit-btn' type="submit" value = "Get Started"></input>
        </form>
      </div>
      <div className='cards'>
        <div className="card">
          <h2>35%</h2>
          <p>increased revenue at amazon.com due to in-store recommendations.</p>
        </div>
        <div className="card">
          <h2>75%</h2>
          <p>of movies watched on Netflix are discovered by personalization.</p>
        </div>
        <div className="card">
          <h2>30%</h2>
          <p>increased marketing efficiency through hyper-personalization.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
