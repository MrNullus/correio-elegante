// import { FormCreateMensagem } from "../../../components/FormCreateMensagem";
import Template from "../../../Layout/Template";
import './style.scss';
import { useState } from "react";

const CreateMyLetter = () => {
    return (
        <Template typeHeader="guest">
            <main className="app__main">

                <div
                    className={ "separator-gradient" }
                >
                </div>


                 <header className="app__header app__header-subtitle">
                        <h2 className="title logo-text">
                            Criar meu Correio
                        </h2>
                    </header>

                <section className="container-envelope">
                    <article className="envelope">
                        <div className="paper">
                            <form className="form__letter-create">
                                <div className="letter-details">
                                    <h3 className="subtitle">
                                        Destinatario
                                    </h3>
                                    <label className="sr-only" htmlFor="recipientName">
                                        Nome do Destinatario
                                    </label>
                                    <input
                                        id="recipientName"
                                        name="recipientName"
                                        className="input"
                                        type="text"
                                        placeholder="Nome da pessoa"
                                    />
                                </div>

                                <div className="letter-details">
                                    <div className="box-info-course">
                                        <label htmlFor="serie" className="sr-only">
                                            Serie
                                        </label>
                                        <select name="serie" id="serie-select">
                                            <option value="1">1⁰</option>
                                            <option value="2">2⁰</option>
                                            <option value="3">3⁰</option>
                                        </select>
                                    </div>

                                    <div className="form-field">
                                        <label htmlFor="course" className="sr-only">
                                            Curso
                                        </label>
                                        <select name="course" id="course-select">
                                            <option value="mtec_adm">MTEC - ADM</option>
                                            <option value="mtec_info">MTEC - INFO</option>
                                            <option value="mtec_log">MTEC - LOG</option>
                                            <option value="mtec_mkt">MTEC - MKT</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="turn" className="sr-only">
                                            Periodo
                                        </label>
                                        <select name="turn" id="turn-select">
                                            <option value="">Manhã</option>
                                            <option value="">Tarde</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="letter-details">
                                    <div className="separator"></div>
                                </div>

                                <div className="letter-details">
                                    <h3 className="subtitle">
                                        Corpo
                                    </h3>

                                    <div className="details-inner">
                                        <label htmlFor="" className="sr-only">Mensagem</label>
                                        <textarea
                                            className="input"
                                            name=""
                                            id=""
                                            cols="30"
                                            rows="10"
                                            placeholder="Escreva o que deseja..."
                                        ></textarea>
                                    </div>


                                    <div className="details-inner">
                                        <label htmlFor="" className="sr-only">Dica</label>
                                        <textarea
                                            className="input"
                                            name=""
                                            id=""
                                            cols="5"
                                            rows="1"
                                            placeholder="Dica"
                                        ></textarea>
                                    </div>
                                </div>

                                <div className="letter-details">
                                    <div className="separator"></div>
                                </div>

                                <div className="letter-details">
                                    <h3 className="subtitle">
                                        Estilo
                                    </h3>

                                    <div className="details-inner">
                                        <label htmlFor="">Cor do Bilhete</label>

                                        <select name="color" id="color-select">
                                            <option value="black">Preto</option>
                                            <option value="red">Vermelho</option>
                                        </select>

                                    </div>

                                    <div className="details-inner">
                                        <label
                                            htmlFor=""
                                            style={ { marginBottom : "0.6rem" } }
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
                                </div>
                            </form>
                        </div>
                    </article>
                </section>
            </main>
        </Template>
    );
};

export default CreateMyLetter;
