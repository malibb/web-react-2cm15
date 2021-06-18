import React, { useContext } from 'react';
import L from '../components/Level';
import { useGame } from './../context/gameContext';

const Level = () => {
    const [{ game }] = useGame();
    return (
                <L 
                title={game.actualLevel.title}
                figure={game.actualLevel.figure} 
                answers={game.actualLevel.answers}
                options={game.actualLevel.options}/>

    );
};

export default Level;