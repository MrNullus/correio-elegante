
const Dashboard = () => {


    return (
        <div className="wrapper">
            <aside className="sidebar">
                <button className="btn-toggle-sidebar">
                    X
                </button>

                <ul className="sidebar-list-links">
                    <li className="item-link">
                        Home
                    </li>
                    <li className="item-link">
                        Cartinhas
                    </li>
                </ul>
            </aside>

            <main className="dashboard">
                <section className="dash-content">
                    <div className="boxes">
                        <article className="box">
                            <span className="box__title"
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
                            </san>

                            R$ 67, 00
                        </article>
                    </div>
                </section>

                <hr className="separator" />

                <section className="dash-content">
                    <h2 className="dash-content__title">Novos Pedidos</h2>

                    Tabela com pedidos mais recentes
                </section>
            </main>
        </div>

    );
};

export { Dashboard };

