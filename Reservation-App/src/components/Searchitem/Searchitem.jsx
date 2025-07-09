import "./Searchitem.css";
import { Link } from "react-router-dom";

const images = [
  "pics/1.webp",
  "pics/2.webp",
  "pics/3.jpg",
  "pics/4.webp",
  "pics/Cabin.jpg",
];

function SearchItem({ item, index }) {
  return (
    <div className="searchitem">
      <img src={images[index % images.length]} alt="Item" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance} km from Airport</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">Luxury stay-in at low cost</span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && (
          <div className="siRating">
            <span>Excellent</span>
            <button>{item.rating}</button>
          </div>
        )}
        <div className="siDetailTexts">
          <span className="siPrice">{item.cheapestPrice} INR</span>
          <div className="siTaxOp">Includes taxes and fees</div>
          <Link to={`/hotels/${item._id}`}>
            <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SearchItem;
