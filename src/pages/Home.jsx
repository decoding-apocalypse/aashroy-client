import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import "./css/Home.css";
import mapStyles from "../components/mapStyles";
import axios from "axios";

const libraries = ["places"];
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

const Home = (props) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API,
    libraries: libraries,
  });
  const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  //fetching map data
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/upload`)
      .then((res) => {
        // eslint-disable-next-line
        res.data.map((m) => {
          const { location, date, img, description, username } = m;
          setMarkers((previousData) => [
            ...previousData,
            {
              lat: +location.lat["$numberDecimal"],
              lng: +location.lng["$numberDecimal"],
              time: date,
              imgUrl: img,
              descrip: description,
              username,
            },
          ]);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // console.log(markers);

  if (loadError) return <div>Error while loading maps</div>;
  if (!isLoaded) return <div>Loading Maps</div>;
  return (
    <main className="Home">
      <div id="carousel">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="img/carousal-1-(1).jpg"
                className="d-block w-100"
                alt="..."
              ></img>
            </div>
            <div className="carousel-item">
              <img
                src="img/carousal-2-(1).jpg"
                className="d-block w-100"
                alt="..."
              ></img>
            </div>
            <div className="carousel-item">
              <img
                src="img/carousal-3-(1).jpg"
                className="d-block w-100"
                alt="..."
              ></img>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div id="home-map">
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          zoom={8}
          center={{
            lat: 26.2006,
            lng: 92.9376,
          }}
          options={options}
          onLoad={onMapLoad}
        >
          {markers &&
            markers.length &&
            markers.map((m, i) => (
              <React.Fragment key={i}>
                <Marker
                  position={{
                    lat: m.lat,
                    lng: m.lng,
                  }}
                  onClick={() => {
                    setSelected(m);
                  }}
                />
                {selected ? (
                  <InfoWindow
                    position={{ lat: selected.lat, lng: selected.lng }}
                    onCloseClick={() => {
                      setSelected(null);
                    }}
                  >
                    <div>
                      <img
                        src={selected.imgUrl}
                        alt="Homeless"
                        className="markerImg"
                      />
                      <p className="markerDate">
                        {new Date(selected.time).toLocaleDateString()}
                      </p>
                      <p className="markerUser">{selected.username}</p>
                      <p className="markerDesc">{selected.descrip}</p>
                    </div>
                  </InfoWindow>
                ) : null}
              </React.Fragment>
            ))}
        </GoogleMap>
      </div>
      <div id="upload-img">
        <Link className="donate-button" to="/upload">
          Upload Now
        </Link>
      </div>
      <div id="home-info">
        <h2>How we complete local needs</h2>
        <div>
          <img src="./img/localneeds.svg" alt="local needs"></img>
        </div>
        <div id="info-1" className="infos">
          <h4>Assess the Need</h4>
          <span>
            FIRST, we assess the needs of each community in which we serve. We
            work to understand the obstacles, hardships, and challenges native
            to the area's particular population.
          </span>
        </div>

        <div id="info-2" className="infos">
          <h4>Build the Programs</h4>
          <span>
            NEXT, we build local programs designed to offer immediate relief,
            short-term care, and long-term growth in the areas that will best
            benefit the community.
          </span>
        </div>

        <div id="info-3" className="infos">
          <h4>Invest in the Community</h4>
          <span>
            THEN, we offer the local programs to the local community, working to
            continually optimize their efficacy via spiritual, physical, and
            emotional service.
          </span>
        </div>
      </div>
    </main>
  );
};

export default Home;
