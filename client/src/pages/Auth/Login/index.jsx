import { useNavigate } from "react-router-dom";

import Template from "../../../Layout/Template";
//import "./style.scss";

const Login = () => {
  const navigate = useNavigate();

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
            <h2 className="title">Login</h2>

            <div className="form form-login">
              <form action="/user/login">
                <div className="form-field">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="input"
                  />
                  <label id="lblErroEmail"></label>
                </div>

                <div className="form-field">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="input"
                  />
                  <label id="lblErroSenha"></label>
                </div>

                <center>
                  <button className="btn">Entrar</button>
                </center>
                <center>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/auth/register");
                    }}
                    className="btn btn-sigup"
                  >
                    Cadastrar-se
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

export default Login;
