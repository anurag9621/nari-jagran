import React from "react";
import { Link } from "react-router-dom";
const BoxA = (props) => {
  return (
    <>
      <div class="card">
        <Link to={props.link}>
          <div class="card-body">
                      <h5 class="card-title">{props.heading}</h5>
            <p class="card-text">
              {props.contant}
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};
export default BoxA;
