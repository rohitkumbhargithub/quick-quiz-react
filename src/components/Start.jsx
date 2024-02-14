import { useRef } from "react";
import '../App.css';

export default function Start({ setUsername }) {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };

  return (
    <div className="start">
      <h1 className="logo">FlashQuiz</h1>
      <form >
      <input
        className="startInput"
        placeholder="Enter your name" required
        ref={inputRef}
      />
      <button className="startButton" onClick={handleClick}>
        Start
      </button>

        <small className="tip">
          <ul>
          Instruction
            <li>Each question have a point 10.</li>
            <li>Each question have timer 30sec.</li>
          </ul>
        </small>
      </form>
    </div>
  );
}