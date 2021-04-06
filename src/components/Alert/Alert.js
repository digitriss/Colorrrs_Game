import React, {
    useState,
    useEffect
} from 'react';

export const Alert = ({time}) =>{
     const [alert, setAlert] = useState(false);

     useEffect(() => {
         if (time > 7 && time < 16 ) {
             setAlert(true);
         } else(setAlert(false))
     }, []);


    return( <>{alert===true ? <div className='alert'>Click on the bars to change the color!</div> : <div></div>}
    </> )
}