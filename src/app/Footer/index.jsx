import logo from "../../images/LOGO-FOOTER.png";
import mention from "../../images/All-rights-reserved.png";

function Footer() {
  return (
    <div className="footer">
      <img src={logo} alt="Logo Kasa footer" id="logo-footer"></img>
      <img src={mention} alt="Mention all right reserved" id="mention-footer"></img>
    </div>
  );
}

export default Footer;
