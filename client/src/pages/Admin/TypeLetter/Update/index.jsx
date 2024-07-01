import { useState, useEffect } from "react";

import { handleSubmitForm } from "../handles/update/handleSubmitForm";
import { handleChangeForm } from "../handles/global/handleChangeForm";

const Update = () => {
  const [type_letter, setTypeLetter] = useState({
    id: window.location.pathname.split("/")[4],
    title: "Correio Básico",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    status: true,
  });
  const [labelActions, setLabelActions] = useState({
    title: { text: "", action: "" },
    description: { text: "", action: "" },
  });
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    status: false,
  });

  useEffect(() => {
    setFormValues({
      title: type_letter.title,
      description: type_letter.description,
      status: type_letter.status,
    });
  }, []);

  return (
    <div className="wrapper">
      <main className="container">
        <h1 className="title">Atualizar Tipo de Correio</h1>

        <div className="form" id="box-form__type-letter-update">
          <form
            method="patch"
            className="form__type-letter-create"
            onSubmit={(event) =>
              handleSubmitForm(event, formValues, setLabelActions)
            }
          >
            <div className="form-field">
              <input
                type="text"
                className="input"
                placeholder="Titulo"
                name="title"
                value={formValues.title}
                onChange={(event) => handleChangeForm(event, setFormValues)}
              />
              <label
                forHTML="title"
                className={`
                      lblAlertTitle 
                      label-action  
                      ${labelActions.title.action}
                      sr-only`}
              >
                {labelActions.title.text}
              </label>
            </div>

            <div className="form-field">
              <textarea
                name="description"
                placeholder="Descrição do novo tipo do correio..."
                className="input"
                id=""
                cols="30"
                rows="12"
                onChange={(event) => handleChangeForm(event, setFormValues)}
                value={formValues.description}
              >
                {formValues.description}
              </textarea>

              <label
                forHTML="description"
                className={`
                      lblAlertTitle 
                      label-action  
                      ${labelActions.description.action}
                      sr-only`}
              >
                {labelActions.description.text}
              </label>
            </div>

            <div className="form-field">
              <select
                name="status"
                id="status_type_letter"
                className="input"
                onChange={(event) => handleChangeForm(event, setFormValues)}
              >
                {[
                  { text: "Ativo", value: true },
                  { text: "Inativo", value: false },
                ].map((option, index) => (
                  <option
                    key={index}
                    value={option.value}
                    checked={
                      option.value === formValues.status ? "true" : "false"
                    }
                  >
                    {option.text}
                  </option>
                ))}
              </select>
            </div>

            <center>
              <button className="btn btn-success">Atualizar</button>
            </center>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Update;
