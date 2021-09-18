import React, { useContext, useEffect, useState } from "react";
import { GoogleComponent } from "react-google-location";

import { AuthContext } from "../context/AuthContext/AuthContext";

import styles from "./css/Stuffs.module.css";

const API_KEY_GOOGLE = process.env.REACT_APP_GOOGLE_API;

const Stuffs = (props) => {
  const { user } = useContext(AuthContext);
  const [location, setLocation] = useState(null);

  const [items, setItems] = useState({
    clothes: 0,
    food: 0,
    medicines: 0,
  });

  const [date, setDate] = useState(0);

  const [donorDetails, setDonorDetails] = useState({
    name: user.name,
    phone: "",
    email: user.email,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      setLocation((prevLocation) => ({
        ...prevLocation,
        latitude,
        longitude,
      }));
    });
  }, []);

  const handleLocation = (e) => {
    const query = `${location.latitude},${location.longitude}`;
    const URL = `http://api.positionstack.com/v1/reverse?access_key=${process.env.REACT_APP_POSITIONSTACK_API}&query=${query}`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setLocation({
          latitude: data.data[0].latitude,
          longitude: data.data[0].longitude,
          place: data.data[0].label,
          country: data.data[0].country,
          state: data.data[0].region,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    handleClick(e);
  };

  const handleItem = (e) => {
    setItems((prevItem) => ({ ...prevItem, [e.target.name]: +e.target.value }));
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleDonor = (e) => {
    setDonorDetails((prevDetails) => ({
      ...prevDetails,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    document.querySelector("#paymentCard").childNodes.forEach((card) => {
      card.classList.add("hide");
    });
    document.querySelector(`${e.target.hash}`).classList.add("show");
    document.querySelector(`${e.target.hash}`).classList.remove("hide");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const donationStuffData = {
      location,
      items,
      date,
      donorDetails,
    };
    console.log("Submitted");
    console.log(donationStuffData);
    props.history.push("/");
  };

  return (
    <main className={styles.stuffs}>
      <div className={styles.navigation}>
        <div className={styles.tab}>
          <a href="#dropLocation" onClick={handleClick}>
            Drop your location
          </a>
        </div>

        <div className={styles.tab}>
          <a href="#donationDetails" onClick={handleClick}>
            Donation Details
          </a>
        </div>

        <div className={styles.tab}>
          <a href="#schedulePickup" onClick={handleClick}>
            Schedule Pickup
          </a>
        </div>

        <div className={styles.tab}>
          <a href="#donorDetails" onClick={handleClick}>
            Donor Details
          </a>
        </div>

        <div className={styles.tab}>
          <a href="#placeOrder" onClick={handleClick}>
            Place Order
          </a>
        </div>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <div className={styles.paymentCard} id="paymentCard">
          <div className={`${styles.card} show`} id="dropLocation">
            <h2>Help us with your exact location</h2>
            <GoogleComponent
              apiKey={API_KEY_GOOGLE}
              language={"en"}
              country={"country:in|country:us"}
              coordinates={true}
              currentCoordinates={{
                lat: 41.7151377,
                lng: 44.827096,
              }}
              placeholder={
                location && location.place
                  ? location.place
                  : "Start typing location"
              }
              // locationBoxStyle={{}}
              // locationListStyle={"custom-style-list"}
              onChange={(e) => {
                console.log(e);
                setLocation({
                  place: e.place,
                  latitude: e.coordinates.lat,
                  longitude: e.coordinates.lng,
                });
              }}
            />
            <h3>or</h3>
            <br />
            <a
              href="#donationDetails"
              className={styles.btn}
              onClick={handleLocation}
            >
              Detect your location
            </a>
            {location && location.place && (
              <a
                onClick={handleClick}
                href="#donationDetails"
                className={styles.next}
              >
                Next
              </a>
            )}
          </div>
          <div
            className={`${styles.card} ${styles.card2}`}
            id="donationDetails"
          >
            <h2>Pick your donation items</h2>
            <div className={styles.inputGroup}>
              <label htmlFor="food">Food</label>
              <input
                onChange={handleItem}
                value={items.food}
                type="number"
                name="food"
                id="food"
                min="1"
                max="10"
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="clothes">Clothes</label>
              <input
                onChange={handleItem}
                value={items.clothes}
                type="number"
                name="clothes"
                id="clothes"
                min="1"
                max="10"
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="medicines">Medicines</label>
              <input
                onChange={handleItem}
                value={items.medicines}
                type="number"
                name="medicines"
                id="medicines"
                min="1"
                max="10"
              />
            </div>
            {(items.food !== 0 ||
              items.clothes !== 0 ||
              items.medicines !== 0) && (
              <a
                onClick={handleClick}
                href="#schedulePickup"
                className={styles.next}
              >
                Next
              </a>
            )}
          </div>
          <div className={`${styles.card} ${styles.card3}`} id="schedulePickup">
            <h2>Schedule your pickup</h2>
            <label htmlFor="date">Date</label>
            <input
              type="datetime-local"
              name="date"
              id="date"
              value={date}
              onChange={handleDate}
            />
            {date !== 0 && (
              <a
                onClick={handleClick}
                href="#donorDetails"
                className={styles.next}
              >
                Next
              </a>
            )}
          </div>
          <div className={`${styles.card} ${styles.card4}`} id="donorDetails">
            <h2>Please enter your details</h2>
            <input
              onChange={handleDonor}
              value={donorDetails.name}
              type="text"
              name="name"
              placeholder="Your Name"
            />
            <input
              onChange={handleDonor}
              value={donorDetails.email}
              type="email"
              name="email"
              placeholder="Your E-mail"
            />
            <input
              onChange={handleDonor}
              value={donorDetails.phone}
              type="tel"
              name="phone"
              pattern="[0-9]{10}"
              placeholder="Your Mobile Number"
              required
            />
            {donorDetails.name !== "" &&
              donorDetails.phone !== "" &&
              donorDetails.email !== "" && (
                <a
                  onClick={handleClick}
                  href="#placeOrder"
                  className={styles.next}
                >
                  Next
                </a>
              )}
          </div>
          <div className={styles.card} id="placeOrder">
            <h2>Place your order, our team will arrive shortly</h2>
            {location &&
            location.place &&
            (items.food !== 0 ||
              items.clothes !== 0 ||
              items.medicines !== 0) &&
            date !== 0 &&
            donorDetails.name !== "" &&
            donorDetails.phone !== "" &&
            donorDetails.email !== "" ? (
              <button>Place Order</button>
            ) : (
              <h3>Please fill the complete form</h3>
            )}
          </div>
        </div>
      </form>
    </main>
  );
};

export default Stuffs;
