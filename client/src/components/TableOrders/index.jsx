import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import { actionRecentOrders } from './actions/recentOrders';
import { handleSearchOrder } from './handles/searchOrder.jsx';

import './style.css';

function TableOrders() {
  const navigator = useNavigate();
  const [ orders, setOrders ] = useState([]);
  const [labelActions, setLabelActions] = useState({
    searchOrder: { text: '', action: '' }
  });
  
  
  useEffect(() => {
    actionRecentOrders(orders, setOrders);
  }, []);
  
  
  return (
    <div className="box-table">
      <header>
        <h3>Confira os pedidos recentes</h3>
        
        <menu>
          <item className="search-order">
            <i 
              class="fas fa-search sr-only" 
              style={{ color: "#ffffff" }}></i>
          
            <input
              type="search" 
              name="searchOrder" 
              id="searchOrder"
              placeholder="Digite o UID"
              onChange={({ target }) => handleSearchOrder(target.value, orders, setOrders, labelActions, setLabelActions)}
            />
          </item>
          
          <item>
            <select name="selectNumberRows" id="selectNumberRows">
              <option value="10">10</option>
              <option value="30">30</option>
              <option value="50">50</option>
            </select>
          </item>
        </menu>
        
        <label 
          forHTML="searchOrder" 
          className={`
            lblAlertTitle 
            label-action  
            label-error
            ${ orders.length === 0? '' : 'sr-only'  }
          `}>
            Correio não encontrado! 
        </label>
      </header>
      
      
      <table cellspacing="3px">
        <thead>
          <tr>
            <th style={{ 
              border : '1px solid black',
              borderRight: '1px solid',
              color  : 'white',
              background : 'black'
            }}>
              UID
            </th>
            
            <th style={{ 
              border : '1px solid black', 
              color  : 'white',
              background : 'black'
            }}>
              Tipo
            </th>
            
            <th style={{ 
              border : '1px solid white', 
              color  : 'white',
              background : 'white'
            }}></th>
          </tr>
        </thead>
        
        <tbody>
        {
          orders.map(({ uid, type }, index) => (
            <tr key={index}>
              <td><strong>{ uid }</strong></td>
              <td>{ type }</td>
              
              <th colspan="5">
                <button 
                  onClick={() => navigator(`/admin/letters/show/${uid}`)} 
                >
                  <i 
                    class="fa-solid fa-eye" 
                    style={{ color: "#ff0055" }}></i>
                </button>
                
                <hr className="separator" color="white"/>
                
                <button
                  onClick={() => navigator(`/admin/letters/payoff/${uid}`)} 
                >
                  <i 
                    class="fa-solid fa-envelope-circle-check" 
                    style={{ color: "#63E6BE" }}></i>
                </button>
              </th>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  );
}

export { TableOrders };