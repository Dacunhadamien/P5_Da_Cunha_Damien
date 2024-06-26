import Dropdown from "../Components/Dropdown";
import data from "../../data/about.json";
import Banner from "../Components/Banner";
import bannerImage from "../../images/banner-about.png";

function About() {
  return (
    <div className="about">
      <Banner alt="Paysage de montagnes" src={bannerImage} />
      <div className="dropdowns-about">
        {data.map((item) => (
          <Dropdown name={item.name} value={item.value} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default About;
