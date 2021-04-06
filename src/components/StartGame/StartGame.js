import React from 'react';
import {
    useHistory
} from 'react-router-dom';
import {Graphics2} from '../Graphics2/Graphics2';

export const StartGame = () =>{

  let history = useHistory();

  function handleClick() {
      history.push("/form");
  }
  

  return (
    <>
            <div className = "container_start">
            <div className ="wrap_Graphics">
              <Graphics2 />
              </div>
              <div className="wrap_start">
                <div className = "wrap_logo">
                    <p className="logo" >
                        <span>C</span>
                        <span>o</span>
                        <span>l</span>
                        <span>o</span>
                        <span>r</span>
                        <span>r</span>
                        <span>r</span>
                        <span>s</span>
                    </p>
                    <button className="btn_logo" onClick={handleClick}>Play</button>
                   
                </div>
               </div>
           </div>
     
    </>
  )
}


//   < div className = "how-to-play" >  
//                   <div className="section section-1">
//                         <h4>Bouncing ball<br/>changes color</h4>
//                         <div className="content">
//                             <div className="ball-demo" id="ball-demo"></div>
//                         </div>
//                     </div>
//                   </div>
//                              <div className="section section-2">
//                         <h4>Tap on the bar to switch the colors<br/>(Red, Yellow, Purple)</h4>
//                         <div className="content">
//                             <div className="bar bar-1" data-index="0"></div>
//                             <div className="bar bar-2"></div>
//                             <div className="bar bar-3"></div>
//                         </div>
//                     </div>
//                     <div className="section section-3">
//                         <h4>Always match the<br/>ball and bar colors</h4>
//                         <div className="content">
//                             <div className="ball-demo"></div>
//                             <div className="bar bar-1"></div>
//                         </div>
//                     </div>