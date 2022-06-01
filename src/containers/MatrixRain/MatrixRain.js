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

        const fontSize = 14

        // any number less than 0.5 will cause columns to start to overlap
        const xAxisDistanceBetweenCols = 0.8

        const yAxisDistanceBetweenRows = 1.1

        const matrixCharTracker = {
            prevChar: "",
            currChar: "",
            currXCoordinate: 0,
            currYCoordinate: 0, // the * 2 is there for testing purposes, remove it later
            fontSize: fontSize,
            alphabet: `abcdefghijklmnopqrstuvwxyz0123456789$+-*/=%"'#&_(),.;:?!\\|{}<>[]^~`,

            generateChar: function() {

                // first row edge case
                if (this.currYCoordinate === 0) {
                    
                    context.fillStyle = 'white'; // white
                    context.font = '900 ' + fontSize + 'px matrixFont';
    
                    // generate random char
                    this.currChar = this.alphabet.charAt(Math.floor(Math.random() * this.alphabet.length));
    
                    // draw newly generated char
                    // context.fillText(text,x,y,maxWidth);
                    context.fillText(this.currChar, this.currXCoordinate*this.fontSize, this.currYCoordinate*this.fontSize, 10);

                    // save current char as previous char
                    this.prevChar = this.currChar;
                }
                // every other row case
                else {
                    // remove top char(prev char)
                    context.fillStyle = 'black'; // black
                    // context.fillRect(x,y,width,height);
                    context.fillRect(this.currXCoordinate*this.fontSize, (this.currYCoordinate-1.90)*this.fontSize, 11.5, this.fontSize+0.2);

                    // rewrite top char(prev char) as green char
                    context.fillStyle = '#0F0'; // green
                    context.font = '900 ' + fontSize + 'px matrixFont';
                    // context.fillText(text,x,y,maxWidth); this was 10 before
                    // the higher the mult for this.currYCoordinate, the more it will move down
                    context.fillText(this.prevChar, this.currXCoordinate*this.fontSize, (this.currYCoordinate-yAxisDistanceBetweenRows)*this.fontSize, 10);
    
                    // generate new random char
                    context.fillStyle = 'white'; // white
                    context.font = '900 ' + fontSize + 'px matrixFont';
                    this.currChar = this.alphabet.charAt(Math.floor(Math.random() * this.alphabet.length));

                    // draw newly generated char
                    // context.fillText(text,x,y,maxWidth);
                    context.fillText(this.currChar, this.currXCoordinate*this.fontSize, this.currYCoordinate*this.fontSize, 10);

                    // save current char as previous char
                    this.prevChar =  this.currChar;
                }
            }
        };
        
        const matrixRain = [];
        
        // i < 1 is just there so you can have two columns 
        // for testing, change it back to canvas.length later
        for( let x = 0; x < canvas.width; x += xAxisDistanceBetweenCols ) {

            const matrixRainCol = Object.create(matrixCharTracker);
            matrixRainCol.currXCoordinate = x;

            matrixRain[x] = matrixRainCol;
        }
        
        const draw = () => {
            // draw really light black background over entire canvas
            context.fillStyle = 'rgba(0, 0, 0, 0.05)';
            context.fillRect(0, 0, canvas.width, canvas.height);
            
            // i < 1 is just there so you can have two columns 
            // for testing, change it back to canvas.length later
            for(let i = 0; i < canvas.width; i += xAxisDistanceBetweenCols)
            {
                // generate char
                matrixRain[i].generateChar();

                // if column reaches end of screen, randomly reset some column to re-start from top
                if(matrixRain[i].currYCoordinate*fontSize > canvas.height && Math.random() > 0.975){
                    matrixRain[i].currYCoordinate = 0;
                }
            
                // increment y coordinates to make rain go down
                matrixRain[i].currYCoordinate = matrixRain[i].currYCoordinate + yAxisDistanceBetweenRows;
            }
        };

        //value of 50 looks good
        setInterval(draw, 90);
    }, [])

    return (
        <canvas className='matrix-rain' ref={canvasRef}>
            {props.children}
        </canvas>
    )
};

export default MatrixRain