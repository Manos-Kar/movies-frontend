import React from "react";
import PageTitle from "../components/PageTitle";

function Contact() {
  return (
    <div className="pageComponent">
      <PageTitle title="CONTACT" />
      <div className="aboutSection">
        <a
          className="aboutParagraph hover"
          href="https://www.linkedin.com/in/emmanouil-karystinos/"
        >
          Go to my LinkedIn Profile
        </a>

        <p className="aboutParagraph">Email: emmanouil.karystinos@gmail.com</p>
      </div>
    </div>
  );
}

export default Contact;
