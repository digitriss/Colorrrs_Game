import React, { useState, useEffect, useRef } from "react";

const ballSpeed = ["ball speedBall1", "ball speedBall2", "ball speedBall3"];

export const Ball = ({
  ball,
  bars,
  ballposition,
  time,
  setScore,
  setIndex,
  index,
  score,
  currentColor,
}) => {
  const [animation, addAnimation] = useState("");

  const thisBall = useRef(null);
  const start = Date.now();

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      addAnimation("ball");
    }, 14000);

    const interval = setInterval(() => {
      if (thisBall) {
        let nextValue = thisBall.current.getBoundingClientRect();
        if (nextValue.bottom > 380) {
          // && currentColor=== ball
          setIndex((index) => index + 1);
          console.log("currentColor", currentColor);
          console.log("touch down!!!");
        }
      }
    }, 20);
  }, []);

  useEffect(() => {
    if (ballposition === true && time <= 50.99) {
      addAnimation(ballSpeed[0]);
      console.log("1");
    } else if (ballposition === true && time >= 51 && time <= 73.99) {
      console.log("2");
      addAnimation("ball speedBall2");
    } else if (ballposition === true && time >= 74) {
      console.log("3");
      addAnimation("ball speedBall3");
    } else if (time === 110) {
      console.log("4");
      addAnimation("ball");
    }
  }, [ballposition, time]);
  //dodac klase do ball

  return (
    <>
      <div className="container__ball">
        <div
          className={animation}
          style={{ backgroundColor: ball }}
          ref={thisBall}
        >
          {" "}
        </div>
      </div>
    </>
  );
};
