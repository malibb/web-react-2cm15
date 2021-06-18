import Button from "./Button";
import useForm from "../hooks/useForm";
import Input from "./Input";

export default function Form({submit, inputsData, textBtn, children, styling, stylingF, stylingI, styleInput}) {

    const {
        inputs,
        handleSubmit,
        handleInputs,
    } = useForm(submit,
        {}
    );

    return(
        <form onSubmit={handleSubmit} className="container">
            <div className={stylingF || "max-w-xl m-4 p-10 bg-white rounded shadow-xl"}>
                {inputsData ? 
                    inputsData.map((i,index) => 
                    <Input
                        label={i.label}
                        type={i.type}
                        key={i.name}
                        placeholder={i.placeholder}
                        change={handleInputs}
                        value={inputs[i.value]}
                        required={i.required}
                        name={i.name}
                        stylingI={stylingI}
                        styleInput={styleInput}
                    />)
                    : ''
                }
                {children}
            </div>
            <Button type="submit" styling={styling} text={textBtn}></Button>
        </form>
    );
};