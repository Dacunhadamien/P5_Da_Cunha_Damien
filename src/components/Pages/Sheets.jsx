import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../../data/annonces.json";
import Tags from "../Part/Tags";
import Dropdown from "../Part/Dropdown-menu/Dropdown";
import Slider from "../Part/Slider";
import Rating from "../Part/Rating";

function Sheets() {
  const { id } = useParams();
  const [logement, setLogement] = useState({
    id: "",
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
    setLogement(selectLogement);
  }, [id]);
  return (
    <div className="sheets">
      <Slider pictures={logement.pictures} />
      <div className="title-location-host">
        <div className="title-location">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
        </div>
        <div className="host">
          <h2>{logement.host.name}</h2>
          <img src={logement.host.picture} alt="Photographie portrait de l'hôte"></img>
        </div>
      </div>
      <div className="tags-rating">
        <Tags tags={logement.tags} />
        <Rating rating={logement.rating} />
      </div>
      <div className="dropdowns">
        <Dropdown name="Description" value={logement.description} />
        <Dropdown name="Équipements" value={logement.equipments} />
      </div>
    </div>
  );
}

export default Sheets;
