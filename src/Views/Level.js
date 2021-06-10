import React, { useContext } from 'react';
import L from '../components/Level';
import { gameContext } from './../context/gameContext';

const Level = () => {
    const { game } = useContext(gameContext);
    return (
                <L 
                title={game.actualLevel.title}
                figure={game.actualLevel.figure} 
                answers={game.actualLevel.answers}
                options={game.actualLevel.options}/>

    );
};

export default Level;