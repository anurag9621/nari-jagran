import React from "react";
import Bookself from "../../../../Image/trump.jpg";
import Tem from "../../../../Image/tem.jpg";
import { Link } from "react-router-dom";
import Covid from "../../../../Image/covid.jpg";
import Cononal from "../../../../Image/cononal.jpg";

function Newsx() {
  return (
    <>
        <div className="headeing-news">NEWS</div>
      <br/>
      <div className="news_news_box_home_home">
        <div className="card card11">
          <img src={Bookself} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              <samp style={{
                fontSize: "1.5rem",
                fontFamily: "'Castoro', serif",
                fontWeight:"600"
              }}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </samp>
              <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
              rem quo nostrum ab? Ullam expedita magni, blanditiis atque esse
              eius laboriosam, fugiat facere earum dicta commodi totam dolorem
              in tenetur ab! Doloribus repudiandae dignissimos facilis aut
              distinctio omnis sunt esse assumenda earum, obcaecati, asperiores
              accusamus. Vero perferendis odit nemo temporibus. Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Alias odio fuga quas
              sunt reiciendis perspiciatis sit molestiae tempora nihil nobis?
            </p>
          </div>
        </div>
        <hr/>
        <div className="box-news-one">
          <div className="card mb-3 card12">
            <div className="row no-gutters">
              <div className="col-md-4  photo-center-pe">
                <img src={Bookself} className="card-img" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3 card12">
            <div className="row no-gutters">
              <div className="col-md-4 photo-center-pe">
                <img src={Bookself} className="card-img" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3 card12">
            <div className="row no-gutters">
              <div className="col-md-4 photo-center-pe">
                <img src={Bookself} className="card-img" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3 card12">
            <div className="row no-gutters">
              <div className="col-md-4 photo-center-pe">
                <img src={Bookself} className="card-img" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <div className="box-rightlast">
          <div className="card  mb-3">
            <div className="card-body text-dark">
              <h5 className="card-title">Dark card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card  mb-3">
            <div className="card-body text-dark">
              <h5 className="card-title">Dark card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card  mb-3">
            <div className="card-body text-dark">
              <h5 className="card-title">Dark card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card  mb-3">
            <div className="card-body text-dark">
              <h5 className="card-title">Dark card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Newsx;
