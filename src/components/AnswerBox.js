import React from 'react';
import { useDrop } from 'react-dnd';

const AnswerBox = ({id}) => {
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: 'answer',
        drop(item, monitor) {
            console.log('drop', item);
            return { name: id };
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }));

    const isActive = canDrop && isOver;

    return (
        <div ref={drop} className={`w-20 h-24 rounded-md border-2 ${ isActive ? 'bg-gray' : 'bg-white' } border-gray-600 m-1`}>
        </div>
    );
};

export default AnswerBox;