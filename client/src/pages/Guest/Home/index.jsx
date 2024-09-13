import Template from "../../../Layout/Template";

import "./styles.scss";

const Home = () => {
    return (
        <Template typeHeader="guest">


            <main className="app__main">

                <div
                    className={"separator-gradient"}
                >
                </div>
                <section className="section-welcome">
                    <article>
                        <h2 className="subtitle">Bem-vindo ao Correio Elegante! 💌</h2>

                        <p>
                            Neste universo mágico de palavras e sentimentos, você tem a
                            oportunidade de enviar mensagens anônimas repletas de carinho e
                            gentileza. Prepare-se para tocar corações e despertar sorrisos!
                        </p>
                    </article>

                    <button className="btn-send">Quero enviar o meu Correio</button>
                </section>

                <section className="section-about-catalogue">
                    <article>
                        <h2 className="subtitle">Confira Nosso Catálogo!</h2>

                        <p>
                            Dê uma olhada nos nossos serviços exclusivos do Correio Elegante!
                            Oferecemos uma variedade de opções para você expressar seus
                            sentimentos de maneira única e especial. Temos tudo para ajudá-lo
                            a demonstrar seu carinho.
                        </p>
                        <p>
                            Não perca tempo, explore nosso catálogo agora mesmo e encontre o
                            serviço perfeito para fazer o dia de alguém mais brilhante!
                        </p>
                    </article>

                    <button className="btn-view">Conferir agora!</button>
                </section>

                <section className="section-common section-report border-warning">
                    <article>
                        <h2 className="subtitle">Sua opinião é importante!</h2>

                        <p>
                            Caso queira reportar algum erro, sugestão ou qualquer problema,
                            não tema!
                        </p>
                        <p>
                            Basta apenas clickar no botão logo abaixo e reportar a questão.
                        </p>
                    </article>

                    <button className="btn btn-warning">
                        <i className="fi fi-rr-hexagon-exclamation"></i> Reportar!
                    </button>
                </section>
            </main>
        </Template>
    );
};

export default Home;
