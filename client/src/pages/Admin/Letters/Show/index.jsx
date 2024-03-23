import { useState, useEffect } from 'react';
//import axios from 'axios';

import Header from '../../../../components/Header/';

import '../../../../App.css';
import './style.css';

//TODO: Fazer a tela

const Show = () => {
    const [letter, setLetter] = useState({
      // head informations
      id: 1,
      uid: window.location.pathname.split('/')[4],
      created_at: "12/06/2024",
      updated_at: "12/06/2024",
      status_payment: true,
      price: "R$ 2,50",
      type: "Normal",
      
      // style informations
      theme: "Estilizado",
      description: "Deve ter a imagem da Docinho",
      color: "green",
      shape: "heart",
      
      // recipient informations
      name: "Julia Motta",
      serie: "3",
      course: "MTec Adm",
      turn: "Manhã",
      
      // body informations
      message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati a iusto eum, quos, quibusdam harum incidunt nisi expedita maiores veritatis.",
      tips: "Aquele Gustavo",
    });

    return (
      <div className="wrapper">
        <Header type="admin" />

        <main className="envelope">
          <h1 className="title">
            Cartinha:  <enfase>#{letter.uid}</enfase>
           </h1>
        
          <div className="envelope-content">
           <section className="letter-details">
            <article className="letter-details__head">
              <h3 className="subtitle">Cabeçalho</h3>
              
              <div>
                <h4 className="subtitle">
                  UID
                </h4>
                
                <span>
                  { letter.uid }
                </span>
              </div>
              
              <div>
                <h4 className="subtitle">
                  ID
                </h4>
                
                <span>
                  { letter.id }
                </span>
              </div>
              
              <div>
                <h4 className="subtitle">
                  Criada em
                </h4>
                
                <span>
                  { letter.created_at }
                </span>
              </div>
              
              <div>
                <h4 className="subtitle">
                  Atualizado em
                </h4>
                
                <span>
                  { letter.updated_at }
                </span>
              </div>
              
              <div>
                <h4 className="subtitle">
                Tipo
                </h4>
                
                <span>
                  { letter.type }
                </span>
              </div>
              
              <div className="box-btn-edit">
                <button className="btn-warning">Editar</button>
              </div>
              
              <div>
                <h4 className="subtitle">
                  Preço
                </h4>
                
                <span>
                  { letter.price }
                </span>
              </div>
              
              <div className="box-status-payment">
                <h4 className="subtitle">
                  Status Pagamento
                </h4>
                
                <span className={letter.status_payment? "box-success" : "box-error"}>
                  { letter.status_payment? "Pago" : "Não Pago" }
                </span>
              </div>
            </article>
            <hr className="separator"/>
            
            <article class="letter-details__style">
              <h3 className="subtitle">Detalhes do Estilo</h3>
              
              <div className="box-btn-edit">
                <button className="btn-warning">Editar</button>
              </div>
              
              <div>
                <h4 className="subtitle">
                  Tema
                </h4>
                
                <span>
                  { letter.theme }
                </span>
              </div>
              
              { letter.description && (
                <div className="box-description-style">
                  <h4 className="subtitle">
                    Descrição
                  </h4>
                  <span>
        
                    <center>{ letter.description }</center>
                  </span>
                </div>
                )
              }
            
              <div>
                <h4 className="subtitle">
                  Forma
                </h4>
                
                <span>
                  { letter.shape }
                </span>
              </div>
            
              <div>
                <h4 className="subtitle">
                  Cor
                </h4>
                
                <span>
                  { letter.color }
                </span>
              </div>
            </article>
            
            <hr className="separator"/>
            
            <article class="letter-details__recipient">
              <h3 className="subtitle">Detalhes do Recebedor</h3>
              
              <div className="box-btn-edit">
                <button className="btn-warning">Editar</button>
              </div>
              
              <div className="box-name-recipient">
                <h4 className="subtitle">
                  Nome Completo
                </h4>
                
                <span>
                  { letter.name }
                </span>
              </div>
              
              <div className="box-info-course">
                <select name="" id="serie">
                  <option 
                    value={letter.serie.toLocaleLowerCase()}
                  >
                    { letter.serie }
                  </option>
                </select>
                
                <select name="" id="">
                  <option 
                    value={letter.course.toLocaleLowerCase()}
                  >
                    { letter.course }
                  </option>
                </select>
                
                <select name="" id="">
                  <option 
                    value={letter.turn.toLocaleLowerCase()}
                  >
                    { letter.turn }
                  </option>
                </select>
              </div>
            </article>
            
            <hr className="separator"/>
            
            <article class="letter-details__body">
              <h3 className="subtitle">Corpo</h3>
              
              <div className="box-btn-edit">
                <button className="btn-warning">Editar</button>
              </div>
              
              <div className="box-message">
                <h4 className="subtitle">
                  Mensagem
                </h4>
                
                <span>
                  { letter.message }
                </span>
              </div>
              
              {
                letter.tips && (
                  <div className="box-tips">
                    <h4 className="subtitle">
                      Dica
                    </h4>
                    
                    <span>
                      { letter.tips }
                    </span>
                  </div>
                )
              }
            </article>
        
            <hr className="separator" color="black"/>
              
            <div className="box-btns-actions">
              <button
                className="btn btn-alert"
                onClick={() => {
                  if(confirm("Deseja realmente excluir?")) {
                    return navigator(`/admin/letters/payoff/${uid}`);
                  }
                }} 
              >
                  Deletar
              </button>

            </div>
          </section>
          </div>
          
          <div>
            <buttton 
              className="btn btn-handle-envelope" 
              title="Fechar/Abrir correio"
              onClick={() => document.querySelector('.envelope-content').classList.toggle('animate-envelope-toggle')}
            >
              ❤️
            </buttton>
          </div>
        </main>
      </div>
    );
};

export default Show;
