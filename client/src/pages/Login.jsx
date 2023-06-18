import React from 'react';
import Header from '../components/Header';

const Login = () => {
  return (
    <>
      <main>
        <Header />

        <h2>Login</h2>

        <div>
          <form action="">
            <div className="form-field">
              <input 
                type="email" 
                name="" 
                id="" 
                placeholder='Email...'  
                className='input'
              />
            </div>               

            <div className="form-field">
              <input 
                type="password" 
                name="" 
                id="" 
                className='input' 
              />
            </div>

            <button className="btn">
              Entrar
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Login;