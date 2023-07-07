import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet';
import { toast } from 'react-toastify';
import Loading from '../components/Loading';
const Map = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ msg: '', show: 0 });

  const getGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          setLoading(false);
        },
        (error) => {
          setError({ show: 1, msg: error.message });
          toast.error(`${error.message} !!!`);
        }
      );
    }
  };

  const MapMarker = () => {
    const map = useMapEvents({});
    console.log(map);
  };

  useEffect(() => {
    getGeolocation();
  }, []);

  if (error.show || loading) {
    return <Loading center />;
  }

  return (
    <MapContainer center={[latitude, longitude]} zoom={20}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
      <MapMarker />
      <Marker position={[latitude, longitude]}>
        <Popup>
          <p> You are here</p>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
