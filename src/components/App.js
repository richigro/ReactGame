import React from 'react';
import './App.css';
import WhatButton from './whatButton';
import NewGameButton from './newGameButton';
import Title from './title';
import GameBox from './gameBox';

export default function App(props) {
    return (
        <main className="main">
            <WhatButton />
            <NewGameButton />
            <Title />
            <GameBox />
        </main>
    );
}