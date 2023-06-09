import { useState } from 'react';

import Header from './components/Header';
import FormCreateMensagem from './components/FormCreateMensagem';
import './App.css';

function App() {
  const [colorInput, setColorInput]  = useState();

  return (
    <>
      <main>
        <Header />

        <FormCreateMensagem />        


      </main>
    </>
  );
}

export default App;
 