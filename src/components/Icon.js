import React, { useEffect, useState } from "react";

const Icon = ({ obj }) => {
  const [svg, setSvg] = useState(null);

  useEffect(() => {
    fetch(obj[1])
      .then((resp) => resp.text())
      .then(setSvg);
  }, []);

  return (
    <div className="icon" onClick={() => navigator.clipboard.writeText(svg)} data-name={obj[0].replace(".svg", "").replaceAll("-", " ")}>
      <div className="icon-container">
        <img src={obj[1]} alt={obj[0]} />

        <small>{obj[0].replace(".svg", "").replaceAll("-", " ")}</small>
      </div>
    </div>
  );
};

export default Icon;
