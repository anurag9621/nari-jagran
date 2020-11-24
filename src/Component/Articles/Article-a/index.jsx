import React from "react";
import Top from "../../../Pages/Component/Layout/Header";
import Menu from "../../../Pages/Component/Layout/Menu";
import Footer from "../../../Pages/Component/Layout/Footer";
import Sidebar from "../../../Pages/Component/Layout/Sidebar";
import Article from "../../../Pages/Component/Container/Article/Common-article-theam"
const Articlea = () => {
  return (
    <>
      <Top />
      <Article/>
      <Menu />
      <Footer />
      <Sidebar />
    </>
  );
};

export default Articlea;
