import React, { useEffect, useState } from "react";

const Icon = ({ obj }) => {
  const [svg, setSvg] = useState(null);
  const [text, setText] = useState(obj[0].replace(".svg", "").replaceAll("-", " "));

  useEffect(() => {
    fetch(obj[1])
      .then((resp) => resp.text())
      .then(setSvg);
  }, [obj]);

  const onClick = () => {
    navigator.clipboard.writeText(svg);
    setText("Copied!");
    setTimeout(() => setText(obj[0].replace(".svg", "").replaceAll("-", " ")), 1000);
  };

  return (
    <div className="icon" onClick={onClick} data-name={obj[0].replace(".svg", "").replaceAll("-", " ")}>
      <div className="icon-container">
        <img src={obj[1]} alt={obj[0]} loading="lazy" />

        <small>{text}</small>
      </div>
    </div>
  );
};

export default Icon;
