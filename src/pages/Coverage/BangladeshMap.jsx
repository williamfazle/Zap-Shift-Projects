import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Example: Dhaka city center coordinates
  const position = [23.6850, 90.3563];


// Custom marker icon (Leaflet default marker fix for Vite/React)
const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// --- Component to move map ---
function FlyToDistrict ({ coords }){
  const map = useMap();
  if (coords) {
    map.flyTo(coords, 14, { duration: 1.5 });
  }
  return null;
}

const BangladeshMap = ({warehouses}) => {
     const [searchText, setSearchText] = useState("");
      const [activeCoords, setActiveCoords] = useState(null);
       const [activeDistrict, setActiveDistrict] = useState(null);

    const handleSearch = (e) => {
         e.preventDefault();
    const district = warehouses.find(d =>
      d.district.toLowerCase().includes(searchText.toLowerCase())
    );
    if (district) {
      setActiveCoords([district.latitude, district.longitude]);
      setActiveDistrict(district.district);
    }
  };

  return (
    <div>
      {/* Map container */}
      <div className="h-[800px] w-full rounded-lg overflow-hidden shadow-lg relative">
        
        <form
        onSubmit={handleSearch}
        className="absolute top-4 left-1/2 transform -translate-x-1/2 z-[1000] w-full max-w-md px-4 flex">

             {/* Search Box */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search district..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="input input-bordered w-64 mr-2"
        />
        <button onClick={handleSearch} className="btn btn-primary">
          Search
        </button>
      </div>

        </form>
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={false}
       className="h-full w-full z-0">

          {/* Base map tiles (OpenStreetMap) */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        
        <FlyToDistrict coords={activeCoords}/>
          {/* Example marker */}
         {
            warehouses.map((center, index) =>  <Marker 
            key={index}
            position={[center.latitude, center.longitude]} 
            icon={customIcon}>
            <Popup autoOpen={center.district === activeDistrict}>
                <strong>{center.district}</strong><br />
                {center.covered_area.join(', ')}
            </Popup>
          </Marker>)
         }
        </MapContainer>
      </div>
    </div>
  );
};

export default BangladeshMap;
