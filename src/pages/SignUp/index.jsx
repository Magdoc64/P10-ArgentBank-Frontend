import Inputs from '../../components/Input/Inputs'
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import { userLogin } from '../../actions/authAction';
import { user } from '../../actions/userAction';

const SignUp = () => {
    const form = useRef();
    const {userToken, error} = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    
    const [errorMessage, setErrorMessage] = useState([]);
    const page = useNavigate();
    
    let errorLogin = [];
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const email= form.current[0].value;
        const password= form.current[1].value;
        dispatch(userLogin({email, password}))

        email === ''? errorLogin.push('Username est obligatoire'):null
        password === ''? errorLogin.push('Mot de passe obligatoire'):null
        if (error){
            errorLogin.push(error);
        }
        if (errorLogin.length >0) {
            setErrorMessage(error.join('. '));
        }
    }

    useEffect(() => {
        if (errorLogin.length === 0 && userToken) {
            dispatch(user({userToken}))
            page(`/customersSpace`)
        }
    },[errorLogin.length,userToken,dispatch,page])
    
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                {errorMessage !== 0 && <p className='error-msg'>{errorMessage}</p>}
                <form ref={form} onSubmit={handleSubmit}>
                    <Inputs type='email' id='email' className='input-wrapper' value=''/>
                    <Inputs type='password' id='password' className='input-wrapper'/>
                    <Inputs type='checkbox' id='remembre-me' className='input-remember'/>
                    <button type='submit' className='sign-in-button'>Sign In</button>
                </form>
            </section>
        </main>
    )
}

export default SignUp
