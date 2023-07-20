import Header from "../Header";
import Footer from "../components/Footer";

const Layout = (props) => {
  return (
    <>
      <Header />
      {props.children}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
