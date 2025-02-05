import "./propertyList.css";

function propertyList() {
  return (
    <div className="pList">
      <div className="pListItem">
        <img src="pics/Hotels.jpg" alt="Hotels" className="pListImg" />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>233 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src="pics/Apartment.jpg" alt="Apartments" className="pListImg" />
        <div className="pListTitles">
          <h1>Apartments</h1>
          <h2>243 Apartments</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src="pics/Cabin.jpg" alt="Cabin" className="pListImg" />
        <div className="pListTitles">
          <h1>Cabins</h1>
          <h2>143 Cabins</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src="pics/Resorts.jpg" alt="Resorts" className="pListImg" />
        <div className="pListTitles">
          <h1>Resorts</h1>
          <h2>273 Resorts</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src="pics/Villa.jpg" alt="Villas" className="pListImg" />
        <div className="pListTitles">
          <h1>Villas</h1>
          <h2>313 Villas</h2>
        </div>
      </div>
    </div>
  );
}

export default propertyList;
