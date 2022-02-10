import React from "react";
import "./Resources.css";
import { resources } from "../../constant";

const showResources = () => {
  return resources.map((resource, idx) => (
    <li key={idx}>
      <div className="image">
        <img src={resource.logo} alt={resource.name} rel="noreferrer" />
      </div>
      <div className="header">{resource.name}</div>
      <div>{resource.description}</div>
      <div className="link">
        <i class="fa fa-link" aria-hidden="true">
          :
        </i>
        <a href={resource.link} target="_blank">
          {resource.name}
        </a>
      </div>
    </li>
  ));
};

const Resources = () => {
  return (
    <div className="resources_wrapper">
      <div className="top">
        <h1>OUR RESOURCES</h1>
      </div>
      <div className="bottom">
        <ul className="resourcesList"> {showResources()}</ul>
      </div>
    </div>
  );
};

export default Resources;
