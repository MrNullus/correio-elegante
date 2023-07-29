import React from 'react';
import Header from '../components/Header';

const Login = () => {
  return (
    <>
      <main>
        <Header />

        <center>
        <div className="overflow">
          <h2 className='title'>Login</h2>

          <div className='form form-login'>
            <form action="/user/login">
              <div className="form-field">
                <input 
                  type="email" 
                  name="email"
                  id="email"  
                  placeholder="Email"  
                  className='input' 
                />
                 <label id='lblErroEmail'></label>
              </div>  

              <div className="form-field">
                <input 
                  type="password" 
                  name="password"
                  id="password"  
                  placeholder="Password"
                  className='input' 
                />
                 <label id='lblErroSenha'></label>
              </div>  

              <center>
                <button className="btn">
                  Entrar
                </button>
              </center>
            </form>
          </div>
        </div>
        </center>
      </main>
    </>
  );
};

export default Login;