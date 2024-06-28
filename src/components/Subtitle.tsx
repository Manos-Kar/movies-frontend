import React from "react";

type Props = {
  subtitle: string;
};

function Subtitle(props: Props) {
  return (
    <div className="subtitleComponent">
      <p className="subtitle">{props.subtitle}</p>
      <div className="underlineTitle"></div>
    </div>
  );
}

export default Subtitle;
