import { useState, useEffect } from "react";
import Header from "../../../../components/Header/";

import "../../../../index.css";
import "./style.css";

const Create = () => {
  
  const [labelTitle, setLabelTitle] = useState({
    text: '',
    action:''
  })
  const [formValues, setFormValues] = useState({
    title: '',
    description: '',
    status: false,
  });

  const handleChangeForm = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  
  const handleSubmitForm = (event) => {
    event.preventDefault();

   if (formValues.title === '') {
     setLabelTitle({ text: "Campo de preenchimento obrigatorio.", action: "label-error"  })
   } else {
     setLabelTitle({ text: "", action: "" })
   }

    alert(formValues.title);
  };
  
  return (
    <div className="wrapper">
        <Header type="admin" />

        <main className="container">
          <h1 className="title">
            Criar Tipo de Correio
           </h1>
           
           <div className="form" id="box-form__type-letter-create">
              <form 
                className="form__type-letter-create"
                onSubmit={handleSubmitForm}>
                <div className="form-field">
                  <input 
                    type="text"
                    className="input"
                    placeholder="Titulo"
                    name="title"
                    onChange={handleChangeForm}
                  />
                  <label 
                    forHTML="" 
                    className={`
                      lblAlertTitle 
                      label-action  
                      ${labelTitle.action}
                      sr-only`}>
                      {labelTitle.text}
                    </label>
                </div>
                
                <div className="form-field">
                  <textarea 
                    name="description" 
                    placeholder="L"  
                    className="input"
                    id="" cols="30" rows="12"
                    onChange={handleChangeForm}
                  ></textarea>
                  
                  <label forHTML="" className="lblAlertDescription sr-only"></label>
                </div>
                
                <div className="form-field">
                  <select 
                    name="" 
                    id="" 
                    className="input"
                    onChange={handleChangeForm}
                  >
                    <option value="">
                      Ativo
                    </option>
                    <option value="">
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
