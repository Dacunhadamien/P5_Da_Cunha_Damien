function Tags({ tags }) {
  return (
    <div className="tags">
      {tags.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}

export default Tags;
