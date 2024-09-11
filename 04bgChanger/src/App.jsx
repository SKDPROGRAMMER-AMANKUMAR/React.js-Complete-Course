import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div
        className="w-full h-screen flex justify-center items-center"
        style={{ backgroundColor: color, overflow: "hidden" }}
      >
        <div className="h-14 w-fit bg-white border-2 border-red-600 flex justify-center items-center rounded-2xl">
          <button
            onClick={() => setColor("orange")}
            className="h-8 w-24 border-2 border-black text-white text-center pb-7 pt-1 rounded-xl active:scale-90"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>
          <button
            onClick={() => setColor("red")}
            className="h-8 w-24 bg-red-600 border-2 border-black text-white text-center pb-7 mx-1 pt-1 rounded-xl active:scale-90"
          >
            Red
          </button>
          <button
            onClick={() => setColor("blue")}
            className="h-8 w-24 bg-blue-700 border-2 border-black text-white text-center pb-7 mx-1 pt-1 rounded-xl active:scale-90"
          >
            Blue
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="h-8 w-24 bg-yellow-500 border-2 border-black text-white text-center pb-7 mx-1 pt-1 rounded-xl active:scale-90"
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("pink")}
            className="h-8 w-24 bg-pink-600 border-2 border-black text-white text-center pb-7 mx-1 pt-1 rounded-xl active:scale-90"
          >
            Pink
          </button>
          <button
            onClick={() => setColor("green")}
            className="h-8 w-24 bg-green-500 border-2 border-black text-white text-center pb-7 mx-1 pt-1 rounded-xl active:scale-90"
          >
            Green
          </button>
          <button
            onClick={() => setColor("black")}
            className="h-8 w-24 bg-black text-white text-center pb-7 mx-1 pt-1 rounded-xl border-2 border-black active:scale-90"
          >
            Black
          </button>
          <button
            onClick={() => setColor("white")}
            className="h-8 w-24 bg-white text-black text-center pb-7 mx-1 pt-1 rounded-xl border-2 border-red-600 active:scale-90"
          >
            White
          </button>
        </div>
      </div>
    </>
  )
}

export default App
