import React, { useState } from 'react';
import LevelCard from './LevelCard';
import { levelsFigures, levelsNumbers } from './../utils/const';

const LevelsContainer = () => {
    const [levelsF ] = useState(levelsFigures);
    const [levelsN] = useState(levelsNumbers);

    return (
        <div className="grid grid-rows-2 grid-flow-col">
            <div className="flex justify-around">
            { levelsF && levelsF.map( l => <LevelCard 
                title={l.title}
                figure={l.figure}
                stars={l.stars}
                key={l.title}
            ></LevelCard>)
            }
            </div>
            <div className="flex justify-around">
                { levelsN && levelsN.map( l => <LevelCard 
                    title={l.title}
                    numberl={l.number}
                    stars={l.stars}
                    key={l.title}
                ></LevelCard>)
                }
            </div>
        </div>
    );
};

export default LevelsContainer;