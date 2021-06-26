import React from 'react';
import LevelsContainer from '../components/LevelsContainer';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import {
  useHistory
} from 'react-router-dom';

const Levels = () => {
    const history = useHistory();

    const redirect = () => {
      window.sessionStorage.removeItem('user');
      history.push("/");
    };

    return (
      <>
        <h1 className="text-gray-900">Choose Your Level</h1>
        <LevelsContainer></LevelsContainer>
        <Link to="/level/new"><p className="text-base">Crear un nuevo nivel</p></Link>
        <Button click={redirect} text="Cerrar sesión"></Button>
      </>
    );
};

export default Levels;