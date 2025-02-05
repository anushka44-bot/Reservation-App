import Navbar from "../../components/navbar/navbar";
import Header from "../../components/Header/Header";
import Featured from "../../components/featured/featured";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
      </div>
    </div>
  );
};

export default Home;
