import React, {
    useEffect,
    useState
} from 'react';


export const Message = ({
        score
    }) => {
        const [message, setMessage] = useState('');
        useEffect(() => {
            if (score > 30) return setMessage("Chuck Norris?");
            else if (score > 25) return setMessage("You're the best!");
            else if (score > 20) return setMessage("Awesome");
            else if (score > 15) return setMessage("Great!");
            else if (score > 13) return setMessage("Nice!");
            else if (score > 10) return setMessage("Good Job!");
            else if (score > 3) return setMessage("Really?");
            else return setMessage("Poor...");
        }, []);

        return(<div className="message__container">
            <p>{message}</p>
            </div>)
        }