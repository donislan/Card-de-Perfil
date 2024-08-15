import "./Styles/style.modules.css";
import Name from "./name.jsx";

export default function Profile(props) {
  return (
    <main className="main">
      <article className="card">
        <figure className="img">
          <img src={props.img} alt={props.name} id="imageProfile" />
        </figure>
        <Name id="name" data-tast="some value" aria-label="social-links">
          <h1>{props.name}</h1>
        </Name>
        <hr />
        <p className="category">{props.bio}</p>
        <hr />
        <p className="infos">{props.number}</p>
        <hr />
        <p className="infos">{props.email}</p>
        <hr />
        <div className="buttonsArea">
          <a href="https://portfolio-profissional-drab.vercel.app/index.html">
            <button className="btn">{props.mideaUm}</button>
          </a>
          <a href="https://www.linkedin.com/in/adonislan-silva-684b7331a/">
            <button className="btn">{props.mideaDois}</button>
          </a>
          <a href="https://github.com/donislan/aprendizado-git-github">
            <button className="btn">{props.mideaTres}</button>
          </a>
        </div>
      </article>
    </main>
  );
}
