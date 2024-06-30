import { FormCreateMensagem } from "../../../components/FormCreateMensagem";
import Template from "../../../Layout/Template";

//import './style.scss';

const CreateMyLetter = () => {
  return (
    <Template typeHeader="guest">
      <div className="wrapper create-my-mail">
        <main>
          <section className="welcome">
            <h2 className="title font-manuscrit">Liberte seus pensamentos!</h2>

            <p>
              <i>Garantimos total anonimato e criptografia.</i>
            </p>
          </section>

          <FormCreateMensagem />
        </main>
      </div>
    </Template>
  );
};

export default CreateMyLetter;
