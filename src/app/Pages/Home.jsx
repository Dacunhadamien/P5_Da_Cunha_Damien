import Ads from "../Components/Ads";
import Banner from "../Components/Banner";
import bannerImage from "../../images/banner-home.png";

function Home() {
  return (
    <div className="home">
      <Banner text="Chez vous, partout et ailleurs" src={bannerImage} alt="Paysage de falaises" filler="filler" />
      <Ads />
    </div>
  );
}

export default Home;
