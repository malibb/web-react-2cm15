import React, { useState } from 'react';
import './Starts.css';

const Stars = ({qty, win}) => {
    const [stars] = useState(new Array(qty).fill(0)); 

    const getStars = (i) => {
        if(i < win) {
            return 'star win';
        }
        return 'star';
    }
    return (
        <div className="shadow-md rounded-md border-2 border-black pt-2">
            {stars && stars.map((_,i) => <i className={getStars(i, win)} key={i}></i> )}
        </div>
    );
};

export default Stars;