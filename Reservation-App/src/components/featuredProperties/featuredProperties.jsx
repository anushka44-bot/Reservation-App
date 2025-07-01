import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:8800/api/hotels?featured=true"
  );

  const images = [
    "pics/Hotels.jpg",
    "pics/Apartment.jpg",
    "pics/Resorts.jpg",
    "pics/Villa.jpg",
    "pics/Cabin.jpg",
  ];

  return (
    <div className="fp">
      {error ? (
        "Something went wrong"
      ) : loading ? (
        "Loading please wait"
      ) : (
        <>
          {data.map((item, index) => (
            <div className="fpItem" key={item._id}>
              <img
                src={images[index % images.length]}
                alt={item.name}
                className="fpImg"
              />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">
                Starting from {item.cheapestPrice} INR
              </span>
              {item.rating && (
                <div className="fpRating">
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
