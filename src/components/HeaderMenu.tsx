import React, { useState } from "react";
import HeaderMenuButton from "./HeaderMenuButton";

function HeaderMenu() {
  const [activeButtonId, setActiveButtonId] = useState<string | undefined>(
    undefined
  );
  return (
    <div
      className="rightHeaderMenuContainer"
      onMouseLeave={() => setActiveButtonId(undefined)}
    >
      <HeaderMenuButton
        title={"films"}
        link={"films"}
        activeButtonId={activeButtonId}
        setActiveButtonId={setActiveButtonId}
        id={"button-1"}
      />
      <HeaderMenuButton
        title={"about"}
        link={"about"}
        activeButtonId={activeButtonId}
        setActiveButtonId={setActiveButtonId}
        id={"button-2"}
      />
      <HeaderMenuButton
        title={"contact"}
        link={"contact"}
        activeButtonId={activeButtonId}
        setActiveButtonId={setActiveButtonId}
        id={"button-3"}
      />
    </div>
  );
}

export default HeaderMenu;
