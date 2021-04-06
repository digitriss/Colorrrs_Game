import React, {
    useState,
    useEffect
} from 'react';


const ballSpeed = ['ball speedBall1', 'ball speedBall2', 'ball speedBall3'];

export const Ball = ({ball, ballposition, time}) => {
        const [animation, addAnimation] = useState('');
 
        useEffect(() => {
            const timeoutID = setTimeout(() => {
                addAnimation('ball');
            }, 14000);

        }, []);

        useEffect(()=>{
    if (ballposition === true && time<=50.99 ) {
        addAnimation(ballSpeed[0])
    }

     else if (ballposition===true && time >= 51 && time <= 73.99) {
        addAnimation('ball speedBall2')

    }
    else if (ballposition===true && time>= 74){
          addAnimation('ball speedBall3')
    }
    else if(time===110){
        addAnimation('ball');
    }
        }, [ballposition, time])
        
        
//dodac klase do ball
        return ( <div className='container__ball'>
            
        <div className={animation} style={{backgroundColor: ball }}> </div>
            </div>)
        }
