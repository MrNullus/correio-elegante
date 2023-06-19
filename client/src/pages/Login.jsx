import React from 'react';
import Header from '../components/Header';

const Login = () => {
  return (
    <>
      <main>
        <Header />

        <h2>Login</h2>

        <div>
          <form action="/user/register">
            {/* <div className="form-field">
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
            </div> */}

            <div className="form-field">
              <input 
                type="text" 
                name="nome"
                id=""  
                className='input' 
              />
            </div>  

            <div className="form-field">
              <input 
                type="email" 
                name="email"
                id=""  
                className='input' 
              />
            </div>  

            <div className="form-field">
              <input 
                type="password" 
                name="password"
                id=""  
                className='input' 
              />
            </div>  

            <button className="btn">
              Entrar
            </button>
            <br />

            <a href="/register">
              Cadastro   
            </a>
          </form>
        </div>
      </main>
    </>
  );
};

export default Login;