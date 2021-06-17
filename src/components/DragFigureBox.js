import React, { useEffect, useState, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

const DragFigureBox = ({ children }) => {
    const [values, setValues ] = useState({});
    const [numG, setNumbG ] = useState(0);
    const [denoG, setDenoG ] = useState(0);
    const [count, setCount ] = useState(0);
    const [item, setItem] = useState(null); 
    const [id, setId] = useState(null);
    const canvasRef = useRef(null);

    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'answer',
        accept: 'figure',
        item: { name: 'container' },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (item && dropResult) {
                alert(`You dropped ${item.name} into ${dropResult.name}!`);
                setId(item.name);
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
    }));

    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: 'figure',
        drop: (item) => {
            isLessThanOne(item);
            return { name: id }},
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }));

    const getName = ({name}) => name.split('-');

    const isLessThanOne = (item) => {
        setItem(item);
    }

    const radians = grados => grados * Math.PI / 180;

    const makeCircle = (contexto) => {
        contexto.fillStyle = '#FFFFFF';
        contexto.strokeStyle = "#000000";
        contexto.lineWidth = 1;

        contexto.beginPath();
        contexto.arc(42, 42, 40, 0, radians(360));
        contexto.fill();
        contexto.stroke();
        contexto.closePath();
    };

    const rand_range = (max, k) => Math.floor((Math.random()*max));

    const color= (k) =>"#"+rand_range(9, k)+""+rand_range(9, k)+""+rand_range(9,k)+"";

    const generaPartes = (contexto) => {
        let inicio = 0;
        for (let a in values) {
          const i = parseInt(a);
          const val = values[i];
          contexto.fillStyle = color(i);
          contexto.beginPath();
          contexto.moveTo(42, 42);
          var fraccion = 360 / val.den;
          var grados = fraccion * val.num;
          console.log('Inicio',inicio,'Fraccion',fraccion,'grados', grados);
          contexto.arc(42, 42, 40, radians(inicio), radians(grados + fraccion));
          contexto.fill();
          contexto.stroke();
          contexto.closePath();
          inicio = fraccion;
        }
    }

    const isActive = canDrop && isOver;
    useEffect(() => {
        const y = 42;
        const radio = 40;
        const x = 42;
        const canvas = canvasRef.current;
        const contexto = canvas.getContext('2d');

        makeCircle(contexto, x, y, radio);
    },[]);

    useEffect(()=>{
        console.log('Me ejecuté', !!item, item)
        if(item) {
            // console.log(item, count)
            const [denT, numT] = getName(item);
            const den = parseInt(denT);
            const num = parseInt(numT);
            const newNumG = numG*den+num*denoG;
            const newDenoG = denoG * den;
            // console.log(newNumG, newDenoG);
            const div = (denoG === 0) ? num / den : newNumG / newDenoG;
            // console.log(div, newNumG, newDenoG);
            if(div <= 1) {
                setValues({
                    ...values,
                    [count]: {den, num}
                });
                setCount(()=> count + 1);
                if(denoG === 0) {
                    setNumbG(num);
                    setDenoG(den);
                } else {
                    setNumbG(newNumG);
                    setDenoG(newDenoG);
                }
                setItem(null);
                // console.log(count);
            }
        }
    },[item]);
    
    useEffect(() => {
        if(values && count > 0) {
            const canvas = canvasRef.current;
            const contexto = canvas.getContext('2d');
            generaPartes(contexto);
            //console.log('Lo debí pintar',contexto)
        }
    },[count]);

    const opacity = isDragging ? 0.0 : 1;
    return (<div ref={drop}>
        <div ref={drag} role="Box" className="bg-white w-18 h-18 border border-black rounded-full" style={{ opacity }}>
            <canvas ref={canvasRef} width="84" height="84">
            </canvas>
        </div>
        </div>);
};

export default DragFigureBox;