import React from "react";
import Icon from "./Icon";

const Icons = ({ images }) => (
  <div className="icons">
    {Object.values(images).map((obj, i) => (
      <Icon obj={obj} key={i} />
    ))}
  </div>
);

export default Icons;
