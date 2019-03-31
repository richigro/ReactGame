import React from 'react';
import './guessedNumber.css';

export default function GuessedNumber(props) {
    return (
        <div>
            {props.guess}
        </div>
    );
}