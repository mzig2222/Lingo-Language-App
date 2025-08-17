import React from 'react';
import './HomeScreen.scss';

function HomeScreen({ onStart }) {
  return (
    <div className="home-screen">
      <div className="home-title">Lingo App</div>
      <div className="home-desc">Play through interactive stories to learn new languages!</div>
      <button onClick={onStart} className="home-start-btn">
        Start
      </button>
    </div>
  );
}

export default HomeScreen;
