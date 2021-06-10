import React from 'react';
import Figure from './Figure';

const OptionsBox = () => {
    return (
        <div className="w-3/5 h-32 rounded-md border-2 bg-white border-gray-600 flex content-evenly items-center justify-evenly">
            <Figure />
            <Figure />
            <Figure />
            <Figure />
        </div>
    );
};

export default OptionsBox;