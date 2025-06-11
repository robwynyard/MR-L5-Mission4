import { useState, useEffect, useRef } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import Styles from "./InterviewApp.module.css";


export default function App() {
  const [jobTitle, setJobTitle] = useState("");
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const chatEndRef = useRef(null);
  const [initialized, setInitialized] = useState(false); 

  const handleSubmit = async (initialMessage = null) => {
    const input = initialMessage ?? userInput;

    const updatedHistory = [
      ...chatHistory,
      ...(initialMessage ? [] : [{ role: "You", message: userInput }]),
    ];

    try {
      const response = await axios.post(
        "http://localhost:3000/insurance-chat",
        {
          jobTitle,
          userResponse: input,
          chatHistory: updatedHistory,
        }
      );

      setChatHistory([
        ...updatedHistory,
        { role: "Tina from Turners", message: response.data.response },
      ]);
      if (!initialMessage) setUserInput("");
    } catch (error) {
      console.error("Error from server:", error);
    }
  };

  useEffect(() => {
    if (!initialized) {
      handleSubmit("I’d like help with choosing car insurance.");
      setInitialized(true);
    }
  }, [initialized]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  return (
    <div className={Styles.AiContainer}>
      <h1 className={Styles.Heading}>Turners Insurance Advisor</h1>

      <div className={Styles.Response}>
        {chatHistory.map((item, index) => (
          <div key={index}>
            <strong>{item.role}:</strong>{" "}
            <ReactMarkdown>{item.message}</ReactMarkdown>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      <textarea
        rows="3"
        placeholder="Type your answer here..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        className={Styles.InputBox}
      />

      <button onClick={() => handleSubmit()} className={Styles.Button}>
        Submit
      </button>
    </div>
  );
}
