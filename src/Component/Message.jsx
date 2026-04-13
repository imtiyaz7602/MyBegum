import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";

const Message = ({ messages }) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [cut, setCut] = useState(false);
  const [showLove, setShowLove] = useState(false);
const [burst, setBurst] = useState(false);

  const images = ["/img1.jpg", "/img2.jpg", "/img3.png"];

  // ✨ Typewriter
  useEffect(() => {
    let i = 0;
    setText("");

    const typing = setInterval(() => {
      setText(messages[index].slice(0, i));
      i++;
      if (i > messages[index].length) {
        clearInterval(typing);

        setTimeout(() => {
          if (index < messages.length - 1) {
            setIndex((prev) => prev + 1);
          } else {
            setTimeout(() => setShowLove(true), 2000);
          }
        }, 1500);
      }
    }, 50);

    return () => clearInterval(typing);
  }, [index, messages]);

  return (
    <div className="message-box">

      {/* 🎇 Confetti */}
      {index === messages.length - 1 && <Confetti />}

      {/* 💖 Name */}
      <h2 className="name">✨ Ayesha my Lady ✨</h2>

      {/* 💬 Message */}
      {!showLove && <h1 className="typing">{text}</h1>}

      {/* 📸 Image */}
      {!showLove && (
        <img
          key={index}
          src={images[index % images.length]}
          alt="memory"
          className="photo fade-image"
        />
      )}

  

{index === messages.length - 1 && !showLove && (
  <div
    className="cake-container"
    onClick={() => {
      setCut(true);
      setBurst(true);
      setTimeout(() => setBurst(false), 800);
    }}
  >
    {/* 🎂 Cake or 🍰 after cut */}
    <div className="cake">
      {cut ? "🍰" : "🎂"}
    </div>

    {/* 🔪 Knife animation */}
    {!cut && <div className="knife">🔪</div>}

    <p className="cut-text">
      {cut ? "Cake Cut! 🎉" : "Click to cut the cake 💖"}
    </p>

    {/* 🎉 Burst Effect */}
    {burst && <div className="burst"></div>}
  </div>
)}

      {/* 💌 Final Screen */}
      {showLove && (
        <div className="love-screen">
          <h1 className="love-text">I Love You my jaan ❤️</h1>
          <p className="love-sub">
            Once again... Happy Birthday My Begum miss Ayesha 🎂💖
          </p>
        </div>
      )}

    </div>
  );
};

export default Message;