import "./Hotel.css";
import Navbar from "../../components/navbar/navbar";
import Header from "../../components/Header/Header";
import MailList from "../../components/mailList/mailList";
import Footer from "../../components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const { data, loading, error } = useFetch(
    `http://localhost:8800/api/hotels/find/${id}`
  );

  const { dates, options } = useContext(SearchContext);

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(dates[0].endDate, dates[0].startDate);

  const photos = [
    { src: "/pics/Hotels.jpg" },
    { src: "/pics/Hotels.jpg" },
    { src: "/pics/Hotels.jpg" },
    { src: "/pics/Hotels.jpg" },
    { src: "/pics/Hotels.jpg" },
    { src: "/pics/Hotels.jpg" },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    if (direction === "left") {
      setSlideNumber(slideNumber === 0 ? photos.length - 1 : slideNumber - 1);
    } else {
      setSlideNumber(slideNumber === photos.length - 1 ? 0 : slideNumber + 1);
    }
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? (
        "loading"
      ) : (
        <div className="hotelContainer">
          {open && (
            <div className="slider">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="close"
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="arrow left-arrow"
                onClick={() => handleMove("left")}
              />
              <div className="sliderWrapper">
                <img
                  src={photos[slideNumber].src}
                  alt=""
                  className="sliderImg"
                />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow right-arrow"
                onClick={() => handleMove("right")}
              />
            </div>
          )}

          <div className="hotelWrapper">
            <button className="bookNow">Reserve or book now!</button>
            <h1 className="hotelTitle">{data?.name}</h1>

            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data?.address}</span>
            </div>

            <span className="hotelDistance">
              Excellent location {data?.distance}m from center
            </span>

            <span className="hotelPriceHighlight">
              Book a stay over {data?.cheapestPrice} INR at this property and
              get a free airport taxi
            </span>

            <div className="hotelImages">
              {photos.map((photo, i) => (
                <div className="hotelImgWrapper" key={i}>
                  <img
                    onClick={() => handleOpen(i)}
                    src={photo.src}
                    alt=""
                    className="hotelImg"
                  />
                </div>
              ))}
            </div>

            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">{data?.title}</h1>
                <p className="hotelDesc">{data?.desc}</p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect for a {days}-night stay</h1>
                <span>
                  Located in the real heart of Kolkata, this property has an
                  excellent location score of 9.8!
                </span>
                <h2>
                  <b>{days * data?.cheapestPrice * options.room} INR</b> ({days}{" "}
                  nights)
                </h2>
                <button>Reserve or book now</button>
              </div>
            </div>
          </div>

          <MailList />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Hotel;
