import React from 'react';
import './gameBox.css';
import GuessedNumberBox from './guessedNumberBox';
import GuessForm from './guessForm';
import GuessCounter from './guessCounter';

export default class GameBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userGuess: 0,
            guesses: [{guess: 1}, {guess: 5}, {guess: 9}, {guess: 1},{guess: 1},{guess: 1},{guess: 1},{guess: 1},{guess: 1},{guess: 1},{guess: 1},{guess: 1},{guess: 1}]
        }
    }

    render() {
        const computerNumber = Math.floor(Math.random() * 100 + 1);
        // console.log(computerNumber);
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
                    <GuessedNumberBox guesses={[1, 2, 5, 10, 100, 56, 80]}/>
                </div>
            </section>
        );
    }
}