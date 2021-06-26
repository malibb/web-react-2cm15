import React, { useContext } from 'react';
import Stars from './Stars';
import { useGame } from './../context/gameContext';
import { useHistory } from 'react-router';
import { CogIcon } from '@heroicons/react/solid'



const LevelCard = ({id, title, figure, numberl, stars, answers, options,type, file}) => {
    const [{ game }, { setGame }] = useGame();

    const history = useHistory();

    const chargeLevel = () => {
        setGame( { 
            ...game,
            actualLevel: {id, title, figure, numberl, stars, answers, options} 
        });
        history.push('/level');
    };

    const typeFile = (t, f) => {
        if(t==='png' || t==='jpg' || t==='PNG' || t==='JPG') {
            return <img alt="f" src={f}></img>
        } else if(t==='mp4') {
            return <video width="100" height="100" controls>
            <source src={f} type="video/mp4"/>
          Your browser does not support the video tag.
          </video>
        } else if(t==='mp3') {
            return <audio width="50" height="50" controls>
                <source src={f} type="audio/mpeg"/>
                Your browser does not support the video tag.
                </audio>
        } else {
            return<p>
            <p>{t}</p><p>{f}</p>
            <div>Hay un problema con la carga de tu contenido</div>
            </p>
        }
    }

    return (
        <div className="shadow-lg rounded-md bg-gray-50 w-40 h-56 p-5 m-2" onClick={chargeLevel}>
            <p className="text-xl">{title}</p>
            <div className="flex content-center justify-center">
                <div className="flex justify-center items-center bg-gray-50 w-24 h-28 text-xl">
                    <p>{figure || numberl}</p>
                    <div>
                      {typeFile(type, file)}
                    </div>
                </div>
            </div>
            <div><Stars qty={stars} win={ Math.random() * (3 - 1) + 1}></Stars></div>
        </div>
    );
};

export default LevelCard;