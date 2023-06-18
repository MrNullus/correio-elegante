import React from 'react';
import Header from '../components/Header';
import { FormCreateMensagem } from '../components/FormCreateMensagem';

const Home = () => {
  return (
    <>
      <main>
        <Header />

        <FormCreateMensagem />
      </main>
    </>
  );
};

export default Home;