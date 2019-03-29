import React from 'react';
import './gameBox.css';
import GuessedNumber from './guessedNumber';
import GuessForm from './guessForm';
import GuessCounter from './guessCounter';

export default function GameBox(props) {
    return (
        <section className="gameBox-box">
            <div className="directions-box">
                <h1 className="directions-title">Make your Guess!</h1>
            </div>
            <div className="actionBox">
                <GuessForm />
                <GuessCounter />
            </div>
            <div className="guessesBox">
                <GuessedNumber />
            </div>
        </section>
    );
}