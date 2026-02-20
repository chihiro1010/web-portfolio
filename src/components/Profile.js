import React from "react";
import "./Profile.css";

const Profile = (props) => {
  return (
    <div className="profile-container">
      <img src={props.image} alt="" className="portrait"></img>
      <h3 className="name">{props.name}</h3>
      <p className="subject">{props.summary}</p>
      <h3 className="title contents">{props.title}</h3>
      <div className="container">
        <p className="profile subject">出身 </p>
        <p className="profile contents">　{props.from}</p>
      </div>
      <div className="container">
        <p className="profile subject">在住 </p>
        <p className="profile contents">　{props.residence}</p>
      </div>
      <div className="container">
        <p className="profile subject">生年月 </p>
        <p className="profile contents">　{props.birthday}</p>
      </div>
    </div>
  );
};

export default Profile;
