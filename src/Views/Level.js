import React, { useContext } from 'react';
import L from '../components/Level';
import { userContext } from '../context/userContext';
import { gameContext } from './../context/gameContext';

const Level = () => {
    const { name } = useContext(userContext);
    const { game } = useContext(gameContext);
    return (
                <L 
                title={game.actualLevel.title}
                figure={game.actualLevel.figure} 
                answers={game.actualLevel.answers}/>

    );
};

export default Level;