import './MatrixRain.css';
import React, {useEffect, useContext, useRef, useState, useCallback} from 'react';
import RainStream from './RainStream.js';
import {Context} from '../../store/Store.js';



const MatrixRain = ( props ) => {
    const canvasRef = useRef(null);
  
    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const alphabet = `abcdefghijklmnopqrstuvwxyz0123456789$+-*/=%"'#&_(),.;:?!\\|{}<>[]^~`;
        
        const fontSize = 15;
        const columns = canvas.width/fontSize;
        
        const rainDrops = [];
        
        for( let x = 0; x < columns; x += 0.5 ) {
            //the index val represents the x coordinate, and the val 
            //at the index represent the y coordinate
            rainDrops[x] = 1;
        }

        console.log(rainDrops);
        
        const draw = () => {
            context.fillStyle = 'rgba(0, 0, 0, 0.05)';
            context.fillRect(0, 0, canvas.width, canvas.height);
            
            context.fillStyle = '#0F0';
            context.font = 'bolder ' + fontSize + 'px matrixFont';
        
            for(let i = 0; i < rainDrops.length; i += 0.5)
            {
                const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
                context.fillText(text, i*fontSize, rainDrops[i]*14);
                
                //reset the y coordinate randomly if it is found that rain
                //drop has gone the beyond height of window
                if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
                    rainDrops[i] = 0;
                }
                //increment the element at rainDrop[i] by 1, which is the y cord
                rainDrops[i]++;
            }
        };
        //value of 50 looks good
        setInterval(draw, 100);
    }, [])

    return (
        <canvas className='matrix-rain' ref={canvasRef}>
            {props.children}
        </canvas>
    )
};

export default MatrixRain