import React, { useEffect } from "react";

type Props = {
  title: string;
};

function PageTitle(props: Props) {
  useEffect(() => {
    const container = document.querySelector(".pageTitleComponent");
    const containerWidth = container?.getBoundingClientRect().width;
    const textToTest = document.querySelector(
      ".pageTitleInvisible"
    ) as HTMLElement;
    adjustFontSizeToFit(textToTest, 240, containerWidth!);
  }, []);

  function adjustFontSizeToFit(
    textToTest: HTMLElement,
    maxFontSize: number,
    containerWidth: number
  ) {
    const text = document.querySelector(".pageTitle") as HTMLElement;

    let fontSize = maxFontSize;

    while (textToTest.offsetWidth > containerWidth - 200 && fontSize > 0) {
      fontSize -= 1;
      text.style.fontSize = `${fontSize}px`;
      textToTest.style.fontSize = `${fontSize}px`;
      if (fontSize < 140) {
        text.style.bottom = "20px";
      }
    }
  }

  return (
    <>
      <div className="pageTitleComponent">
        <p className="pageTitleInvisible">{props.title}</p>
        <p className="pageTitle">{props.title}</p>
        <div className="underlineTitle"></div>
      </div>
    </>
  );
}

export default PageTitle;
