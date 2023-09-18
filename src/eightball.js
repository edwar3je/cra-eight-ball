import './eightball.css';
import { pickRandom } from './helper';
import { useState } from 'react';

const EightBall = ({ answers }) => {
    const defaultState = {msg: "Think of a Question", color: "black"};
    const [response, pickResponse] = useState(defaultState);

    return (
        <div className="component-container">
            <div className="eight-ball-container" id={response.color} onClick={() => pickResponse(pickRandom(answers))}>
                <h3 className="eight-ball-message">{response.msg}</h3>
            </div>
            <button className="reset-button" onClick={() => pickResponse(defaultState)}>Reset</button>
        </div>
    );
}

export default EightBall