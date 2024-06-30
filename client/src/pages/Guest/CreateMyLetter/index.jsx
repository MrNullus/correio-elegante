import React from 'react';
import Header from '../../../components/Header';
import { FormCreateMensagem } from '../../../components/FormCreateMensagem';

import './style.css';


const CreateMyLetter = () => {
  return (
    <>
    <Header type="guest" />
    <div className="wrapper create-my-mail">
      
      <main>
        
        <section className="welcome">
          <h2 className="title font-manuscrit">
            Liberte seus pensamentos!
          </h2>
  
          <p>
            <i>Garantimos total anonimato e criptografia.</i>
          </p>
        </section>


        <FormCreateMensagem />

      </main>
    </div>
    </>
  );
};

export default CreateMyLetter;
