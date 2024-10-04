import React, { useState, useEffect } from 'react';

function BlockMover() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [score, setScore] = useState(0)

  // Add event listeners to handle arrow key presses
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        setPosition((prevPos) => ({ ...prevPos, x: prevPos.x - 20 }));
      } else if (e.key === 'ArrowRight') {
        setPosition((prevPos) => ({ ...prevPos, x: prevPos.x + 20 }));
      } 
      // else if (e.key === 'ArrowUp') {
      //   setPosition((prevPos) => ({ ...prevPos, y: prevPos.y - 20 }));
      // } else if (e.key === 'ArrowDown') {
      //   setPosition((prevPos) => ({ ...prevPos, y: prevPos.y + 20 }));
      // }
    };
    
    

    const shuffle = (array) => { 
      for (let i = array.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]]; 
      } 
      return array; 
    }; 
      
    // Usage 
    const myArray = ["apple", "banana", "cherry", "date", "elderberry"]; 
    const shuffledArray = shuffle(myArray); 
    
    console.log(shuffledArray); 

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };

  }, []);

  setInterval(() => {
    setScore(score+1)
  }, 2000);

  return (
    <>
    <div>
        <div
        style={{
            position: 'relative',
            left: position.x + 'px',
            top: position.y + 'px',
            width: '20px',
            height: '50px',
            backgroundColor: 'blue',
            bottom: 0
            }}>
            </div>
            {/* <button onClick={setInterval}>Here {score}</button> */}
    </div>
    </>
  );
}

export default BlockMover;
