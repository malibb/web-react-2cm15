export default function Button({click = () => {}, styling, type, text}) {
    return(
        <button onClick={click} type={type} className={`${styling}`}>{text}</button>
    );
}