import React from 'react';
import './guessForm.css';

export default class GuessForm extends React.Component {
    state ={
        currentGuess: []
    }

    onSubmit(event) {
        event.preventDefault();
        const currentGuess = this.textInput.value;
        console.log(currentGuess);

    }
    
    render() {
        return (
            <div className="guessForm-container">
                <form className="guessForm" onSubmit={(e) => this.onSubmit(e)}>
                    <input className="guessInput" type="number" ref={input => this.textInput = input} name="guess" placeholder="Enter your Guess" required />  
                    <button className="guessBtn">Guess</button>
                </form>
            </div>
        );
    }
}