import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:8800/api/hotels/countByCity?cities=berlin,madrid,kolkata"
  );
  console.log(data);

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img src="pics/Mumbai.jpg" alt="Mumbai" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Berlin</h1>
              <h2>{data[0]} Properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img src="pics/Pune.jpg" alt="Pune" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Madrid</h1>
              <h2>{data[1]} Properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img src="pics/Kolkata.jpg" alt="Kolkata" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Kolkata</h1>
              <h2>{data[2]} Properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
