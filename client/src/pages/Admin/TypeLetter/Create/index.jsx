import { useState, useEffect } from "react";

import { handleSubmitForm } from "../handles/create/handleSubmitForm";
import { handleChangeForm } from "../handles/global/handleChangeForm";

import Header from "../../../../components/Header/";

import "./style.css";


const Create = () => {
  
  const [labelActions, setLabelActions] = useState({
    title: { text: '', action: '' },
    description: { text: '', action: '' }
  });
  const [formValues, setFormValues] = useState({
    title: '',
    description: '',
    status: false,
  });
  

  return (
    <div className="wrapper">
        <Header type="admin" />

        <main className="container">
          <h1 className="title">
            Criar Tipo de Correio
           </h1>
           
           <div className="form" id="box-form__type-letter-create">
              <form 
                method="post"
                className="form__type-letter-create"
                onSubmit={( event ) => handleSubmitForm(event, formValues, setLabelActions) }>
                <div className="form-field">
                  <input 
                    type="text"
                    className="input"
                    placeholder="Titulo"
                    name="title"
                    onChange={ (event) => handleChangeForm(event, setFormValues) }
                  />
                  <label 
                    forHTML="title" 
                    className={`
                      lblAlertTitle 
                      label-action  
                      ${labelActions.title.action}
                      sr-only`}>
                      {labelActions.title.text}
                    </label>
                </div>
                
                <div className="form-field">
                  <textarea 
                    name="description" 
                    placeholder="Descrição do novo tipo do correio..."  
                    className="input"
                    id="" cols="30" rows="12"
                    onChange={ (event) => handleChangeForm(event, setFormValues) }
                  ></textarea>
                  
                  <label 
                    forHTML="description" 
                    className={`
                      lblAlertTitle 
                      label-action  
                      ${labelActions.description.action}
                      sr-only`}>
                      {labelActions.description.text}
                    </label>
                </div>
                
                <div className="form-field">
                  <select 
                    name="status" 
                    id="status_type_letter" 
                    className="input"
                    onChange={ handleChangeForm }
                  >
                    <option value="true">
                      Ativo
                    </option>
                    <option value="false">
                      Inativo
                    </option>
                  </select>
                </div>
                
                <center>
                  <button 
                    className="btn btn-success">
                    Criar
                  </button>
                </center>
             </form>
           </div>
        </main>
    </div>
  );
};

export default Create;
