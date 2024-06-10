const Banner = ({ text, src, alt, filler }) => {
  return (
    <div className="banner">
      <img src={src} alt={alt} className={filler} />
      <h1>{text}</h1>
    </div>
  );
};

export default Banner;
