import React from 'react';
import { useState } from 'react';

import Header from '../components/Header';

const Login = () => {
  const [formValues, setFormValues] = useState({
    firstname: '',
    lastname: '',
    nickname: '',
    email: '',
    password: '',
  });

  const handleChangeForm = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  console.log('====================================');
  console.log(formValues);
  console.log('====================================');


  return (
    <>
      <main>
        <Header />

        <center>
        <div className="overflow">

          <h2 className='title'>Register</h2>

          <div className='form form-register'>
            <form method='POST'>
              <div className="form-field">
                <input 
                  type="text" 
                  name="firstname"
                  id="firstname"  
                  className='input'
                  placeholder='Firstname'
                  onChange={handleChangeForm}
                />
                <label id='lblErroFirstname'></label>
              </div>  

              <div className="form-field">
                <input 
                  type="text" 
                  name="lastname"
                  id="lastname"  
                  className='input'
                  placeholder='Lastname'
                  onChange={handleChangeForm}
                />
                <label id='lblErroLastname'></label>
              </div>  

              <div className="form-field">
                <input 
                  type="text" 
                  name="nickname"
                  id="nickname"  
                  className='input'
                  placeholder='Nickname'
                  onChange={handleChangeForm}
                />
                <label id='lblErroNickname'></label>
              </div>  

              <div className="form-field">
                <input 
                  type="email" 
                  name="email"
                  id="email"  
                  className='input' 
                  placeholder='Email'
                  onChange={handleChangeForm}
                />
                <label id='lblErroEmail'></label>
              </div>  

              <div className="form-field">
                <input 
                  type="password" 
                  name="password"
                  id="password"  
                  className='input' 
                  placeholder='Senha' 
                  onChange={handleChangeForm}
                />
                <label id='lblErroSenha'></label>
              </div>  

              <button className="btn">
                Entrar
              </button>
            </form>
          </div>
        </div>
        </center>
      </main>
    </>
  );
};

export default Login;