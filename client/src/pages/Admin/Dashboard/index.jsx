import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../../components/Header';

import './style.css';

const Dashboard = () => {
    const [listMessage, setListMessage] = useState([]);

  /*
    useEffect(() => {
        axios
            .get('http://localhost:3000/api/correio-elegante')
            .then((response) => {
               console.log(response.data[0]);
               const dataResponse = response.data[0];

                setListMessage(dataResponse);

                console.log(listMessage);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
  */

    console.log(listMessage);

    return (
        <div className="wrapper">
          <Header type="admin" />

            <main className="dashboard">
                <section className="dash-content">
                    <div className="boxes">
                        <article className="box">
                            <span className="box__title">
                                Quantidade de Pedidos
                            </span>

                          <p>12</p>
                        </article>

                        <article className="box">
                            <span className="box__title">
                                Lucro
                            </span>

                          <p>R$ 54, 00</p>
                        </article>

                        <article className="box">
                            <span className="box__title">
                                Gastos
                            </span>

                          <p>R$ 67, 00</p>
                        </article>
                    </div>
                </section>

                <hr className="separator" />

                <section className="dash-content">
                    <h2 className="dash-content__title">Novos Pedidos</h2>

                    Tabela com pedidos mais recentes
                </section>

                <hr className="separator" />

                <section className="dash-estatistics">
                    <h2 className="dash-content__title">
                        Estátisticas
                    </h2>

                    <article>
                        <div>
                            <h3 className="dash-content__subtitle">
                                Gastos por més
                            </h3>

                            <div>
                                Chart
                            </div>
                        </div>
                    </article>

                    <article>
                        <div>
                            <h3 className="dash-content__subtitle">
                                Gastos por més
                            </h3>

                            <div>
                               Chart
                            </div>
                        </div>
                    </article>
                </section>
            </main>
        </div>

    );
};

export default Dashboard;

