import React, { useEffect, useState } from 'react';
import Fraccion from './Fraccion';
import AnswerBox from './AnswerBox';
import { useHistory } from 'react-router-dom';

const Answers = ({answers, answer}) => {
    const history = useHistory();
    const [wins, setWins] = useState({'answ-0': false, 'answ-1': false, 'answ-2': false});
    const setWinsOnAB = (e) => {
        setWins({
            ...wins,
            ...e
        })
    }

    useEffect(() => {
        if ( wins && Object.values(wins).every((e) => e === true)) {
            setTimeout(() => {
                alert('Ganaste :D');
                setWins({'answ-0': false, 'answ-1': false, 'answ-2': false});
                history.push('/');
            },300);
        }
    }, [wins]);
    return (
        <div className="flex flex-col items-start">
           {answers && answers.map((a, i) =><div className="flex" key={a+i}>
            <AnswerBox 
            setW={setWinsOnAB}
            answer={answer} key={'answ'+i} name={'answ-'+i} id={a.den + '-' + a.num + '-option'}/>
            <Fraccion key={'frac'+i} num={a.num} deno={a.den}/>
           </div>)}
        </div>
    );
};

export default Answers;