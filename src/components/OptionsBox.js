import React from 'react';
import DragFigureBox from './DragFigureBox';
import Figure from './Figure';

const OptionsBox = ({ options }) => {
    return (
        <div className="w-3/5 h-32 rounded-md border-2 bg-white border-gray-600 flex content-evenly items-center justify-evenly m-5">
            {
                options && options.map(o => <Figure 
                    key={o.den + '-' + o.num + '-option'} 
                    cantidad={o.den} 
                    cantidadColoreada={o.num}
                    id={o.den + '-' + o.num + '-option'} />)
            }
        </div>
    );
};

export default OptionsBox;