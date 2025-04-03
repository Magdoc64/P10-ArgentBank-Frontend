import './input.css'
import PropTypes from "prop-types";

const Input = ({type, id, className, value}) => {
    let input;
    let inputType=type;

    switch(type) {
        case type = "text":
            input =(<input type="text" id={id} name={id} value={value}/>);
        break;
        case type = "email":
            input=(<input type="email" id={id} name={id}/>);
        break;
        case type = "password":
            input=(<input type="password" id={id} name={id}/>);
        break;
        case type = "checkbox":
            input=(<input type="checkbox" id={id} name={id}/>);
        break;
        default:
            input =(<input type="text" id={id} name={id}/>);
    }

    if (inputType === "checkbox") {
        return (
            <div className={className}>
                {input}
                <label htmlFor={id}>{id}</label>
            </div>
        )
    }else{
        return (
            <div className={className}>
                <label htmlFor={id}>{id}</label>
                {input}
            </div>
        )
    }
}

Input.Proptypes = {
    type: PropTypes.string,
    id: PropTypes.string,
    className: PropTypes.string
}

export default Input

