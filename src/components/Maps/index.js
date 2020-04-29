import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import datamap from "../../data/map.json";
import "../../index.css";

const MapContainer = () => {
  const [activePlace, setActivePlace] = React.useState(null);
  return (
    <>
      <Map center={[-23.59176, -46.30221]} zoom={9}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {datamap.features.map((item) => (
          <Marker
            key={item.properties.PLACE_ID}
            position={[
              item.geometry.coordinates[0],
              item.geometry.coordinates[1],
            ]}
            onclick={() => {
              setActivePlace(item);
            }}
          />
        ))}
        {activePlace && (
          <Popup
            position={[
              activePlace.geometry.coordinates[0],
              activePlace.geometry.coordinates[1],
            ]}
            onClose={() => {
              setActivePlace(null);
            }}
          >
            <div>
              <h4>{activePlace.properties.NAME}</h4>
              <p>{activePlace.properties.ADDRESS}</p>
            </div>
          </Popup>
        )}
      </Map>
    </>
  );
};
export default MapContainer;
