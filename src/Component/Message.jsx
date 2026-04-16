import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";

const Message = ({ messages }) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [cut, setCut] = useState(false);
  const [showLove, setShowLove] = useState(false);
  const [burst, setBurst] = useState(false);

  const images = ["/img1.png", "/img2.png", "/img3.jpg", '/img4.jpg',"/img5.jpg"];

  // ✨ Typewriter Effect
  useEffect(() => {
    let i = 0;
    setText("");

    // ✅ FIXED: speed defined correctly
    const speed = index === messages.length - 1 ? 80 : 50;

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
    }, speed);

    return () => clearInterval(typing);
  }, [index, messages]);

  return (
    <div className="message-box">

      {/* 🎇 Confetti */}
      {index === messages.length - 1 && <Confetti />}

      {/* 💖 Name */}
      <h2 className="name">✨ Dressa My Besti ✨</h2>

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

      {/* 🎂 Cake Section */}
      {index === messages.length - 1 && !showLove && (
        <div
          className="cake-container"
          onClick={() => {
            setCut(true);
            setBurst(true);
            setTimeout(() => setBurst(false), 800);
          }}
        >
          {/* 🎂 Cake / 🍰 */}
          <div className="cake">
            {cut ? "🍰" : "🎂"}
          </div>

          {/* 🔪 Knife */}
          {!cut && <div className="knife">🔪</div>}

          <p className="cut-text">
            {cut ? "Cake Cut! 🎉" : "Click to cut the cake 💖"}
          </p>

          {/* 🎉 Burst */}
          {burst && <div className="burst"></div>}
        </div>
      )}

      {/* 💌 Final Screen */}
      {showLove && (
        <div className="love-screen">
          <h1 className="love-text">I Love You my Sweetherat ❤️</h1>
          <p className="love-sub">
            Once again... Happy Birthday My Besti Dressa 🎂💖
          </p>
        </div>
      )}

    </div>
  );
};

export default Message;