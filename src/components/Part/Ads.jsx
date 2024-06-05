import { Link } from "react-router-dom";
import data from "../../data/annonces.json";

function Ads() {
  return (
    <div className="gallery">
      {data.map((item) => (
        <div className="block-annonce" key={item.id}>
          <Link to={`/sheets/${item.id}`}>
            <p>{item.title}</p>
            <img src={item.cover} alt={item.title}></img>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Ads;
