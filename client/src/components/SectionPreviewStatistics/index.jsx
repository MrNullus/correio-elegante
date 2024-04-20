import { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";
import './style.css';

const SectionPreviewOrderStatistics = () => {
  
  const [data, setData] = useState([]);


  return (
    <section className="dash-estatistics">
      <h2 className="dash-content__title">
        Estátisticas
      </h2>

      <article>
        <h3 className="dash-content__subtitle">
          Desempenho de Entregas
        </h3>
      
        <details style={{
          overflow: 'scroll',
        }}>
          <sumary>
          </sumary>
          
          <Chart
            chartType="Line"
            data={
              [
                ['Data', 'Entregues', 'Atrasados'],
                ['2023-03-01', 100, 10],
                ['2023-03-02', 120, 8],
                ['2023-03-03', 110, 12],
                ['2023-03-04', 130, 5],
                ['2023-03-05', 140, 7],
              ]
            }
            options={
              {
                title: 'Desempenho de Entregas',
                  width: 900,
                  height: 450,
                  series: {
                    0: { axis: "Data" },
                    1: { axis: "Quantidade" },
                  },
                  axes: {
                    y: {
                      Datas: { label: "Data" },
                      Quantidades: { label: "Quantidade" },
                    },
                  },
              }
            }
          />
        </details>
      </article>
      
      <article>
        <h3 className="dash-content__subtitle">
          Comparação de Ganhos e Gastos
        </h3>
      
        <details style={{
          overflow: 'auto',
        }}>
          <sumary>
          </sumary>
          
          <Chart
            chartType="PieChart"
            data={
              [
                ['Categoria', 'Valor (R$)'],
                ['Ganhos', 20],
                ['Gastos', 15],
              ]
            }
            width="400px"
            height="300px"
            options={{
              title: 'Comparação de Ganhos e Gastos',
              legend: { position: 'bottom' },
              pieHole: 0.4,
              slices: [
                { color: '#008000' }, // Ganhos (green)
                { color: '#FF0000' }, // Gastos (red)
              ],
              is3D: true,
            }}
          />

        </details>
      </article>
      
      <article>
        <h3 className="dash-content__subtitle">
          Tipos de Correios mais vendidos (ûltimo trimestre)
        </h3>
      
        <details style={{
          overflow: 'auto',
        }}>
          <sumary>
          </sumary>
          
          <Chart
            chartType="AreaChart"
            width="100%"
            height="400px"
            data={
              [
                ["Year", "Sales", "Expenses"],
                ["2013", 1000, 400],
                ["2014", 1170, 460],
                ["2015", 660, 1120],
                ["2016", 1030, 540],
              ]
            }
            options={
              {
                title: "Correios mais Vendidos",
                hAxis: { title: "Trimestre", titleTextStyle: { color: "#333" } },
                vAxis: { minValue: 0 },
                chartArea: { width: "50%", height: "70%" },
              }
            }
          />
        </details>
      </article>
    </section>
  );
  
};


export { SectionPreviewOrderStatistics };