import Inputs from '../../components/Input/Inputs'
import { useState } from 'react';

const SignUp = () => {
    const [errorMessage, setErrorMessage] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData (form);
        const username = formData.get('username');
        const password = formData.get('password');

        let error = [];
        username === ''? error.push('Username est obligatoire'):null
        password === ''? error.push('Mot de passe obligatoire'):null
    
        setErrorMessage(error.join('. '));
        //navigation vers page si pas error
    }

    return errorMessage !== 0? (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <p className='error-msg'>{errorMessage}</p>
                <form onSubmit={handleSubmit}>
                    <Inputs type='text' id='username' className='input-wrapper'/>
                    <Inputs type='password' id='password' className='input-wrapper'/>
                    <Inputs type='checkbox' id='remembre-me' className='input-remember'/>
                    <button type='submit' className='sign-in-button'>Sign In</button>
                </form>
            </section>
        </main>
    ):(
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <Inputs type='text' id='username' className='input-wrapper'/>
                    <Inputs type='password' id='password' className='input-wrapper'/>
                    <Inputs type='checkbox' id='remembre-me' className='input-remember'/>
                    <button type='submit' className='sign-in-button'>Sign In</button>
                </form>
            </section>
        </main>
    )
}

export default SignUp
