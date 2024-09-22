import { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const Map = () => {
  useEffect(() => {
    const map = L.map('map', {
      center: [-21.2922, -50.3428],
      zoom: 13,
      scrollWheelZoom: false,
      attributionControl: false,
      zoomControl: false,
      doubleClickZoom: false,
      dragging: false,
      tap: false,
      boxZoom: false,
      keyboard: false,
      tap: false,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(map);

    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ height: '500px', width: '100%' }} />;
};

export default Map;
