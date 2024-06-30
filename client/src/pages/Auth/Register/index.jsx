import { useNavigate } from "react-router-dom";

import axios from "axios";
import { useState } from "react";

//import './style.scss';

const Register = () => {
  const navigate = useNavigate();
  const baseURLUsers = "localhost:3000/api/correio-elegante/user";

  const [formValues, setFormValues] = useState({
    name: "",
    nickname: "",
    email: "",
    password: "",
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

    axios.get(baseURLUsers).then((response) => {
      console.log("====================================");
      console.log(response.data);
      console.log("====================================");
    });
  };

  console.log("====================================");
  console.log(formValues);
  console.log("====================================");

  return (
    <Template typeHeader="guest">
      <main>
        <center>
          <section className="hero-register">
            <div></div>
          </section>
        </center>

        <center>
          <div className="overflow">
            <h2 className="title">Register</h2>

            <div className="form form-register">
              <form method="POST" onSubmit={handleSubmitForm}>
                <div className="form-field">
                  <input
                    type="email"
                    name="name"
                    id="name"
                    className="input"
                    placeholder="Name"
                    onChange={handleChangeForm}
                  />
                  <label id="lblErroName"></label>
                </div>

                <div className="form-field">
                  <input
                    type="text"
                    name="nickname"
                    id="nickname"
                    className="input"
                    placeholder="Nickname"
                    onChange={handleChangeForm}
                  />
                  <label id="lblErroNickname"></label>
                </div>

                <div className="form-field">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="input"
                    placeholder="Email"
                    onChange={handleChangeForm}
                  />
                  <label id="lblErroEmail"></label>
                </div>

                <div className="form-field">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="input"
                    placeholder="Senha"
                    onChange={handleChangeForm}
                  />
                  <label id="lblErroSenha"></label>
                </div>

                <center>
                  <button className="btn">Cadastrar-se</button>
                </center>

                <center>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/auth/login");
                    }}
                    className="btn btn-login"
                  >
                    Entrar
                  </button>
                </center>
              </form>
            </div>
          </div>
        </center>
      </main>
    </Template>
  );
};

export default Register;
