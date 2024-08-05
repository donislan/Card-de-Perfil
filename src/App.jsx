import Profile from "./Components/index.jsx";
import MyImage from "./Image/MyImage.jpg";

export default function App() {
  return (
    <div>
      <Profile
        img={MyImage}
        name="Adonislan Alves da Silva"
        bio="Dev Front-End Jr "
        number="+55 82 999203503"
        email="adonislan_alves@outlook.com"
        mideaUm="Linked In"
        mideaDois="Instagram"
        mideaTres="Github"
      />
    </div>
  );
}
