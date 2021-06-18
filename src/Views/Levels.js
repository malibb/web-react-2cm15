import React from 'react';
import LevelsContainer from '../components/LevelsContainer';
import { Link } from 'react-router-dom';

const Levels = () => {
    return (
      <>
        <h1 className="text-gray-900">Choose Your Level</h1>
        <LevelsContainer></LevelsContainer>
        <Link to="/level/new"><p className="text-base">Crear un nuevo nivel</p></Link>
      </>
    );
};

export default Levels;