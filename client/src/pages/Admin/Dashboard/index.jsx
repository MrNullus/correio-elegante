import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../../components/Header';


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

            <aside className="sidebar">
                <button className="btn-toggle-sidebar">
                    X
                </button>

                <ul className="sidebar-list-links">
                    <li className="item-link">
                        <a href="">Home</a>
                    </li>
                    <li className="item-link">
                        <a href="">Pedidos</a>
                    </li>
                </ul>
            </aside>

            <main className="dashboard">
                <section className="dash-content">
                    <div className="boxes">
                        <article className="box">
                            <span className="box__title">
                                Quantidade de Pedidos
                            </span>

                            12
                        </article>

                        <article className="box">
                            <span className="box__title">
                                Lucro
                            </span>

                            R$ 54, 00
                        </article>

                        <article className="box">
                            <span className="box__title">
                                Gastos
                            </span>

                            R$ 67, 00
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

