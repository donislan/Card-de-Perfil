import Profile from "./Components/index.jsx";
import MyImage from "./Image/MyImage.jpg";

export default function App() {
  return (
    <div>
      <Profile
        img={MyImage}
        name="Adonislan Alves da Silva"
        bio="Desenvolvedor Front-End"
        number="+55 82 9.9920-3503"
        email="adonislan_alves@outlook.com"
        mideaUm="Portfólio"
        mideaDois="Linkedin"
        mideaTres="Github"
        mideaQuatro="Currículo"
      />
    </div>
  );
}
