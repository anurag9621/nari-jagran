import React from "react";
import { Link } from "react-router-dom";

const CommonA = (props) => {
  return (
    <>
      <div className="start00">
        <ul>
          <li>
            <Link to={props.link1}>
              <img src={props.img1} alt="" />
            </Link>
          </li>
          <br />
          <li>
            <a href={props.link1a}>
              <h1>{props.head1}</h1>
            </a>
            <br />
            <p>{props.contant1}</p>
          </li>
        </ul>
        <br />
        <br />
        <ul>
          <li>
            <a href={props.link2}>
              <img src={props.img2} alt="" />
            </a>
          </li>
          <br />
          <li>
            <a href={props.link2a}>
              <h1>{props.head2} </h1>
            </a>
            <br />
            <p>{props.contant2}</p>
          </li>
        </ul>
        <br />
        <br />
      </div>
    </>
  );
};

export default CommonA;
