
import React from 'react';

function Input({label,type,placeholder,change,value,required,name,stylingI, styleInput}){
    return(
        <>
            <div className={ stylingI }>
              <label className="block text-sm text-gray-600">{label}</label>
              <input 
              name={name}
              id={name}
              type={type} 
              onChange={change}
              value={value}
              className={styleInput}
              placeholder={placeholder} 
              required={required}/>
              <p className="help-block text-danger"></p>
            </div>
        </>
    );
};

export default Input;