import Inputs from '../../components/Input/Inputs'
import { useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import { userLogin } from '../../actions/authAction';
import { loginit } from '../../reducers/authReducer';
import { user } from '../../actions/userAction';
import { errorInit, errorEmail, errorPassword} from '../../reducers/errorReducer';

const SignUp = () => {
    const form = useRef();
    const dispatch = useDispatch();
    const page = useNavigate();

    const {userToken} = useSelector((state) => state.auth);
    const errorConnect = useSelector((state) => state.error);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(loginit())
        dispatch(errorInit())
        
        const email= form.current[0].value;
        const password= form.current[1].value;
        if(email===''){
            dispatch(errorEmail())
        }
        if(password===''){
            dispatch(errorPassword())
        }
        if(email!=='' && password!==''){
            dispatch(userLogin({email, password}))
        }
    }
    
    useEffect(() => {
        if (errorConnect.length === 0 && userToken) {
            dispatch(user({userToken}))
            page(`/customersSpace`)
        }
    },[errorConnect.length,userToken,dispatch,page])
    
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                {errorConnect.length !== 0 && <p className='error-message'>{errorConnect.join(". ")}</p>}
                <form ref={form} onSubmit={handleSubmit}>
                    <Inputs type='email' id='email' name='Email' className='input-wrapper'/>
                    <Inputs type='password' id='password' name='Password' className='input-wrapper'/>
                    <Inputs type='checkbox' id='remembre-me' name='Remenber me' className='input-remember'/>
                    <button type='submit' className='sign-in-button'>Sign In</button>
                </form>
            </section>
        </main>
    )
}

export default SignUp
