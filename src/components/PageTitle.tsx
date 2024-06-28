import React from "react";

type Props = {
  title: string;
};

function PageTitle(props: Props) {
  return (
    <div className="pageTitleComponent">
      <p className="pageTitle">{props.title}</p>
      <div className="underlineTitle"></div>
    </div>
  );
}

export default PageTitle;
