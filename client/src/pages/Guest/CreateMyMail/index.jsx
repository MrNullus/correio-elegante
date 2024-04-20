import React from 'react';
import Header from '../../../components/Header';
import { FormCreateMensagem } from '../../../components/FormCreateMensagem';

import './style.css';

// fazer links na pagina

const CreateMyMail = () => {
  return (
    <div className="wrapper create-my-mail">
      <Header type="guest" />
      
      <main>
        
        <section className="welcome">
          <h2 className="title font-manuscrit">
            Liberte seus pensamentos!
          </h2>
  
          <p>
            <i>Garantimos total anonimato e criptografia.</i>
          </p>
        </section>

        <br/>

        <FormCreateMensagem />

        <section className="help-me-amorim">
          <header>
            <h2 className="subtitle">Está precisando de ajuda?</h2>
            <i class="fi fi-tr-lightbulb-exclamation"></i>
          </header>

            <p>
              Não tem problema! o Amorim está aqui para te ajuda o nosso cúpido possui:
              <br /><br/>
              <ul>
                <li>
                  Uma seleção dos melhores textos para você enviar ou ter inspiração. 💌
                </li>
                <li>
                  Se precisar de inspiração, peça ao <strong>Amorim</strong> um texto personalizado. 🌟
                </li>
                </ul>
                </p>
          
          <br/>

          <button className="btn btn-success">
            Acessar Amorim
          </button>
        </section>

        <br/><br/><br/><br/>
      </main>
    </div>
  );
};

export default CreateMyMail;
