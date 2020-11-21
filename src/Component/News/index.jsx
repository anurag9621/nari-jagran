import React from "react"
import Top from "../../Pages/Component/Layout/Header/Common-header";
import Footer from "../../Pages/Component/Layout/Footer";
import Sidebar from "../../Pages/Component/Layout/Sidebar";
import Menu from "../../Pages/Component/Layout/Menu";
import Slider from "../../Pages/Component/Layout/Slider";
import Newsa from "../../Pages/Component/Container/News/Common-news-a"
import Temps from "../../Pages/Component/Container/News"
const News = () => {
    return (
        <>

            <Top />
            <Slider />
            <Newsa />
            <Temps/>
            <Menu /> 
            <Footer />
            <Sidebar/>
            

            </>
    )
}
export default News;