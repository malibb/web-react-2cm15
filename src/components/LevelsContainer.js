import React, { useContext } from 'react';
import LevelCard from './LevelCard';
import { useGame } from './../context/gameContext';

const LevelsContainer = () => {
    const [{ game: { levelsF, levelsN } }] = useGame();

    return (
        <div className="grid grid-rows-2 grid-flow-col">
            <div className="flex justify-around flex-wrap">
            { levelsF && levelsF.map( l => <LevelCard 
                id={l.id}
                title={l.title}
                figure={l.figure}
                stars={l.stars}
                key={l.title}
                answers={l.answers}
                options={l.options}
            ></LevelCard>)
            }
            </div>
        </div>
    );
};

export default LevelsContainer;