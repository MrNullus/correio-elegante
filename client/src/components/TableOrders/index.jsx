import { useState, useEffect } from 'react';


function TableOrders() {
  const [ orders, setOrders ] = useState([]);
  
  
  useEffect(() => {
    function actionRecentOrders() {
      const order = {
          uid    : "11A30B1",
          type   : "Cartinha Comun"
      };
      
      setOrders([...orders, order]);
    }
    
    actionRecentOrders();
  }, []);
  
  return (
    <div className="box-table">
      <header>
        <h3>Confira os pedidos recentes</h3>
        
        <menu>
          <item>
            <select name="selectNumberRows" id="selectNumberRows">
              <option value="10">10</option>
              <option value="30">30</option>
              <option value="50">50</option>
            </select>
          </item>
          
          <item>
            <input 
              type="search" 
              name="searchOrder" 
              id="searchOrder"
              placeholder="O que proucura?"
            />
          </item>
        </menu>
      </header>
      
      <table cellpadding="12px" cellspacing="2px">
        <thead>
          <tr>
            <th>UID</th>
            <th>Tipo</th>
          </tr>
        </thead>
        
        <tbody>
        {
          orders.map(({ uid, type }) => (
            <tr>
              <td>{ uid }</td>
              <td>{ type }</td>
              
              <th colspan="5">
                <button>
                  <i 
                    class="fa-solid fa-eye" 
                    style={{ color: "#ff0055" }}></i>
                </button>
                
                <hr className="separator"/>
                
                <button>
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