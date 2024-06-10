import { FaStar } from "react-icons/fa";

function Rating({ rating }) {
  const fiveStars = [1, 2, 3, 4, 5];
  return (
    <div className="rating">
      {fiveStars.map((_, index) => {
        return <FaStar size={30} className={index + 1 > rating ? "star-inactive" : "star-active"} key={index} />;
      })}
    </div>
  );
}

export default Rating;
