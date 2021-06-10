import React, { useEffect, useRef } from 'react';
import './Figure.css';

const Figure = ({c, type}) => {
    const canvasRef = useRef(null);

    const radians = grados => grados * Math.PI / 180;
    const rand_range = (max, min) => Math.floor((Math.random() * max) + min);
    const color= () =>"rgb("+rand_range(0, 255)+","+rand_range(0, 255)+","+rand_range(0, 255)+")";

    useEffect(() => {
        const y = 40;
        const radio = 40;
        const x = 40;
        const canvas = canvasRef.current;
        const contexto = canvas.getContext('2d');
        contexto.fillStyle = c || '#e7de98';
        contexto.strokeStyle = "#FFF81F";
        contexto.lineWidth = 2;

        contexto.beginPath();
        contexto.arc(x, y, radio, 0, radians(360));
        contexto.fill();
        contexto.closePath();

        
    })
    return (
        <div>
            <canvas ref={canvasRef} width="80" height="80">
            </canvas>
        </div>
    );
};

export default Figure;