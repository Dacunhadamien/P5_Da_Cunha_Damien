const Banner = ({ text, src, alt }) => {
  return (
    <div className="banner">
      <img src={src} alt={alt}></img>
      <h1>{text}</h1>
    </div>
  );
};

export default Banner;
