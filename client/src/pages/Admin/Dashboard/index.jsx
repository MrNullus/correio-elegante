import { useState, useEffect } from "react";
//import axios from 'axios';

import { TableOrders } from "../../../components/TableOrders";
import { SectionPreviewOrderStatistics } from "../../../components/SectionPreviewStatistics/";
import { SectionQuickActions } from "../../../components/SectionQuickActions/";

const Dashboard = () => {
  return (
    <div className="wrapper">
      <main className="dashboard">
        <section className="dash-content">
          <div className="boxes">
            <article className="box box-success">
              <span className="box__title">Quantidade de Pedidos</span>

              <p>12</p>
            </article>

            <article className="box box-success">
              <span className="box__title">Lucro</span>

              <p>R$ 54, 00</p>
            </article>

            <article className="box box-alert">
              <span className="box__title">Gastos</span>

              <p>R$ 67, 00</p>
            </article>
          </div>
        </section>

        <hr className="separator" />

        <section className="dash-content">
          <h2 className="dash-content__title">Novos Pedidos</h2>

          <TableOrders />
        </section>

        <hr className="separator" />

        <SectionQuickActions />

        <hr className="separator" />

        <SectionPreviewOrderStatistics />
      </main>
    </div>
  );
};

export default Dashboard;
