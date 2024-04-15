import React from 'react';
import Header from '../../components/Header';
import { FormCreateMensagem } from '../../components/FormCreateMensagem';

import './style.css';

// fazer links na pagina

const Home = () => {
  return (
    <div className="wrapper">
      <Header type="guest" />
      
      <main>
        
        <section className="welcome">
          <h2 className="subtitle">
            Bem vindo!
          </h2>
  
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla quae repellat, ullam rerum amet maiores voluptatum deleniti quidem vel recusandae!
          </p>
        </section>

        <FormCreateMensagem />
      </main>
    </div>
  );
};

export default Home;
