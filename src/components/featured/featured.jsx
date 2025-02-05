import "./featured.css";

function featured() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src="pics/Mumbai.jpg" alt="Mumbai" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Mumbai</h1>
          <h2>253 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="pics/Pune.jpg" alt="Pune" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Pune</h1>
          <h2>457 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="pics/Kolkata.jpg" alt="Kolkata" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Kolkata</h1>
          <h2>86 Properties</h2>
        </div>
      </div>
    </div>
  );
}

export default featured;
