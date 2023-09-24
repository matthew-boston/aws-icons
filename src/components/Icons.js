import React from "react";
import Icon from "./Icon";

const Icons = ({ images }) => (
  <div className="icons">
    {Object.values(images).map((obj, i) => (
      <div key={i}>
        <Icon obj={obj} key={i} />
      </div>
    ))}
  </div>
);

export default Icons;
