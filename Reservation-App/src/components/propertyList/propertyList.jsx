import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

function PropertyList() {
  const { data, loading, error } = useFetch(
    "http://localhost:8800/api/hotels/countByType"
  );

  const images = [
    "pics/Hotels.jpg",
    "pics/Apartment.jpg",
    "pics/Resorts.jpg",
    "pics/Villa.jpg",
    "pics/Cabin.jpg",
  ];

  return (
    <div className="pList">
      {loading ? (
        "loading please wait"
      ) : (
        <>
          {data &&
            images.map((img, i) => (
              <div className="pListItem" key={i}>
                <img
                  src={img}
                  alt={data[i]?.type || "property"}
                  className="pListImg"
                />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>
                    {data[i]?.count} {data[i]?.type}
                  </h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
}

export default PropertyList;
