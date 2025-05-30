import './input.css'
import PropTypes from "prop-types";

const Input = ({type, id, name, className}) => {
    let input;
    let inputType=type;

    switch(type) {
        case type = "text":
            input =(<input type="text" id={id} name={name}/>);
        break;
        case type = "email":
            input=(<input type="email" id={id} name={name}/>);
        break;
        case type = "password":
            input=(<input type="password" id={id} name={name}/>);
        break;
        case type = "checkbox":
            input=(<input type="checkbox" id={id} name={name}/>);
        break;
        default:
            input =(<input type="text" id={id} name={name}/>);
    }

    if (inputType === "checkbox") {
        return (
            <div className={className}>
                {input}
                <label htmlFor={id}>{name}</label>
            </div>
        )
    }else{
        return (
            <div className={className}>
                <label htmlFor={id}>{name}</label>
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

