import React, { useContext } from 'react';
import L from '../components/Level';
import { CogIcon, TrashIcon} from '@heroicons/react/solid'
import { Link, useHistory } from 'react-router-dom';
import { useGame } from '../context/gameContext';

const Level = () => {
    const history = useHistory();
    const [ { game }, { deleteGame } ]= useGame();
    const deleteF = () => {
        const dlt = window.confirm('¿Seguro que quieres borrar el nivel?')
        if(dlt){
            deleteGame(game.actualLevel.id);
        }
        history.push('/');
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