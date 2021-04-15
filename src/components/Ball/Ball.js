import React, { useState, useEffect, useRef } from "react";

const ballSpeed = ["ball speedBall1", "ball speedBall2", "ball speedBall3"];

//piłka na górze ma pozycje 221px
//piłka na dole ma 351px - 20px =331px
export const Ball = ({ ball, ballposition, time, score }) => {
  const [animation, addAnimation] = useState("");

  const thisBall = useRef(null);
  const start = Date.now();

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      addAnimation("ball");
    }, 14000);

    let prevValue = JSON.stringify({
      x: 401,
      y: 331,
      width: 40,
      height: 40,
      top: 331,
      right: 441,
      bottom: 371,
      left: 401,
    });

    const interval = setInterval(() => {
      if (thisBall) {
        let nextValue = JSON.stringify(
          thisBall.current.getBoundingClientRect()
        );

        if (nextValue === prevValue) {
          clearInterval(interval);

          console.log(
            `stopped changing in ${Date.now() - start}ms. final top:`,
            thisBall.current.getBoundingClientRect().top
          );
        }
      }
    }, start);
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
