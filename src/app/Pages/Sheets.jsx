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
        <Dropdown
          name="Équipements"
          value={logement.equipments.map((item) => {
            return (
              <>
                <li key={item}>{item}</li>
              </>
            );
          })}
        />
      </div>
    </div>
  );
}

export default Sheets;
