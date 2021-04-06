import React, {
    useEffect,
    useState
} from 'react';


const barStyle = ['bars firstLevel', 'bars secondLevel', 'bars thirdLevel'];

export const Bars = ({
        bars,
        time
    }) => {
        const [barsClass, setClass] = useState('bars');

        useEffect(() => {
            if (time <= 50.99) {
                setClass(barStyle[0])
             } else  if(time>=51 && time<=74.99 ) {
                 setClass(barStyle[1]);
             }
             else{
                 setClass(barStyle[2])
             }
        }, [time])

    //  useEffect(() => {
    //         if (time <= 3.99) {
    //             setClassb(barStyle[0])
    //          } else  if(time>=4 && time<=80 ) {
    //              setClassb(barStyle[1])
    //          }
    //          else{
    //              setClassb(barStyle[2])
    //          }
    //     }, [time])


        return(
                 <ul className={barsClass}>{bars.map((bar, index) =>
            <li className='bar' style={{backgroundColor: bar}} key={index}>{index}{barsClass}</li> )
            }
          </ul>
        )
        }