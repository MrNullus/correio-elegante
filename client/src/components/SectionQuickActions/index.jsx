/*import { VscGroupByRefType } from "react-icons/vsc";
import { FaEarListen } from "react-icons/fa6";
import { MdEditDocument } from "react-icons/md";
import { MdPayments } from "react-icons/md";
import { RiDiscussFill } from "react-icons/ri";
import { LuContainer } from "react-icons/lu";
import { RiInboxArchiveFill } from "react-icons/ri";
import { RiInboxUnarchiveFill } from "react-icons/ri";
*/

import { Link } from "react-router-dom";
import './style.css';

const SectionQuickActions = () => {
  
  return (
    
    <section className="dash-actions">
      <h2 className="dash-content__title">
        Ações Rápidas
      </h2>
      
      <div className="boxes">
        <div className="box">
          <i class="fa fa-envelope" aria-hidden="true"></i>
          
          <span>
            <Link to="/admin/type-letter/create">
              Novo Tipo de Correio
            </Link>
          </span>
        </div>
      
        <div className="box">
          <i class="fa fa-pencil" aria-hidden="true"></i>
        
          <span>
            <Link to="/admin/letters/search">
              Editar Correio
            </Link>
          </span>
        </div>
        
        <div className="box">
          <i class="fa-solid fa-cash-register"></i>
        
          <span>
            <Link to="/admin/letters/search">
              Quitar Correio
            </Link>
          </span>
        </div>
        
        <div className="box">
          <i class="fa fa-inbox" aria-hidden="true"></i>
        
          <span>
            <Link to="/admin/material/call/create">
              Solicitar Material
            </Link>
          </span>
        </div>
        
        <div className="box">
          <i class="fa fa-archive" aria-hidden="true"></i>
        
          <span>
            <Link to="/admin/material/entry/create">
              Entrada Material
            </Link>
          </span>
        </div>
        
        <div className="box">
          <i class="fa fa-archive fa-archive-out" aria-hidden="true"></i>
        
          <span>
            <Link to="/admin/material/out/create">
              Saída Material
            </Link>
          </span>
        </div>
        
        <div className="box">
          <i class="fa fa-comments" aria-hidden="true"></i>
          
          <span>
            <Link to="/admin/call-ti/create">
              Chamado TI
            </Link>
          </span>
        </div>
      </div>
    </section>
  
  );
  
};

export { SectionQuickActions };