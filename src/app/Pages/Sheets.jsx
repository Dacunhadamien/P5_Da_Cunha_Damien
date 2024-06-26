import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../../data/annonces.json";
import Tags from "../Components/Tags";
import Dropdown from "../Components/Dropdown";
import Slider from "../Components/Slider";
import Rating from "../Components/Rating";
import Error404 from "./Error404";

function Sheets() {
  const { id } = useParams();
  const [logement, setLogement] = useState({
    cover: [],
    pictures: [],
    title: "",
    location: "",
    tags: [],
    host: [],
    rating: "",
    description: "",
    equipments: [],
  });

  useEffect(() => {
    const selectLogement = data.find((item) => item.id === id);
    if (selectLogement) {
      setLogement(selectLogement);
    }
  }, [id]);

  if (logement.id === undefined) {
    return <Error404 />;
  }

  return (
    <div className="sheets">
      <Slider pictures={logement.pictures} />
      <div className="infos">
        <div className="title-location-tag-host-rating">
          <div className="title-location-tag">
            <div className="title-location">
              <h1>{logement.title}</h1>
              <p>{logement.location}</p>
            </div>
            <Tags tags={logement.tags} />
          </div>
          <div className="host-rating">
            <div className="host">
              <h2>{logement.host.name}</h2>
              <img src={logement.host.picture} alt="Photographie portrait de l'hôte"></img>
            </div>
            <Rating rating={logement.rating} />
          </div>
        </div>
        <div className="dropdowns">
          <Dropdown name="Description" value={logement.description} />
          <Dropdown
            name="Équipements"
            value={logement.equipments.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          />
        </div>
      </div>
    </div>
  );
}

export default Sheets;
