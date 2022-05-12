import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import google from '../image/google-logo.png';
import git from '../image/git.png'
import './LogIn.css';
import auth from '../Firebase/Firebase.init';
const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    const [signInWithGithub, gituser, gitloading, giterror] = useSignInWithGoogle(auth);
    // log in email password 
    const [
        signInWithEmailAndPassword,
        user4,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
   
    const navigate = useNavigate( );
   
    let location = useLocation();
    let [user] = useAuthState(auth);
  let from = location.state?.from?.pathname || "/";

    const hendelEmailChange = event => {
        setEmail(event.target.value);
    }
    const hendelpassword = event => {
        setPassword(event.target.value)
    }
    const hendelsubmit = event => {
        event.preventdefault();
        signInWithEmailAndPassword(email, password);
    }
    if (error) {
        return (
            <div>
                <p>Sorry:please proved valid information </p>
            </div>
        )
    }
    const signWithGoogle = () => {
        signInWithGoogle() 

    }
    if (user) {
       navigate(from, { replace: true })
    }
    const signWithGithub = () => {
        signInWithGithub() && navigate('/order')
        
    }
    
    return (
        <div className='bg-black'>
            <div className='my-5 loginform '>
            <form onSubmit={hendelsubmit}>
            <h2 className='text-info text-center'> Log In </h2>
                <input onBlur={hendelEmailChange}  id="email" className='px-5 py-2 my-2 border-0' type="email" placeholder='Enter your email addess' required />
                <br />
                <input onBlur={hendelpassword} id="password" type="password" className='px-5 my-2 py-2 border-0' placeholder='Enter your email addess' required />
                    <br />
                    <p className='text-danger'>{error}</p>
                    <button className='px-3 py-2 my-2 border-0' id="submit" type="submit">Log in</button>
                </form>
                <p> Don't have account? <Link to="/registation"><span id='link' className='text-danger mt-2'>Please Register</span></Link></p>
                <hr />

                <button onClick={() => signWithGoogle()} id="email" className='px-5 py-2 my-2 border-0' type="submit "><img src={google} alt="" /> Sign In with Google</button> <br />
               <button onClick={() => signWithGithub()} id="email" className='px-5 py-2 my-2 border-0 text-gray' type="submit "><img src={git} alt="" /> Sign In with Github </button>
               <ToastContainer />
              </div>
            
             
   </div>
    );
};

export default LogIn;