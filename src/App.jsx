import { useState } from 'react';

import Header from './components/Header';
import './App.css';

function App() {
  const [colorInput, setColorInput]  = useState();

  return (
    <>
      <main>
        <Header />

        <div className='form-mensagem-create'> 
          <form action="">
            <div className='form-field'>
              <label htmlFor="">
                Nome do Destinatario
              </label>
              <input 
                className='input'
                type="text" 
                placeholder="Nome da pessoa..."
              />
            </div> 

            <div className='form-field field-info-curso'>
              <div>
                <label htmlFor="" className='sr-only'>
                  Serie
                </label> 
                <select name="serie_escolhida" id="">
                  <option value="1">
                    1⁰ 
                  </option>
                  <option value="2">
                    2⁰ 
                  </option>
                  <option value="3">
                    3⁰ 
                  </option>
                </select>
              </div>  

              <div>
                <label htmlFor="" className='sr-only'>
                  Curso
                </label> 
                <select name="curso_escolhido" id="">
                  <option value="">
                    MTEC - ADM 
                  </option>
                  <option value="">
                    MTEC - INFO
                  </option>
                  <option value="">
                    MTEC - LOG
                  </option>
                </select>
              </div>               

              <div>
                <label htmlFor="" className='sr-only'>
                  Periodo
                </label> 
                <select name="curso_escolhido" id="">
                  <option value="">
                    Manhã 
                  </option>
                  <option value="">
                    Tarde
                  </option>
                </select>
              </div>   
            </div>

            <div className='form-field'>
              <label htmlFor="">
                Mensagem
              </label>
              <textarea 
                className='input' 
                name="" 
                id="" 
                cols="30" 
                rows="10">
              </textarea>
            </div>

            <div className='form-field'>
              <label htmlFor="">
                Dica
              </label>
              <textarea 
                className='input' 
                name="" 
                id="" 
                cols="10" 
                rows="3">
              </textarea>
            </div>  

            <div className='form-field'>
              <label htmlFor="">
                Cor do Bilhete
              </label>
              <input 
                type='color'
                className='input'
                style={{ background: colorInput }}
                onChange={(e) => setColorInput(e.target.value)}
              />
            </div>  

            <div className='form-field'>
              <label htmlFor="" style={{ marginBottom: '0.6rem' }}>
                Forma da cartinha 
              </label>
              <div class="shape-selector">
                <input type="radio" id="shape1" name="shape" value="square" />
                <label for="shape1"></label>

                <input type="radio" id="shape2" name="shape" value="circle" />
                <label for="shape2"></label>

                <input type="radio" id="shape3" name="shape" value="triangle" />
                <label for="shape3"></label>

                <input type="radio" id="shape4" name="shape" value="heart" />
                <label for="shape4"></label>
              </div>
            </div>  

            <div className='form-field'>
              <label htmlFor="forma_pagamento">
                Forma de Pagamento
              </label> 
              <select name="forma_pagamento" id="" style={{
                width: '100px',
                marginTop: '0.6rem',
                height: '32px'
              }}>
                <option value="Físico">
                  Físico
                </option>
                <option value="Pix">
                  Pix
                </option>
              </select>
            </div>             

            <button className='btn'> 
              Enviar
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default App;
 