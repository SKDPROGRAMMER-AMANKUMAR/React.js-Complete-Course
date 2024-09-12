import { useState } from 'react';
import './App.css';
import ColorButton from './component/ColorButton';

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen flex justify-center items-center"
        style={{ backgroundColor: color, overflow: "hidden" }}
      >
        <div className="h-14 w-fit bg-white border-2 border-red-600 flex justify-center items-center rounded-2xl">
          {/* Use the ColorButton component and pass props */}
          <ColorButton color="orange" setColor={setColor} bgColor="orange" />
          <ColorButton color="red" setColor={setColor} bgColor="red" />
          <ColorButton color="blue" setColor={setColor} bgColor="blue" />
          <ColorButton color="yellow" setColor={setColor} bgColor="yellow" />
          <ColorButton color="pink" setColor={setColor} bgColor="pink" />
          <ColorButton color="green" setColor={setColor} bgColor="green" />
          <ColorButton color="black" setColor={setColor} bgColor="black" />
          <ColorButton color="white" setColor={setColor} bgColor="white" />
        </div>
      </div>
    </>
  );
}

export default App;
