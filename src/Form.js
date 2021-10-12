import React from 'react';
import './Form.css';
import FormSignup from './FormSignup';
 import img2 from './images/login logo.png';
const Form = () => {
 return (
    <>
      <div className='form-container'>
        <div className='form-content-left'>
          <img className='form-img' src={img2}alt='spaceship' />
        </div>
        <FormSignup/>
        
      </div>
    </>
  );
};

export default Form;