import React, { useState } from 'react';
import './Home.css';
import Books from '../Pages/Books';


export default function Home() {
  const [exploreClicked, setExploreClicked] = useState(false);
  const [inputFocused, setInputFocused] = useState(false);
  
  

  const handleExploreClick = () => {
    setExploreClicked(true);
    setInputFocused(true); // Set input focus to true when explore is clicked
  };

  return (
    <div className="body">
      <div className='Homepage_heading'>
        <h1>BUILD YOUR OWN LIBRARY</h1>
        <h2>AT Kalvium</h2>
        <h1>FREE OF COST</h1>
        <div>
          <button className='explore' onClick={handleExploreClick}>Explore</button>
        </div>
      </div>
      <div className='explore_books'>
        {exploreClicked && <Books inputFocused={inputFocused} />} 
      </div>
    </div>
  );
}
