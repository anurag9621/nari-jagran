import React, { Component } from "react";
import CommonA from "./Common-a-home";
import Global from "../../../Image/s2.jpg";
import Persevering from "../../../Image/kishwar-kaniz-shy-bride.jpg";
import Womenpoewr from "../../../Image/Women-Power.jpg";
import Social from "../../../Image/pppp.jpg";

export class Homexx extends Component {
  render() {
    return (
      <div>
        <div className="welcome">
          <ul>
            <li>
              <h1>Lorem, ipsum.</h1>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                repellat veniam impedit quo eaque incidunt recusandae
                aspernatur! Omnis excepturi, explicabo, non minima pariatur id
                veritatis, reiciendis magnam ullam mollitia magni commodi
                beatae. Beatae quis, ipsum minima aliquam explicabo quia qui ut
                voluptatibus sed dolores commodi doloribus sunt iusto dolorum
                sequi, repudiandae nesciunt provident expedita eaque quibusdam
                neque alias ad placeat. Consectetur ullam optio asperiores
                perferendis! Enim, molestias. Autem dolor, quisquam reiciendis
                vel reprehenderit sed veritatis. Illum fugit quasi harum minima!
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit, natus dolore corrupti tempore itaque in ipsa
                temporibus quaerat neque odit minus quos voluptatibus,
                repellendus explicabo a, inventore dolores assumenda! Illum.
              </p>
            </li>
            <li>
              <div className="container"></div>
            </li>
          </ul>
        </div>
        <br />
        <br />
        <CommonA
          link1="/page"
          img1={Global}
          link1a="/page"
          head1=" lorem "
          contant1="Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
          repellat veniam impedit quo eaque incidunt recusandae
          aspernatur! Omnis excepturi, explicabo, non minima pariatur id
          veritatis, reiciendis magnam ullam mollitia magni commodi
          beatae. Beatae quis, ipsum minima aliquam explicabo quia qui ut
          voluptatibus sed dolores commodi "
          link2="/page"
          img2={Persevering}
          link2a="/page"
          head2="lorem imsom etc"
          contant2="Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
          repellat veniam impedit quo eaque incidunt recusandae
          aspernatur! Omnis excepturi, explicabo, non minima pariatur id
          veritatis, reiciendis magnam ullam mollitia magni commodi
          beatae. Beatae quis, ipsum minima aliquam explicabo quia qui ut
          voluptatibus sed dolores commodi "
        />
        <CommonA
          link1="/page"
          img1={Womenpoewr}
          link1a="/page"
          head1="lorem ipson etc "
          contant1=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
          repellat veniam impedit quo eaque incidunt recusandae
          aspernatur! Omnis excepturi, explicabo, non minima pariatur id
          veritatis, reiciendis magnam ullam mollitia magni commodi
          beatae. Beatae quis, ipsum minima aliquam explicabo quia qui ut
          voluptatibus sed dolores commodi "
          link2="/page"
          img2={Social}
          link2a="/page"
          head2="orem ipson"
          contant2="Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
          repellat veniam impedit quo eaque incidunt recusandae
          aspernatur! Omnis excepturi, explicabo, non minima pariatur id
          veritatis, reiciendis magnam ullam mollitia magni commodi
          beatae. Beatae quis, ipsum minima aliquam explicabo quia qui ut
          voluptatibus sed dolores commodi "
        />
      </div>
    );
  }
}

export default Homexx;
