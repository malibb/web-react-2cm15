import React from 'react';

const Fraccion = ({num, deno}) => {
    return (
        <div className="w-10 flex flex-col justify-center text-4xl p-2">
            <p className="ring-offset-4	border-gray-700 border-b-4">
            {num}
            </p>
            <p>
            {deno}
            </p>
        </div>
    );
};

export default Fraccion;