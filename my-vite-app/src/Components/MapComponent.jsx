import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapComponent = () => {
  // Define center coordinates and markers
  const mapCenter = { lat: 22.9734, lng: 78.6569 }; // Center of India
  const markers = [
    { lat: 28.6139, lng: 77.209 }, // Example: Delhi
    { lat: 19.076, lng: 72.8777 }, // Example: Mumbai
    { lat: 13.0827, lng: 80.2707 }, // Example: Chennai
  ];

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={{ height: "550px", width: "100%" }}
        center={mapCenter}
        zoom={5}
      >
        {markers.map((position, index) => (
          <Marker key={index} position={position} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
