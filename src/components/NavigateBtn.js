import React from 'react';
import { Link } from 'react-router-dom';

const NavigateBtn = ({path, children}) => {
    return (
        <Link to={path}>
            <div className="m-3 w-12 h-12 bg-yellow-300 rounded-md shadow-lg border-black border-2">
            {children}
        </div>
        </Link>
    );
};

export default NavigateBtn;