import React from 'react';
import Scrapbook from './scrapbook';
import './app.css';

export default () => {
    return (
        <div className="main-container">
            <h1 className="main-title">Dookster's Memories</h1>
            <Scrapbook/>
        </div>
    )
}
