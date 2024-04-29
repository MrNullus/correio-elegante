import { useState } from "react";

import "./style.css";

function FormCreateMensagem() {
    const [colorInput, setColorInput] = useState();

    return (
        <>
  

            <center className="envelope">
                <div className="envelope-content">
                    <h2 className="subtitle">Cartinha</h2>

                    <div className="form form-mensagem-create">
                        <form action="">
                            <div className="letter-details">
                                <h3 className="subtitle">
                                  Destinatario
                                </h3>
                                <label className="sr-only" htmlFor="recipientName">
                                    Nome do Destinatario
                                </label>
                                <input
                                    name="recipientName"
                                    className="input"
                                    type="text"
                                    placeholder="Nome da pessoa"
                                />
                            </div>

                            <div className="letter-details">
                                <div className="box-info-course">
                                    <label htmlFor="" className="sr-only">
                                        Serie
                                    </label>
                                    <select  name="serie" id="">
                                        <option value="1">1⁰</option>
                                        <option value="2">2⁰</option>
                                        <option value="3">3⁰</option>
                                    </select>
                                </div>

                                <div className="form-field">
                                    <label htmlFor="" className="sr-only">
                                        Curso
                                    </label>
                                    <select name="course" id="">
                                        <option value="">MTEC - ADM</option>
                                        <option value="">MTEC - INFO</option>
                                        <option value="">MTEC - LOG</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="" className="sr-only">
                                        Periodo
                                    </label>
                                    <select name="turn" id="">
                                        <option value="">Manhã</option>
                                        <option value="">Tarde</option>
                                    </select>
                                </div>
                            </div>

                            <hr className="separator" />

                            <div className="letter-details">
                            <h3 className="subtitle">
                                  Corpo
                                </h3>
                                
                              <label htmlFor="">Mensagem</label>
                                <textarea
                                    className="input"
                                    name=""
                                    id=""
                                    cols="30"
                                    rows="10"
                                ></textarea>
                            </div>

                            <div className="letter-details">
                                <label htmlFor="">Dica</label>
                                <textarea
                                    className="input"
                                    name=""
                                    id=""
                                    cols="5"
                                    rows="1"
                                    style={{ height: '30px' }}
                                ></textarea>
                            </div>

<hr className="separator"/>

                            <div className="letter-details">
                              <h3 className="subtitle">
                                  Estilo
                                </h3>
                                <label htmlFor="">Cor do Bilhete</label>
                                <input
                                    type="color"
                                    className="input"
                                    style={{ background: colorInput }}
                                    onChange={e =>
                                        setColorInput(e.target.value)
                                    }
                                />
                            </div>

                            <div className="letter-details">
                                <label
                                    htmlFor=""
                                    style={{ marginBottom: "0.6rem" }}
                                >
                                    Forma da cartinha
                                </label>
                                <div className="shape-selector">
                                    <input
                                        type="radio"
                                        id="shape1"
                                        name="styleShape"
                                        value="square"
                                    />
                                    <label htmlFor="shape1"></label>

                                    <input
                                        type="radio"
                                        id="shape2"
                                        name="styleShape"
                                        value="circle"
                                    />
                                    <label htmlFor="shape2"></label>

                                    <input
                                        type="radio"
                                        id="shape3"
                                        name="styleShape"
                                        value="triangle"
                                    />
                                    <label htmlFor="shape3"></label>

                                    <input
                                        type="radio"
                                        id="shape4"
                                        name="styleShape"
                                        value="heart"
                                    />
                                    <label htmlFor="shape4"></label>
                                </div>
                            </div>

<hr className="separator"/>

                            <div className="letter-details">
                                <h3 className="subtitle">
                                  Forma de Pagamento
                                </h3>
                                <label className="sr-only"  htmlFor="forma_pagamento">
                                    Forma de Pagamento
                                </label>
                                
                                <select
                                    name="methodPayment"
                                    id=""
                                    style={{
                                        width: "100%",
                                        marginTop: "0.6rem",
                                        
                                        color: "black"
                                    }}
                                >
                                    <option select value="Físico">
                                        Físico
                                    </option>
                                    <option value="Pix">Pix</option>
                                </select>
                            </div>
<br/>
                            <button className="btn btn-success">Enviar</button>
                        </form>
                    </div>
                </div>
            </center>

            <br />
            <br />
        </>
    );
}

export { FormCreateMensagem };
