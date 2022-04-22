import { Link } from "react-router-dom";
import "../css/App.css";

const MenuItem = (props: {
  name: string;
  link: string;
  size: string;
  side: string;
}) => {
  return (
    <div
      style={
        props.side === "left"
          ? {
              marginLeft: "auto",
              textAlign: "center",
              marginRight: 8,
              maxWidth: 150,
              display: "flex",
              alignItems: "center"
            }
          : {
              textAlign: "center",
              marginLeft: 8,
              marginRight: "auto",
              maxWidth: 150,
              display: "flex",
              alignItems: "center"
            }
      }
    >
      {props.size === "big" && (
        <Link
          className="menuItem"
          style={{
            color: "#6e6e6e",
            fontSize: "0.90rem",
            letterSpacing: "0.20em",
            textAlign: "center",
            verticalAlign: "middle",
            textDecoration: "none",
            fontWeight: "bold"
          }}
          to={props.link}
        >
          {props.name}
        </Link>
      )}
      {props.size === "medium" && (
        <Link
          className="menuItem"
          style={{
            color: "#6e6e6e",
            fontSize: "0.75rem",
            letterSpacing: "0.15em",
            textAlign: "center",
            verticalAlign: "middle",
            textDecoration: "none",
            fontWeight: "bold"
          }}
          to={props.link}
        >
          {props.name}
        </Link>
      )}
    </div>
  );
};

export default MenuItem;
