import React from 'react';
import './guessForm.css';

export default function GuessForm(props) {
    return (
        <div className="guessForm-container">
            <form className="guessForm">
                <input className="guessInput" type="text" name="guess" placeholder="Enter your Guess" required />  
                <button className="guessBtn">Guess</button>
            </form>
        </div>
    );
}