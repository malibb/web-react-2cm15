import React, { useContext } from 'react';
import Stars from './Stars';
import { useGame } from './../context/gameContext';
import { useHistory } from 'react-router';
import { CogIcon } from '@heroicons/react/solid'



const LevelCard = ({title, figure, numberl, stars, answers, options}) => {
    const [{ game }, { setGame }] = useGame();

    const history = useHistory();

    const chargeLevel = () => {
        setGame( { 
            ...game,
            actualLevel: {title, figure, numberl, stars, answers, options} 
        });
        history.push('/level');
    };

    return (
        <div className="shadow-lg rounded-md bg-gray-50 w-40 h-56 p-5 m-2" onClick={chargeLevel}>
            <p className="text-xl">{title}</p>
            <div className="flex content-center justify-center">
                <div className="flex justify-center items-center bg-gray-50 w-24 h-28 text-xl">
                    <p>{figure || numberl}</p>
                </div>
            </div>
            <div><Stars qty={stars} win={ Math.random() * (3 - 1) + 1}></Stars></div>
        </div>
    );
};

export default LevelCard;