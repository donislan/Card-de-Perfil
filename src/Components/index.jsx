import "./Styles/style.modules.css";
import Name from "./name.jsx";
import { useState } from "react";

export default function Profile(props) {
  const [buttonText, setButtonText] = useState("Follow");

  function handleClick(ev) {
    console.log(ev);
    setButtonText("✔");
  }

  return (
    <div className="Main">
      <div className="Card">
        <img src={props.img} alt={props.name} id="imageProfile" />
        <Name id="name" data-tast="some value" aria-label="social-links">
          <h1>{props.name}</h1>
          <button onClick={handleClick} className="btnf">
            {buttonText}
          </button>
        </Name>
        <hr />
        <p className="category">{props.bio}</p>
        <hr />
        <p className="infos">{props.number}</p>
        <hr />
        <p className="infos">{props.email}</p>
        <hr />
        <div className="buttonsArea">
          <button className="btn">{props.mideaUm}</button>
          <button className="btn">{props.mideaDois}</button>
          <button className="btn">{props.mideaTres}</button>
        </div>
      </div>
    </div>
  );
}
