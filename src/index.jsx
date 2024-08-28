import "./Styles/style.modules.css";
import Photo from "./Components/photoProfile.jsx";
import MyImage from "./Image/MyImage.jpg";
import Name from "./Components/name.jsx";
import Text from "./Components/category.jsx";
import Button from "./Components/button.jsx";

export default function Profile() {
  return (
    <main className="main">
      <section className="card">
        <Photo img={MyImage} />
        <Name name="Adonislan Alves da Silva" />
        <Text text="Desenvolvedor Front-End" />
        <Text text="adonislan_alves@outlook.com" />
        <article className="btn-area">
          <Button href="https://w.app/AdonislanSilva" text="WhatsApp" />
          <Button
            href="https://portfolio-profissional-drab.vercel.app/index.html"
            text="Portfólio"
          />
          <Button
            href="https://www.linkedin.com/in/adonislan-silva/"
            text="Linkedin"
          />
          <Button href="https://github.com/donislan" text="Github" />
        </article>
      </section>
    </main>
  );
}
