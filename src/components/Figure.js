import React, { useEffect, useRef } from 'react';
import { useDrag } from 'react-dnd';
import './Figure.css';

const Figure = ({c, b, type, id , cantidad, cantidadColoreada}) => {
    const canvasRef = useRef(null);

    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'figure',
        item: { name: id },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (item && dropResult) {
                //console.log(item, dropResult);
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
    }));

    const radians = grados => grados * Math.PI / 180;
    const rand_range = (max, k) => Math.floor((Math.random()*max));
    const color= (k) =>"#"+rand_range(9, k)+""+rand_range(9, k)+""+rand_range(9,k)+"";

    const generaPartes = (contexto, x, y, radio) => {
        for (let i = 0; i < cantidad; i++) {
          contexto.fillStyle = i< cantidadColoreada ? color(i): '#ffffff';
          // console.log(contexto.fillStyle, rand_range(0,1,i));
          contexto.beginPath();
          contexto.moveTo(x, y);
          var fraccion = 360 / cantidad;
          var grados = fraccion * i;
          contexto.arc(x, y, radio, radians(grados), radians(grados + fraccion));
          contexto.fill();
          contexto.stroke();
          contexto.closePath();
        }  
      }

    const makeCircle = (contexto, x, y, radio) => {
        contexto.fillStyle = c || '#e7de98';
        contexto.strokeStyle = b || "#000000";
        contexto.lineWidth = 1;

        contexto.beginPath();
        contexto.arc(x, y, radio, 0, radians(360));
        contexto.fill();
        contexto.stroke();
        contexto.closePath();
    };

    useEffect(() => {
        const y = 42;
        const radio = 40;
        const x = 42;
        const canvas = canvasRef.current;
        const contexto = canvas.getContext('2d');

        makeCircle(contexto, x, y, radio);
        
        if(cantidad) {
            generaPartes(contexto, x, y, radio);
        }
    })
    return (
        <div ref={drag}>
            <canvas ref={canvasRef} width="84" height="84">
            </canvas>
        </div>
    );
};

export default Figure;