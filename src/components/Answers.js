import React from 'react';
import Fraccion from './Fraccion';
import AnswerBox from './AnswerBox';

const Answers = ({answers}) => {
    return (
        <div className="flex flex-col items-start">
           {answers && answers.map((a, i) =><div className="flex" key={a+i}>
            <AnswerBox key={'answ'+i} id={a.den + '-' + a.num + '-option'}/>
            <Fraccion key={'frac'+i} num={a.num} deno={a.den}/>
           </div>)}
        </div>
    );
};

export default Answers;