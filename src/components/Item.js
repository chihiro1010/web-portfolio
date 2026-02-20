import React, { useState } from "react";
import "./Item.css";

const Item = (props) => {
  const [clicked, setClicked] = useState(false);

  const detailHandler = () => {
    if (clicked) {
      return (
        <>
          <p className="subject">使用技術</p>
          <p className="contents">{props.tech}</p>
          <object>
            <a
              href={props.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              Github
            </a>
          </object>
          <button
            className="accordion-button up"
            onClick={() => {
              setClicked(!clicked);
            }}
          >
            詳細 ▲
          </button>
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      <div className={`link-card ${clicked ? "expanded" : ""}`}>
        <a href={props.siteLink} target="_blank" rel="noopener noreferrer">
          <img src={props.image} alt="" className="image"></img>
          <p className="subject">{props.summary}</p>
          <h3 className="title contents">{props.title}</h3>
        </a>
        {clicked === false ? (
          <button
            className="accordion-button down"
            onClick={() => {
              setClicked(!clicked);
            }}
          >
            詳細 ▼
          </button>
        ) : (
          detailHandler()
        )}
      </div>
    </>
  );
};

export default Item;
