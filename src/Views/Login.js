import React, { useEffect } from 'react';
import Form from '../components/Form';
import { forms } from '../utils/const';
import { useUser } from '../context/userContext';
import { Link, useHistory } from 'react-router-dom';


const Login = () => {
    const [{user},{getUser}]= useUser();
    const history = useHistory();

    const login = async (inputs) => {
        getUser(inputs);
        redirect();
    };

    useEffect(() => {
        redirect();
    }, [user])

    const redirect = () => {
        if(window.sessionStorage.getItem('user')){
            history.push('/levels');
        } else {
            alert('ERROR AL INICIAR SESIÓN')
        }
    };

    return (
        <div className="overflow-auto">
            <p className="h1">Login</p>
            <Form
                submit={login} 
                styling="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" 
                textBtn="Siguiente"
                stylingI={'inline-block mt-2 w-1/2 pr-1'}
                styleInput="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                inputsData={forms.login}
            ></Form>
            <Link to="/">Volver</Link>
        </div>
    );
};

export default Login;