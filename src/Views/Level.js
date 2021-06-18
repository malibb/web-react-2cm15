import React, { useContext } from 'react';
import L from '../components/Level';
import { useGame } from './../context/gameContext';
import { CogIcon, TrashIcon} from '@heroicons/react/solid'
import { Link } from 'react-router-dom';
import { useGame } from '../context/gameContext';

const Level = () => {
    const [ { game }, { createGame } ]= useGame();
    const deleteF = () => {
        deleteGame(game.actualLevel.id);
    };
    return (
                <div><L 
                title={game.actualLevel.title}
                figure={game.actualLevel.figure} 
                answers={game.actualLevel.answers}
                options={game.actualLevel.options}/>
                <div className="flex content-center justify-center">
                    <div className="flex justify-center items-center bg-gray-50 w-24 h-28 text-xl">
                        <Link to={'/edit/'+ game.actualLevel.id}><CogIcon className="h-10 w-10 fill-current text-gray-600"></CogIcon></Link>
                        <TrashIcon onClick={() => deleteF()} className="h-10 w-10 fill-current text-red-600"></TrashIcon>
                    </div>
                </div>
                </div>

    );
};

export default Level;