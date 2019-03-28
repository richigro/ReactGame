import React from 'react';
import './gameBox.css';
import GuessedNumber from './guessedNumber';

export default function GameBox(props) {
    return (
        <section className="gameBox-box">
            <div className="directions-box">
                <h1 className="directions-title">Make your Guess!</h1>
            </div>
            <div className="actionBox">
                
            </div>
            <div className="guessesBox">
                <GuessedNumber />
            </div>
        </section>
    );
}