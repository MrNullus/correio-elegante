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
          <h2 className="subtitle">
            Sinta-se livre e liberte seus pensamentos!
          </h2>
  
          <p>
            Não fique com medo, tudo é estritamente anônimo e criptografado!
          </p>
        </section>

        <FormCreateMensagem />

        <section className="help-me-amorim">
          <header>
            <h1>Está precisando de ajuda?</h1>
            <i class="fi fi-tr-lightbulb-exclamation"></i>
          </header>

            <p>
              Não tem problema! o Amorim está aqui para te ajuda o nosso cúpido possui:
              <br /><br/>
              <ul>
                <li>
                  Uma seleção dos melhores textos para você enviar
                </li>
                <li>
                  Caso lhe falte criatividade peça ao Amorim um texto personalizado e do jeito que você quer que a pessoa receba
                </li>
                </ul>
                </p>

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
