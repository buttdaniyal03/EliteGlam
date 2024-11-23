// import L from "leaflet";
// import React, { useEffect, useState } from "react";
// import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

// // Import the marker icon
// import markerIcon from "leaflet/dist/images/marker-icon.png";

// // Assuming you will pass `salonLocation` prop with latitude and longitude
// const SalonMap = ({ salonLocation }) => {
//   const [userLocation, setUserLocation] = useState([51.505, -0.09]); // Default location for user

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition((position) => {
//         setUserLocation([position.coords.latitude, position.coords.longitude]);
//       });
//     }
//   }, []);

//   const customIcon = new L.Icon({
//     iconUrl: markerIcon, // Using the imported icon here
//     iconSize: [25, 41],
//     iconAnchor: [12, 41],
//     popupAnchor: [1, -34],
//   });

//   function LocationMarker({ position }) {
//     const map = useMap();
//     map.setView(position, 13); // Adjust zoom level

//     return null;
//   }

//   return (
//     <div style={{ height: "500px", width: "100%" }}>
//       <MapContainer
//         center={salonLocation || userLocation}
//         zoom={13}
//         style={{ height: "100%", width: "100%" }}
//       >
//         <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

//         {/* Salon Location Marker */}
//         <Marker position={salonLocation} icon={customIcon}>
//           <Popup>
//             <div>
//               <h3>Elite Glam Salon</h3>
//               <p>Opening Hours: 9:00 AM - 6:00 PM</p>
//               <a
//                 href={`https://www.google.com/maps/dir/?api=1&destination=${salonLocation[0]},${salonLocation[1]}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Get Directions
//               </a>
//             </div>
//           </Popup>
//         </Marker>

//         {/* User Location Marker */}
//         <Marker position={userLocation} icon={customIcon}>
//           <Popup>
//             <div>
//               <h3>Your Location</h3>
//             </div>
//           </Popup>
//         </Marker>

//         {/* Update map center to user location */}
//         <LocationMarker position={userLocation} />
//       </MapContainer>
//     </div>
//   );
// };

// export default SalonMap;
