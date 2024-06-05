import Ads from "../Part/Ads";
import Banner from "../Part/Banner";

function Home() {
  return (
    <div className="home">
      <Banner text="Chez vous, partout et ailleurs" src="./images/banner_about.png" alt="Paysage de falaises" />
      <Ads />
    </div>
  );
}

export default Home;
