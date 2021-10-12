import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
// import { Route } from 'react-router';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1 >
          Login
        </h1>
        <div className='form-inputs'>
          {/* <label className='form-label'>Username</label> */}
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Email'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          {/* <label className='form-label'>Email</label> */}
          {/* <input
            className='form-input'
            type='email'
             name='email'
            placeholder='Phone Number'
            value={values.email}
            onChange={handleChange}
          /> */}
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          {/* <label className='form-label'>Password</label> */}
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        {/* <div className='form-inputs'>
           <label className='form-label'>Confirm Password</label> 
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div> */}
        <div class="flex">
        <button className='form-input-btn' type='submit'>
          Login
        </button>
       <span  className="a"><a href="#">forgot password ?</a></span> 
       </div>
        <span className='form-input-login'>
          Not Signed Up Yet? 
         <MutedLink href="#">Register</MutedLink>
        </span>
        </form>
    </div>
  );
};

export default FormSignup;