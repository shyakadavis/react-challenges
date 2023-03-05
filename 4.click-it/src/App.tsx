import React, { MouseEvent, useState } from 'react';
import './App.css';

type TCoordinates = {
  x: number;
  y: number;
};

function App() {
  const [coordinates, setCoordinates] = useState<TCoordinates[]>([]);
  const [poppedCoordinates, setPoppedCoordinates] = useState<TCoordinates[]>(
    [],
  );

  const handleClick = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    setCoordinates([...coordinates, { x: clientX, y: clientY }]); // add new coordinate to coordinates
  };
  const handleUndo = () => {
    setCoordinates(coordinates.slice(0, -1)); // remove last element
    const popped = coordinates.slice(-1)[0]; // get last element
    if (!popped) return; // if no last element, return
    setPoppedCoordinates([...poppedCoordinates, popped]); // add last element to poppedCoordinates
  };
  const handleRedo = () => {
    const popped = poppedCoordinates.slice(-1)[0]; // get last element
    if (!popped) return; // if no last element, return
    setCoordinates([...coordinates, popped]); // add last element to coordinates
    setPoppedCoordinates(poppedCoordinates.slice(0, -1)); // remove last element
  };

  return (
    <div className="wrapper">
      <button
        disabled={coordinates.length === 0}
        onClick={handleUndo}
        id="undo"
      >
        Undo
      </button>
      <div className="App" onClick={handleClick}>
        {coordinates.map((coordinate, index) => (
          <div
            key={index}
            className="coordinate"
            style={{
              left: coordinate.x - 22.5 + 'px', // 22.5 is to offset the width of the div so that the center of the div is at the click location
              top: coordinate.y - 22.5 + 'px',
            }}
          ></div>
        ))}
      </div>
      <button
        disabled={poppedCoordinates.length === 0}
        onClick={handleRedo}
        id="redo"
      >
        Redo
      </button>
    </div>
  );
}

export default App;
