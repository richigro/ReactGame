import React from 'react';
import './guessCounter.css';

export default function GuessCounter(props) {
    return (
        <div className="guessCounter-container">
            <p className="guessCounterText">Guess #<span className="guessCounterNumber">{0}</span>!</p>
        </div>
    );
}