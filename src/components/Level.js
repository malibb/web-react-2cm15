import React from 'react';
import Answers from './Answers';
import Figure from './Figure';
import OptionsBox from './OptionsBox';
import Sidebar from './Sidebar';

const Level = ({title, figure, answers}) => {
    return (
        <div className="flex w-screen px-5">
            <div className="w-2/12 pl-5">
                <Sidebar></Sidebar>
            </div>
            <div className="w-5/6">
                <p className="">{title}</p>
                <div className="flex flex-wrap">
                    <div className="min-w-full h-72 my-5 flex items-center	justify-center">   
                        <Figure type={figure}></Figure>
                    </div>
                    <div className="min-w-full h-36 my-5 flex items-center	justify-center">
                        <OptionsBox></OptionsBox>
                    </div>
                </div>
            </div>
            <div className="w-3/12 pr-5">
                <Answers answers={answers}/>
            </div>
        </div>
    );
};

export default Level;