import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { AuthContext } from "../context/AuthContext/AuthContext";

import styles from "./css/Stuffs.module.css";

const Stuffs = (props) => {
  const history = useHistory();
  const { user } = useContext(AuthContext);
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
    place: "",
    country: "",
    state: "",
  });

  const [items, setItems] = useState({
    clothes: 0,
    food: 0,
    medicines: 0,
  });

  const [date, setDate] = useState(0);

  const [donorDetails, setDonorDetails] = useState({
    name: user.name,
    phone: user.phoneNo,
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

  const handleLocationInput = (e) => {
    setLocation((preLocation) => ({
      ...preLocation,
      place: e.target.value,
    }));
  };

  const searchLocation = (e) => {
    e.preventDefault();
    const query = location.place;
    const URL = `http://api.positionstack.com/v1/forward?access_key=${process.env.REACT_APP_POSITIONSTACK_API}&query=${query}`;
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
  };

  const handleLocation = (e) => {
    e.preventDefault();
    const query = `${location.latitude},${location.longitude}`;
    console.log(query);
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
    history.push("/");
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
            <div className={styles.locationInput}>
              <input
                type="text"
                placeholder="Enter your location"
                value={location.place}
                onChange={handleLocationInput}
              />
              <a
                className={styles.btn}
                href="#somevalue"
                onClick={searchLocation}
              >
                Search
              </a>
            </div>
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
