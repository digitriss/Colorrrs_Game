import React, { useEffect, useState } from "react";
import { Ball } from "../Ball/Ball";
import { Bars } from "../Bar/Bars";
import { Message } from "../Message/Message";
import { Alert } from "../Alert/Alert";
import { Graphics } from "../Graphics/Graphics";

const colors = ["#fc5c82", "#fcd45c", "#815FF8"];

export const Game = () => {
  const [bars, setBars] = useState(["grey"]);
  const [click, setClick] = useState(0);
  const [ball, setBall] = useState("#fc5c82");
  const [index, setIndex] = useState(0);
  const [end, setEnd] = useState(false);
  const [score, setScore] = useState(0);
  const [ballposition, setPosBall] = useState(false);
  const [time, setTime] = useState(0); //interwał sprawdzający
  const [currentColor, setCurrentColor] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevState) => prevState + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    let interval;
    setTimeout(() => {
      interval = setInterval(() => {
        setPosBall(true);
      }, 2000);
    }, 17500);

    return () => {
      clearInterval(interval);
    };
  }, [ballposition]);

  useEffect(() => {
    const interval = setInterval(() => {
      let random = Math.floor(Math.random() * 3 + 1);
      if (random === 1) {
        setBall(colors[0]);
      } else if (random === 2) {
        setBall(colors[1]);
      } else {
        setBall(colors[2]);
      }
    }, 2000);

    if (end === true) {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setBars((p) => [...p, "grey"]);
    }, 2000);

    if (end === true) {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, []);

  const onClick = () => {
    setClick((p) => p + 1);
    let color = "";
    const temp = click % colors.length;
    if (temp == 0) {
      color = colors[colors.length - 1];
    } else {
      color = colors[temp - 1];
    }

    if (end === true) {
      setClick(0);
    }
    setBars((p) => {
      const nP = [...p];
      p[index] = color;
      return nP;
    });
    setCurrentColor(color);
  };

  let message;
  if (end === true) {
    message = <Message score={score} />;
  } else {
    message = "";
  }

  return (
    <>
      {" "}
      <div className="container">
        <div className="container__game" onClick={onClick}>
          <div className="intervalId">
            {" "}
            {time}
            punkty {score}{" "}
          </div>{" "}
          {message}
          <Alert time={time} />{" "}
          <Ball
            ball={ball}
            bars={bars}
            ballposition={ballposition}
            time={time}
            score={score}
            setIndex={setIndex}
            index={index}
            setScore={setScore}
            currentColor={currentColor}
            setCurrentColor={setCurrentColor}
            setBall={setBall}
            setEnd={setEnd}
          />{" "}
          <Bars bars={bars} time={time} />
          <Graphics />
        </div>{" "}
      </div>{" "}
    </>
  );
};
