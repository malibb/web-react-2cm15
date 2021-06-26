import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

const userContext = React.createContext(undefined);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticate, setIsAuthenticate] = useState(false);

  const createForm = (inputs) => {
    const params = new FormData();
    if ( inputs ) {
      Object.keys(inputs).map(e => e === 'file' ? params.append(e, inputs[e], inputs[e].name) : params.append(e, inputs[e]));
    }
    return params;
  }

  const getUser = (inputs) => {
    const params = createForm(inputs);
    axios({
      method: "post",
      url: 'http://localhost:8080/CrudFracciones/loginUser',
      data: params,
      headers: {"Content-Type": "multipart/form-data"}
    })
      .then(({data, status})=> {
        setUser(data);
        if(data.password === 'true') {
          window.sessionStorage.setItem('user',data);
          setIsAuthenticate(true);
        }
        return data;
      })
      .catch((e) => {
        console.log('Hay ocurrido un problema', e);
        window.sessionStorage.removeItem('user');
        setIsAuthenticate(false);
      });
  };

  useEffect(() => {
    //getUser();
  }, []);

  const state = [
    {
      user,
    },
    {
      setUser,
      getUser,
    }
  ];

  return (
    <userContext.Provider value={state}>
      {children}
    </userContext.Provider>
  );
  
};

const useUser = () => {
  const context = useContext(userContext);
  if (context === undefined) {
    throw new Error('usegame can only be used inside gameContext');
  }
  return context;
};

export {
  UserProvider,
  useUser
};