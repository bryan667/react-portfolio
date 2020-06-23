import React from "react";
import { useQuery } from "@apollo/react-hooks";
import Loader from "react-loader-spinner";
import { get } from "lodash";
import { GET_PINNED_REPOS } from "../queries";

import projectImage from "./test2.jpg";

let Portfolio = () => {
  const { data, loading } = useQuery(GET_PINNED_REPOS);
  const pinnedItems = get(data, "viewer.pinnedItems.nodes", []);

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>

          {loading && (
            <Loader type="Bars" color="#00BFFF" height={50} width={50} />
          )}

          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {pinnedItems.map((project) => {
              return (
                <div key={project.name} className="columns portfolio-item">
                  <div className="item-wrap">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={project.name}
                    >
                      <img alt={project.name} src={projectImage} />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{project.title}</h5>
                          <p>{project.description}</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="fa fa-link"></i>
                      </div>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
