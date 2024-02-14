import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [points, setPoints] = useState('0');

  const data = [
    {
      id: 1,
      question: "Which of the following software could assist someone who cannot use their hands for computer input?",
      answers: [
        {
          text: "Video conferencing ",
          correct: false,
        },
        {
          text: "Speech recognition ",
          correct: true,
        },
        {
          text: "Audio digitizer ",
          correct: false,
        },
        {
          text: "Synthesizer ",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "__________ is the process of finding errors in software code ?",
      answers: [
        {
          text: "Debugging",
          correct: true,
        },
        {
          text: "Hacking",
          correct: false,
        },
        {
          text: "Compiling",
          correct: false,
        },
        {
          text: "Testing",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "A series of instructions that tells a computer what to do and how to do it is called a ________ ?",
      answers: [
        {
          text: "program",
          correct: true
        },
        {
          text: "processor",
          correct: false,
        },
        {
          text: "user response",
          correct: false,
        },
        {
          text: "command",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "A __________ shares hardware, software, and data among authorized users?",
      answers: [
        {
          text: "transmitter",
          correct: false,
        },
        {
          text: "hyperlink",
          correct: false,
        },
        {
          text: "protocol",
          correct: false,
        },
        {
          text: "network",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: "The basic computer processing cycle consists of _______ ?",
      answers: [
        {
          text: "input, processing and output",
          correct: true,
        },
        {
          text: "hardware, software and storage",
          correct: false,
        },
        {
          text: "systems and application",
          correct: false,
        },
        {
          text: "data, information and applications",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "_____ is the process of carrying out commands?",
      answers: [
        {
          text: "Fetching",
          correct: false,
        },
        {
          text: "Storing",
          correct: false,
        },
        {
          text: "Executing",
          correct: true,
        },
        {
          text: "Decoding",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "This can be another word for program?",
      answers: [
        {
          text: "hardware",
          correct: false,
        },
        {
          text: "floppy",
          correct: false,
        },
        {
          text: "disk",
          correct: false,
        },
        {
          text: "software",
          correct: true,
        },
      ],
    },
    {
      id: 8,
      question: "For seeing the output, you use ?",
      answers: [
        {
          text: "Monitor ",
          correct: true,
        },
        {
          text: "Keyboard ",
          correct: false,
        },
        {
          text: "Mouse ",
          correct: false,
        },
        {
          text: "Scanner",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "	Computer language used on the Internet is —— ?",
      answers: [
        {
          text: "BASIC ",
          correct: false,
        },
        {
          text: "COBOL",
          correct: false,
        },
        {
          text: "Pascal",
          correct: false,
        },
        {
          text: "Java ",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question: "The ––– tells the computer how to use its components ?",
      answers: [
        {
          text: "utility ",
          correct: false,
        },
        {
          text: "network ",
          correct: false,
        },
        {
          text: "application program",
          correct: false,
        },
        {
          text: "operating system",
          correct: true,
        },
      ],
    },
  ];

  const pointPyramid = useMemo(
    () =>
      [
        { id: 1, point: "10" },
        { id: 2, point: "20" },
        { id: 3, point: "30" },
        { id: 4, point: "40" },
        { id: 5, point: "50" },
        { id: 6, point: "60" },
        { id: 7, point: "70" },
        { id: 8, point: "80" },
        { id: 9, point: "90" },
        { id: 10, point: "100" },
      ],
    []
  );

  const handleChange = () => {
    window.location.reload();
  }

  useEffect(() => {
    questionNumber > 1 &&
      setPoints(pointPyramid.find((m) => m.id === questionNumber - 1).point);
  }, [questionNumber, pointPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
             <h1>FlashQuiz</h1>
            {timeOut ? (
              <>
              <h1 className="endText">Your score: {points}  
              <span>
              <button className="againPlay" onClick={handleChange}>Exit Quiz</button>
              </span>
              </h1>
              </>
              
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="pointList">
              {pointPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "pointListItem active"
                      : "pointListItem"
                  }
                >
                  <span className="pointsItemNumber">{m.id}</span>
                  
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;