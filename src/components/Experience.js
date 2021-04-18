import React from "react";
import resume from "../Irina_qa.docx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Front End Development Skills </h3>
            <p>HTML/CSS/Javascript/jQuery/Bootstrap/React.js/Moment</p>
          </div>
        </div>

        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Back End Development Skills </h3>
            <p>
              Node/Express/Stripe/Insomnia/Postman/MySQL/SQLite3/Sequelize/MongoDB/bcrypt
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <h3>Click to download my resume!</h3>
      </div>
      <form
        method="get"
        action={resume}
        target="_blank"
        className="download-button-container"
      >
        <button className="btn-main-offer download">
          <FontAwesomeIcon icon={faDownload} />
          Download
        </button>
      </form>
    </div>
  );
};

export default Experience;
