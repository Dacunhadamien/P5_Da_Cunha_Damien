import { Link } from "react-router-dom";
import logo from "./LOGO-HEADER.png";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Logo Kasa"></img>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </nav>
    </div>
  );
}

export default Header;
