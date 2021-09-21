import React from "react";
import "./css/Map.css";

import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import { formatRelative } from "date-fns";

// import "@reach/combobox/styles.css";
import mapStyles from "./mapStyles";

const libraries = ["places"];
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
  mapTypeControl: true,
  streetViewControl: true,
};

const Map = (props) => {
  const { latitude, longitude } = props.location;
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API,
    libraries: libraries,
  });
  const [markers, setMarkers] = React.useState({
    lat: latitude,
    lng: longitude,
    time: new Date(),
  });
  const [selected, setSelected] = React.useState(null);
  const onMapClick = React.useCallback(
    (event) => {
      setMarkers({
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        time: new Date(),
      });
      setSelected(null);
      props.onMapData(event.latLng.lat(), event.latLng.lng());
    },
    [props]
  );

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";
  return (
    <>
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        zoom={8}
        center={{
          lat: markers.lat,
          lng: markers.lng,
        }}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {markers && (
          <Marker
            position={{ lat: markers.lat, lng: markers.lng }}
            onClick={() => {
              setSelected(markers);
            }}
          />
        )}

        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h2>Location Selected</h2>
              <p>{formatRelative(selected.time, new Date())}</p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </>
  );
};

export default Map;
