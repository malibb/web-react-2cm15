import React, { useContext, useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';
import { useGame } from '../context/gameContext';
import Figure from './Figure';

const AnswerBox = ({id, answer}) => {
    const [{ game } ]= useGame();
    const [win, setWin] = useState(false);
    const [change, setChange] = useState(false);

    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: 'answer',
        drop(item, monitor, components) {
            setChange(!change);
            return { name: id };
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }));

    useEffect(()=>{
        if(change) {
            const a = game.currentAnswer;
            const [denA, numA] = id.split('-');
            if((parseInt(a.num)/parseInt(a.den)) ===(parseInt(numA)/parseInt(denA))){
                setWin(true);
            }
        }
    },[change]);
    const isActive = canDrop && isOver;

    return (
        <div ref={drop} className={`w-20 h-24 rounded-md border-2 ${ isActive ? 'bg-gray' : 'bg-white' } border-gray-600 m-1`}>
            {win ?<Figure key={id.split('-')[0] + '-' + id.split('-')[1] + '-option'} 
                    cantidad={id.split('-')[0]} 
                    cantidadColoreada={id.split('-')[1]}
                    id={id.split('-')[0] + '-' + id.split('-')[1] + '-option'}></Figure>:''}
        </div>
    );
};

export default AnswerBox;