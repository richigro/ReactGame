import React from 'react';
import './App.css';
import WhatButton from './whatButton';
import NewGameButton from './newGameButton';

export default function App(props) {
    return (
        <main className="main">
            <WhatButton />
            
            <NewGameButton />
        </main>
    );
}