import { Link } from "react-router-dom";
import logo from "../../images/LOGO-HEADER.png";

function Header() {
  return (
    <div className="header">
      <Link to="/" id="main-logo">
        <img src={logo} alt="Logo Kasa"></img>
      </Link>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </nav>
    </div>
  );
}

export default Header;
