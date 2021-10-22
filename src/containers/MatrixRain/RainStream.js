import React, { useEffect, useRef, useState } from 'react';
import useInterval from '@use-it/interval';
import './RainStream.css';

const validChars = `abcdefghijklmnopqrstuvwxyz0123456789$+-*/=%"'#&_(),.;:?!\\|{}<>[]^~`;
const streamMutationOdds = 0.02;

const minStreamSize = 15;
const maxStreamSize = 50;

const getRandomInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const getRandomChar = () => {
    return validChars.charAt(Math.floor(Math.random() * validChars.length));
}

const getRandomStream = () => {
    return Array(getRandomInRange(minStreamSize, maxStreamSize)) //generate new array
        .fill() // fills empty array with 'undefined' elements
        .map(_ => getRandomChar());
}

const getMutatedStream = (stream) => {
    const newStream = [];
    for (let i=1; i < stream.length; i++) {
        if (Math.random() < streamMutationOdds) {
            newStream.push(getRandomChar());
        } else {
            newStream.push(stream[i]);
        }
    }
    newStream.push(getRandomChar());
    return newStream;
}

const RainStream = () => {
    const [stream, setStream] = useState(getRandomStream());
    const [topPadding, setTopPadding] = useState(stream.length * -10);

    useInterval(() => {
        if (topPadding >= (window.innerHeight - 10)) {
            setTopPadding(0);
        } else {
            setTopPadding(topPadding + 10);
            setStream(stream => getMutatedStream(stream));
        }
    }, 100);

    return (
        <div style={{
            marginTop: topPadding,
            fontFamily: 'matrixFont',
            position: 'absolute',
            color: 'green',
            writingMode: 'vertical-rl',
            textOrientation: 'upright',
            whiteSpace: 'nowrap',
            userSelect: 'none',
            overflow: 'hidden',
        }}>
            {stream.map((char, index) => 
             <a style={{
                fontFamily: 'matrixFont',
                // if char is last one in stream, than make it white, otherwise
                // leave it alone
                color: index === stream.length - 1 ? '#fff' : 'green',
                // if the char is at the top, it becomes more and more transparrent
                // as you go down the stream it becomes more opaque
                opacity: index < 6 ? 0.1 + index * 0.15 : 1,
                textShadow:
                    index === stream.length - 1
                    // if the char is the last one in the stream, we give it white glow
                    ? '0px 0px 20px rgba(255, 255, 255, 1)'
                    : undefined,   
             }}>
                 {char}
             </a>
             )}
        </div>
    )
};

export default RainStream