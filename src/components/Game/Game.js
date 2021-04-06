import React, {
    useEffect,
    useState
} from 'react';

import {
    Ball
} from '../Ball/Ball';
import {
    Bars
} from '../Bar/Bars';
import {
    Message
} from '../Message/Message'

import {Alert} from '../Alert/Alert';
import {Graphics} from  '../Graphics/Graphics';

// const colors = ['red', 'yellow', 'purple'];
const colors = ['#fc5c82', '#fcd45c', '#815FF8'];

export const Game = () => {
    const [bars, setBars] = useState(['grey']);
    const [currentColor, setColor] = useState('grey');
    const [click, setClick] = useState(0);
    const [ball, setBall] = useState('#fc5c82');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [end, setEnd] = useState(false);
    const [score, setScore] = useState(0);
    const [ballposition, setPosBall] = useState(false);
    const [time, setTime] = useState(0); //interwał sprawdzający
    const [timetochange, setChangeTime] = useState(0);
    

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(p => p + 1);
        }, 1000);

        return () => {
            clearInterval(interval)
        }
    }, []);


    useEffect(() => {
        let interval;
        setTimeout(() => {
            interval = setInterval(() => {
                setPosBall(true);
            }, 2000);

        }, 17500);

        return () => {
            clearInterval(interval)
        }
    }, [ballposition]);


    useEffect(() => {
        const interval = setInterval(() => {
            let random = Math.floor(Math.random() * 3 + 1);
            if (random === 1) {
                setBall(colors[0])
            } else if (random === 2) {
                setBall(colors[1])
            } else {
                setBall(colors[2]);
            }
            console.log(ball);
        }, 2000);

        if (end === true) {
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
        }
    }, []);




    useEffect(() => {
        const interval = setInterval(() => {
        
        }, 3000);
        return () => {
            clearInterval(interval);
        }
    }, []);

    //najlepiej od puktow to uzaleznić!!! kiedy ma zmieniac kolor belki




    useEffect(() => {
        setBars(p => {
            const nP = [...p];
            p[currentIndex] = currentColor;
            if (p[currentIndex] === ball) {
                setCurrentIndex(currentIndex + 1);
                setScore(p=> p+1);
                console.log('sukces', currentIndex);
            } else {
                setEnd(true);
                console.log('koniec gry')
            }
            return nP;
        })
    }, [currentColor]);


    useEffect(() => {
        const interval = setInterval(() => {
            setBars(p => [...p, 'grey'])
        }, 2000);
        // to jest chyba dore rozwiazania
        //             if (end === true) {
        // clearInterval(interval);
        // }

        return () => {
            clearInterval(interval);
        }
    }, []);



    const onClick = () => {
        setClick(p => p + 1);

        function calc(click) {
            const temp = click % colors.length;

            if (temp == 0) {
                return colors[colors.length - 1];

            } else {
                return colors[temp - 1];
            }
        };
        // if(end===true){
        //     setClick(0);
        // }
        setColor(calc(click));
    }



    return (
        <> <div className = 'container'>
             <div className= 'container__game' onClick={onClick}>
                    <div className="intervalId">  {time}  timetochange{timetochange}  punkty{score}</div>
                 {end===true && <Message score={score}/>}
                 <Alert time={time} />
            <Ball ball={ball} ballposition={ballposition} time={time} />
            <Bars bars={bars} time={time}/>
            <Graphics />
            </div>
            </div>
        </>
)
}


