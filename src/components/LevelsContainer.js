import React, { useContext } from 'react';
import LevelCard from './LevelCard';
import { useGame } from './../context/gameContext';

const LevelsContainer = () => {
    const [{ game: { levelsF, levelsN } }] = useGame();

    return (
        <div className="grid grid-rows-2 grid-flow-col">
            <div className="flex justify-around">
            { levelsF && levelsF.map( l => <LevelCard 
                title={l.title}
                figure={l.figure}
                stars={l.stars}
                key={l.title}
                answers={l.answers}
                options={l.options}
            ></LevelCard>)
            }
            </div>
            <div className="flex justify-around">
                { levelsN && levelsN.map( l => <LevelCard 
                    title={l.title}
                    numberl={l.number}
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