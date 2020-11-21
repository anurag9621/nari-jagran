import React from "react";
import Top from "../../Pages/Component/Layout/Header/Common-header";
import Footer from "../../Pages/Component/Layout/Footer";
import Sidebar from "../../Pages/Component/Layout/Sidebar";
import Menu from "../../Pages/Component/Layout/Menu";
import Homex from "../../Pages/Component/Container/Homex";
import Newsa from "../../Pages/Component/Container/News/Common-news-a"
import Slider from "../../Pages/Component/Layout/Slider"
const Home = () => {
  return (
    <>
      <Top />
      <Homex />
      <Newsa />
      <br/>
      <Slider/>
      <Menu />
      <Footer />
      <Sidebar />
    </>
  );
};
export default Home;
