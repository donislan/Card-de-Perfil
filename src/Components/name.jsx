import "./Styles/name.modules.css";

export default function Name(props) {
  return (
    <h1 {...props} className="name">
      {props.children}
    </h1>
  );
}
