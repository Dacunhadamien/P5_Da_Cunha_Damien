import Dropdown from "../Part/Dropdown-menu/Dropdown";
import data from "../../data/about.json";
import Banner from "../Part/Banner";

function About() {
  return (
    <div className="about">
      <Banner alt="Paysage de montagnes" src="./images/banner_about.png" />
      <div className="dropdowns-about">
        {data.map((item) => (
          <Dropdown name={item.name} value={item.value} />
        ))}
      </div>
    </div>
  );
}

export default About;
