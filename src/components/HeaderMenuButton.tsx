import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  title: string;
  link: string;
  id: string;
  activeButtonId: string | undefined;
  setActiveButtonId: (activeButtonId: string | undefined) => void;
};

function HeaderMenuButton(props: Props) {
  const navigate = useNavigate();

  function navigateTo(link: string) {
    navigate(`/${link}`);
  }

  return (
    <div
      className="headerMenuButton"
      onClick={() => navigateTo(props.link)}
      onMouseEnter={() => props.setActiveButtonId(props.id)}
    >
      <p
        id={props.id}
        className={`headerMenuButtonText ${
          props.activeButtonId !== undefined &&
          props.activeButtonId !== props.id
            ? "inactive"
            : "active"
        }`}
      >
        {props.title}
      </p>
    </div>
  );
}

export default HeaderMenuButton;
