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
import { useState } from "react";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    { src: "/pics/Hotels.jpg" },
    { src: "/pics/Hotels 2.jpg" },
    { src: "/pics/Hotels 3.jpg" },
    { src: "/pics/Hotels 4.jpg" },
    { src: "/pics/Hotels 5.jpg" },
    { src: "/pics/Hotels 6.jpg" },
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
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
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
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Action Area l New town</span>
          </div>
          <span className="hotelDistance">
            Excellent location 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over 7000 INR at this property and get a free airport
            taxi
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
              <h1 className="hotelTitle">Stay in the heart of New town</h1>
              <p className="hotelDesc">
                Located in the heart of Newtown, Kolkata, Grand Hotel offers a
                luxurious stay...
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay</h1>
              <span>
                Located in the real heart of Kolkata, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>10000 INR</b> (9 nights)
              </h2>
              <button>Reserve or book now</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
