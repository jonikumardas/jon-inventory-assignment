import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../Firebase/Firebase.init';

const Registaiton = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    
    const takeEmail = e => {
        setEmail(e.target.value);
    }
    const takePassword = e => {
        setPassword(e.target.value)
    }
    const takeRePassword = e => {
        setRepassword(e.target.value)
    }
    const register = e => {
        e.preventDefault();
        if (password === repassword) {
            createUserWithEmailAndPassword(email, password) && navigate('/order');
        }
    }
    if (error) {
        return (
            <div>
              <p>Sorry: {error.message}</p>
            </div>
          );
    }

    return (
        <div className='bg-black mt-5'>
            <div className='  mt-5 loginform '>
            <form onSubmit={register}>
            <h2 className='text-info text-center'> Register now  </h2>
                <input onBlur={takeEmail} id="email" className='px-5 py-2 my-2 border-0' type="email" placeholder='Enter your email addess' required />
                <br />
                <input onBlur={takePassword}  id="password" type="password" className='px-5 my-2 py-2 border-0' placeholder='Enter your password' required />
                <input onBlur={takeRePassword}  id="password" type="password" className='px-5 my-2 py-2 border-0' placeholder='Enter your Re-password' required />
                    <br />
                    <button className='px-3 py-2 my-2 border-0' id="submit" type="submit">Registaiton</button>
                </form>
                <p> Already have account? <Link to="/login"><span id='link' className='text-danger mt-2'>Log In</span></Link></p>
                

                
              </div>
        </div>
    );
};

export default Registaiton;