import Header from "../Header";
import Footer from "../Footer";

const Template = ({ typeHeader, children }) => {
  return (
    <>
      <Header type={typeHeader} />

      {children}

      <Footer />
    </>
  );
};

export default Template;
