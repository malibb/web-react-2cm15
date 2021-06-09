import React from 'react';
import Stars from './Stars';

const LevelCard = ({title, figure, numberl, stars}) => {
    return (
        <div className="shadow-lg rounded-md bg-gray-50 w-44 h-64 p-5 m-2">
            <p className="text-xl">{title}</p>
            <div className="flex content-center justify-center">
                <div className="flex justify-center items-center bg-gray-50 w-24 h-32">
                    <p>{figure || numberl}</p>
                </div>
            </div>
            <div><Stars qty={stars} win={ Math.random() * (3 - 1) + 1}></Stars></div>
        </div>
    );
};

export default LevelCard;