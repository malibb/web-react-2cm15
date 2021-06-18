import React from 'react';
import Form from '../components/Form';
import { forms } from '../utils/const';
import { Link } from 'react-router-dom';
import { useGame } from '../context/gameContext';

const NewLevel = () => {
    const [ { game }, { createGame } ]= useGame();
    const create = (inputs) => {
        createGame();
    };
    return (
        <div>
            <p className="h1">Nuevo nivel</p>
            <Form
                submit={create} 
                styling="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" 
                textBtn="Siguiente"
                stylingI={'inline-block mt-2 w-1/2 pr-1'}
                styleInput="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                inputsData={forms.edit}
            ></Form>
            <Link to="/">Volver</Link>
        </div>
    );
};

export default NewLevel;