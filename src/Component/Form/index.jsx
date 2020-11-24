import React from "react";
import Top from "../../Pages/Component/Layout/Header/Common-header";
import Footer from "../../Pages/Component/Layout/Footer";
import Sidebar from "../../Pages/Component/Layout/Sidebar";
import Menu from "../../Pages/Component/Layout/Menu";
const Form = () => {
  return (
    <>
          <Top />
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <form action="/compose" method="post" >
        <div class="form-group">
          <label for="">Title</label>
          <input
            class="form-control"
            id="exampleInputEmail1"
            type="text"
            name="postTitle"
          />
        </div>
        <div class="form-group">
          <label for="">Post</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            name="postBody"
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary">
          Publish
        </button>
      </form>
      <Menu />
      <Footer />
      <Sidebar />
    </>
  );
};
export default Form;
