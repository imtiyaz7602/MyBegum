import React, { useState } from "react";
import "./App.css";
import Message from "./Component/Message";

function App() {
  const [start, setStart] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  // const messages = [
  //   "Hey Beautiful ❤️",
  //   "Today is a very special day...",
  //   "Because someone amazing was born 🎉",
  //   "You make the world more beautiful 😊",
  //   "You bring happiness everywhere 💖",
  //   "Keep smiling always 😍",
  //   "Since the day you come in my life, i get a new purpose of my life",
  //   "You are the one of the best thing i got from my college city other than my education",
  //   "I promissed i will never hurt you",
  //   "I will make you my queen",
  //   "Always keeps you inside my heart",
  //   "You just give me your hand on my hand and i will never leave your hand till my last breath",
  //   "You are the best",
  //   "May Allah give you everything you deserve",
  //   "Happy Birthday 🎂🎈"
  // ];
  const messages = [
  "Hey Bestie ❤️",
  "Today is a very special day...",
  "Because someone truly amazing was born 🎉",
  "You make the world brighter just by being in it 😊",
  "You spread happiness everywhere you go 💖",
  "Keep smiling always 😍",
  "Since the day you came into my life, everything feels a little better",
  "I’m really grateful to have you",
  "I promise I’ll always be there for you 🤝",
  "No matter what happens, I’ll never leave your side",
  "You are truly special 💫",
  "May Allah bless you with everything you deserve 🤲",
  "Happy Birthday 🎂🎈"
];

  return (
    <div className="container">

      {/* 🌌 Stars */}
      <div className="stars"></div>

      {/* ❤️ Hearts */}
      <div className="hearts">
        {[...Array(25)].map((_, i) => (
          <span key={i}></span>
        ))}
      </div>

      {/* 🎵 Music */}
      {start && (
        <audio autoPlay loop>
          <source src="/music.mp3" type="audio/mp3" />
        </audio>
      )}

      {/* 💌 Love Letter */}
      {showLetter && (
        <div className="letter-overlay">
          <div className="letter">
            <h2>💌 A Special Message</h2>
            <p>
              On this beautiful day, I just want to say... <br />
              You are truly amazing, kind, and full of light 💖 <br />
              May your smile never fade 😊 <br />
              And may happiness always find you 🌸
            </p>

            <button
              className="open-btn"
              onClick={() => {
                setShowLetter(false);
                setStart(true);
              }}
            >
              Open Surprise 💖
            </button>
          </div>
        </div>
      )}

      {/* 🎁 Button / Messages */}
      {!start && !showLetter ? (
        <button
          className="start-btn"
          onClick={(e) => {
            // 🎁 Ripple Effect
            const circle = document.createElement("span");
            circle.classList.add("ripple");

            const rect = e.target.getBoundingClientRect();
            circle.style.left = e.clientX - rect.left + "px";
            circle.style.top = e.clientY - rect.top + "px";

            e.target.appendChild(circle);
            setTimeout(() => circle.remove(), 600);

            setShowLetter(true);
          }}
        >
          Click for Surprise 🎁
        </button>
      ) : start ? (
        <Message messages={messages} />
      ) : null}

    </div>
  );
}

export default App;