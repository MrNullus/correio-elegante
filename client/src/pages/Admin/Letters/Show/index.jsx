import { useState, useEffect } from "react";
//import axios from 'axios';

const Show = () => {
  const [letter, setLetter] = useState({
    // head informations
    head: {
      id: 1,
      uid: window.location.pathname.split("/")[4],
      created_at: "12/06/2024",
      updated_at: "12/06/2024",
      payment: { method: "PIX", status: true, price: "R$ 2,50" },
      type: "Normal",
    },

    // style informations
    style: {
      theme: "Estilizado",
      description: "Deve ter a imagem da Docinho",
      color: "green",
      shape: "heart",
    },

    // recipient informations
    recipient: {
      name: "Julia Motta",
      serie: "3",
      course: "MTec Adm",
      turn: "Manhã",
    },

    // body informations
    body: {
      message:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati a iusto eum, quos, quibusdam harum incidunt nisi expedita maiores veritatis.",
      tips: "Aquele Gustavo",
    },
  });

  return (
    <div className="wrapper">
      <main className="envelope">
        <h1 className="title">
          Cartinha: <enfase>#{letter.head.uid}</enfase>
        </h1>

        <div className="envelope-content">
          <section className="letter-details">
            <article className="letter-details__head">
              <h3 className="subtitle">Cabeçalho</h3>

              <div>
                <h4 className="subtitle">UID</h4>

                <span>{letter.head.uid}</span>
              </div>

              <div>
                <h4 className="subtitle">ID</h4>

                <span>{letter.head.id}</span>
              </div>

              <div>
                <h4 className="subtitle">Criada em</h4>

                <span>{letter.head.created_at}</span>
              </div>

              <div>
                <h4 className="subtitle">Atualizado em</h4>

                <span>{letter.head.updated_at}</span>
              </div>

              <div>
                <h4 className="subtitle">Tipo</h4>

                <span>{letter.head.type}</span>
              </div>

              <div className="box-btn-edit">
                <button className="btn-warning">Editar</button>
              </div>

              <div>
                <h4 className="subtitle">Preço</h4>

                <span>{letter.head.price}</span>
              </div>

              <div className="box-status-payment">
                <h4 className="subtitle">Método de Pagamento</h4>

                <span>{letter.head.payment.method}</span>
              </div>

              <div className="box-status-payment">
                <h4 className="subtitle">Status Pagamento</h4>

                <span
                  className={
                    letter.head.payment.status ? "box-success" : "box-error"
                  }
                >
                  {letter.head.payment.status ? "Pago" : "Não Pago"}
                </span>
              </div>
            </article>
            <hr className="separator" />

            <article className="letter-details__style">
              <h3 className="subtitle">Detalhes do Estilo</h3>

              <div className="box-btn-edit">
                <button className="btn-warning">Editar</button>
              </div>

              <div>
                <h4 className="subtitle">Tema</h4>

                <span>{letter.style.theme}</span>
              </div>

              {letter.style.description && (
                <div className="box-description-style">
                  <h4 className="subtitle">Descrição</h4>
                  <span>
                    <center>{letter.style.description}</center>
                  </span>
                </div>
              )}

              <div>
                <h4 className="subtitle">Forma</h4>

                <span>{letter.style.shape}</span>
              </div>

              <div>
                <h4 className="subtitle">Cor</h4>

                <span>{lette.style.color}</span>
              </div>
            </article>

            <hr className="separator" />

            <article className="letter-details__recipient">
              <h3 className="subtitle">Detalhes do Recebedor</h3>

              <div className="box-btn-edit">
                <button className="btn-warning">Editar</button>
              </div>

              <div className="box-name-recipient">
                <h4 className="subtitle">Nome Completo</h4>

                <span>{letter.recipient.name}</span>
              </div>

              <div className="box-info-course">
                <select name="" id="serie">
                  <option value={letter.recipient.serie}>
                    {letter.recipient.serie}
                  </option>
                </select>

                <select name="" id="">
                  <option value={letter.recipient.course}>
                    {letter.recipient.course}
                  </option>
                </select>

                <select name="" id="">
                  <option value={letter.recipient.turn}>
                    {letter.recipient.turn}
                  </option>
                </select>
              </div>
            </article>

            <hr className="separator" />

            <article className="letter-details__body">
              <h3 className="subtitle">Corpo</h3>

              <div className="box-btn-edit">
                <button className="btn-warning">Editar</button>
              </div>

              <div className="box-message">
                <h4 className="subtitle">Mensagem</h4>

                <span>{letter.body.message}</span>
              </div>

              {letter.body.tips && (
                <div className="box-tips">
                  <h4 className="subtitle">Dica</h4>

                  <span>{letter.body.tips}</span>
                </div>
              )}
            </article>

            <hr className="separator" color="black" />

            <div className="box-btns-actions">
              <button
                className="btn btn-alert"
                onClick={() => {
                  if (confirm("Deseja realmente excluir?")) {
                    alert("Excluido!");
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
            onClick={() => {
              document
                .querySelector(".envelope-content")
                .classList.toggle("animate-envelope-toggle");

              document
                .querySelector(".envelope")
                .classList.toggle("show-envelope-closed");
            }}
          >
            ❤️
          </buttton>
        </div>
      </main>
    </div>
  );
};

export default Show;
