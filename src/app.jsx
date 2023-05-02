import "./App.css"
import { useEffect, useMemo, useState } from "react";
import Start from "./components/start";
import Timer from "./components/timer";
import Trivia from "./components/trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Which of the following gods is also known as ‘Gauri Nandan’",
      answers: [
        {
          text: "Agni",
          correct: false,
        },
        {
          text: "Ganesh",
          correct: true,
        },
        {
          text: "Hanuman",
          correct: false,
        },
        {
          text: "Shiv",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who wrote the Ramayan?",
      answers: [
        {
          text: "Ramanand Sagar",
          correct: false,
        },
        {
          text: "Valmiki",
          correct: true,
        },
        {
          text: "Paramhans",
          correct: false,
        },
        {
          text: "Durvasa",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "The death anniversary of which of the following leaders is observed as Martyrs' Day",
      answers: [
        {
          text: "Pt Jawahar Lal Nehru",
          correct: false,
        },
        {
          text: "Lal Bahadur Shastri",
          correct: false,
        },
        {
          text: "Indira Gandhi",
          correct: false,
        },
        {
          text: "Mahatma Gandhi",
          correct: true,
        },
      ],
    },

    {
      id: 5,
      question: "Which of the following Muslim festivals is based on the Holy Quran",
      answers: [
        {
          text: "Id -ul-Zuha",
          correct: true,
        },
        {
          text: "Id -ul-Fitr",
          correct: false,
        },
        {
          text: "Bakri-id",
          correct: false,
        },
        {
          text: "Moharram",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Van Mahotsav was started by",
      answers: [
        {
          text: "Maharshi Karve",
          correct: false,
        },
        {
          text: "Bal Gangadhar Tiiak",
          correct: false,
        },
        {
          text: "K.M, Munshi",
          correct: true,
        },
        {
          text: "Sanjay Gandhi",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "The first month of the Indian national calendar is",
      answers: [
        {
          text: "Magha",
          correct: false,
        },
        {
          text: "Chaitra",
          correct: true,
        },
        {
          text: "Ashadha",
          correct: false,
        },
        {
          text: "Vaishakha",
          correct: false,
        },
      ],
    },


    {
      id: 8,
      question: "The language of Lakshadweep a Union Territory of India, is?",
      answers: [
        {
          text: "Malayalam",
          correct: true,
        },
        {
          text: "Tamil",
          correct: false,
        },
        {
          text: "Hindi",
          correct: false,
        },
        {
          text: "Telugu",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question: "Which one of the following is essentially a solo dance? ",
      answers: [
        {
          text: "Kuchipudi",
          correct: false,
        },
        {
          text: "Manipuri",
          correct: false,
        },
        {
          text: "Kathak",
          correct: false,
        },
        {
          text: "Mohiniattam",
          correct: true,
        },
      ],
    },
    {
      id: 11,
      question: "Central Salt and Marine Chemicals Research Institute is located at",
      answers: [
        {
          text: "Ahmedabad",
          correct: false,
        },
        {
          text: "Panaji",
          correct: true,
        },
        {
          text: "Gandhinagar",
          correct: false,
        },
        {
          text: "Bhavnagar",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: " Which city of India was first of all affected by plague? ",
      answers: [
        {
          text: "Bombay",
          correct: false,
        },
        {
          text: "Kanpur",
          correct: false,
        },
        {
          text: "Surat",
          correct: true,
        },
        {
          text: "Bhavnagar",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: " The dates of National Calendar Permanently correspond with the ",
      answers: [
        {
          text: "Georgian Calendar",
          correct: true,
        },
        {
          text: "Vikrami Calendar",
          correct: false,
        },
        {
          text: "Mohammadan Calendar",
          correct: false,
        },
        {
          text: "None of these",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: " Who wrote the introduction to the English translation of Rabindranath Tagore’s Gitanjali? ",
      answers: [
        {
          text: "P.B. Shelley",
          correct: false,
        },
        {
          text: "Alfred Tennyson",
          correct: false,
        },
        {
          text: "W.B. Yeats",
          correct: true,
        },
        {
          text: "T.S. Elliot",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: " Which of these leaders was a recipient of a gallantry award in 1987 by a state government for saving two girls from drowning? ",
      answers: [
        {
          text: "Anandiben Patel",
          correct: true,
        },
        {
          text: "Vasundhara Raje Scindia",
          correct: false,
        },
        {
          text: "Uma Bhartis",
          correct: false,
        },
        {
          text: "Mamata Banerjee",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: " Who are the only married couple elected to the 16th Lok Sabha? ",
      answers: [
        {
          text: "Sukhbir Singh-Harshimrat Kaur Badal",
          correct: false,
        },
        {
          text: "Prakash-Brinda Karat",
          correct: false,
        },
        {
          text: "Pappu Yadav-Ranjeet Ranjan",
          correct: true,
        },
        {
          text: " Priya Ranjan-Deepa Dasmunshi",
          correct: false,
        },
      ],
    },
  ];

  
  
  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
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
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
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