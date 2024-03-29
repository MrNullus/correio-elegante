import { useState, useEffect } from "react";

import Header from "../../../../components/Header/";

import "../../../../index.css";
import "./style.css";


const Show = () => {
  const [typeLetter, setTypeLetter] = useState({
    id: window.location.pathname.split('/')[4],
    title: "Correio Básico",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    createdAt: "12/04/2024",
    updateAt: "12/05/2024",
    status: true,
  });
  
  
  return (
    <div className="wrapper">
        <Header type="admin" />
        <center>
        <main className="container type-letter-show">
          <header className="dash-header">
            <h1 className="title">
              Tipo de Correio
            </h1>  
            
            <div className="box-btns">
              <button 
                className="btn btn-success"
                onClick={() => {
                  if (confirm("Deseja realmente excluir?")) {
                    alert("Teu cu");
                  }
                }}
              >
                Editar
              </button>
              <span>
                |
              </span>
              <button 
                className="btn btn-alert"
                onClick={() => {
                  if (confirm("Deseja realmente excluir?")) {
                    alert("Teu cu");
                  }
                }}
              >
                Excluir
              </button>
            </div>
          </header>
          
           <section className="dash-container">
              <article className="dash-content">
                <h4 className="subtitle">Título</h4>
                <p>
                  { typeLetter.title }
                </p>
              </article>
              
              <article className="dash-content">
                <p>
                  { typeLetter.description }
                </p>
              </article>
              
              <article className="dash-content">
                <h4 className="subtitle">Criado em</h4>
                <p>
                  { typeLetter.createdAt }
                </p>
              </article>
            
              <article className="dash-content">
                <h4 className="subtitle">Atualizado em</h4>
                <p>
                  { typeLetter.updateAt }
                </p>
              </article>
              
              <article className="dash-content">
                <h4 className="subtitle">Status</h4>
                <p className="label-action label-success">
                  { typeLetter.status? "Ativo" : "Inativo" }
                </p>
              </article>
           </section>
        </main>
        </center>
    </div>
  );
};

export default Show;
