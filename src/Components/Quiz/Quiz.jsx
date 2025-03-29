import React, { useEffect, useState } from "react";
import { quizData } from "./QuizData";
import "../../app.css";

const Quiz = () => {
  const [counter, setCounter] = useState(0);
  const [question, setQuestion] = useState(quizData[counter]);
  const [saveAnswer, setSaveAnswer] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [answer, setAnswer] = useState("");
  const [carectanswer, setCarectAnswer] = useState([]);
  const [incarect, setIncarect] = useState([]);

  console.log(quizData.length)

  useEffect(() => {
    setQuestion(quizData[counter]);
  }, [counter]);

  // console.log("carectanswer",carectanswer)
  // console.log("incarect",incarect)
  // ChakeAnswer Function
  // const ChakeAnswer =(data)=>{

  //   // console.log("Anuj 1111",data)

  // }
  // HendelSubmit function
  // console.log("saveAnswer",saveAnswer)
  let HendelSubmit = (saveAnswer) => {
    if (question.answer === saveAnswer) {
      setCarectAnswer((prev) => [...prev, answer]);

      setSaveAnswer("");
    } else {
      setIncarect((prev) => [...prev, answer]);
      setSaveAnswer("");
    }

    console.log("saveAnswer", saveAnswer);
    if (counter < quizData.length - 1) {
      setAnswer(saveAnswer);
      setCounter(counter + 1);
      setSelectedOption("");
    } else {
      console.log(" Quiz Completed!");
      setCounter(counter + 1);
      setSelectedOption("");
    }
  };

  return (
    <div className="QuizInfo">
      <div className="QuizDiv">
        <h1>Quiz </h1>
        <h2 style={{ height: "60px" }}>
          {counter + 1}. {question.question}
        </h2>
        <ul>
          <li
            onClick={(e) => {
              setSaveAnswer("op1");
              setSelectedOption("op1");
            }}
            className={selectedOption === "op1" ? "QuizStyle" : ""}
          >
            {question.op1}
          </li>
          <li
            onClick={(e) => {
              setSaveAnswer("op2");
              setSelectedOption("op2");
            }}
            className={selectedOption === "op2" ? "QuizStyle" : ""}
          >
            {question.op2}
          </li>
          <li
            onClick={(e) => {
              setSaveAnswer("op3");
              setSelectedOption("op3");
            }}
            className={selectedOption === "op3" ? "QuizStyle" : ""}
          >
            {question.op3}
          </li>
          
          <li
            onClick={(e) => {
              setSaveAnswer("op4");
              setSelectedOption("op4");
            }}
            className={selectedOption === "op4" ? "QuizStyle" : ""}
          >
            {question.op4}
          </li>
        </ul>
        <button
          onClick={() => {
            HendelSubmit(saveAnswer);
          }}
        >
          Next
        </button>
        <h1>carect {carectanswer.length}</h1>
        <h1>incarect {incarect.length}</h1>
      </div>
    </div>
  );
};

export default Quiz;
