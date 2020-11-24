import React from "react";
import Top from "../../Pages/Component/Layout/Header/Common-header";
import Footer from "../../Pages/Component/Layout/Footer";
import Sidebar from "../../Pages/Component/Layout/Sidebar";
import Menu from "../../Pages/Component/Layout/Menu";
import CommonHercon from "../../Pages/Component/Container/Herright";
const Herright = () => {
  return (
    <>
      <Top />
      <CommonHercon />
      <Menu />

      <Footer />
      <Sidebar />
    </>
  );
};
export default Herright;
