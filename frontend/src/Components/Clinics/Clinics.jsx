// // // src/Components/Clinics.js
// // import React, { useEffect, useState } from "react";
// // import { useNavigate, useParams } from "react-router-dom";

// // import React, { useContext } from "react";
// // import { AppContext } from "../Components/Context/AppContext";

// // const Clinics = () => {
// //   const { speciality } = useParams();
// //   const [filterDoc, setFilterDoc] = useState([]);
// //   const [loading, setLoading] = useState(true); // Loading state
// //   const { dermatologist } = useContext(AppContext);
// //   const navigate = useNavigate();

// //   const applyFilter = () => {
// //     if (speciality) {
// //       setFilterDoc(
// //         dermatologist.filter((doc) => doc.speciality === speciality)
// //       );
// //     } else {
// //       setFilterDoc(dermatologist);
// //     }
// //     setLoading(false); // Stop loading when filter is applied
// //   };

// //   useEffect(() => {
// //     if (dermatologist && dermatologist.length > 0) {
// //       applyFilter();
// //     } else {
// //       setLoading(false); // Stop loading if no dermatologist data
// //     }
// //   }, [dermatologist, speciality]);

// //   return (
// //     <div>
// //       <div>
// //         <p className="text-2xl font-medium mb-3 text-center">
// //           Browse through Derma Specialists:
// //         </p>
// //       </div>

// //       {/* Loading state */}
// //       {loading ? (
// //         <p>Loading dermatologists...</p>
// //       ) : (
// //         <div className="top-doctor-grid">
// //           {filterDoc.length > 0 ? (
// //             filterDoc.map((item, index) => (
// //               <div
// //                 onClick={() => navigate(`/appointment/${item._id}`)}
// //                 className="top-doctor-card"
// //                 key={index}
// //               >
// //                 <img src={item.image} alt={item.name} />
// //                 <div className="top-doctor-card-content">
// //                   <div className="top-doctor-status">
// //                     <span className="top-doctor-status-indicator"></span>
// //                     <span>Available</span>
// //                   </div>
// //                   <p className="top-doctor-name">{item.name}</p>
// //                   <p className="top-doctor-experience">{item.experience}</p>
// //                 </div>
// //               </div>
// //             ))
// //           ) : (
// //             <p>No dermatologists found for the selected speciality.</p>
// //           )}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Clinics;

// // // const Clinics = () => {
// // //   const { clinicId } = useParams(); // Get clinicId from URL params
// // //   const [selectedClinic, setSelectedClinic] = useState(null); // State for selected clinic
// // //   const [loading, setLoading] = useState(true); // Loading state
// // //   const { clinics } = useClinics(); // Access clinics data from the context
// // //   const navigate = useNavigate();

// // //   useEffect(() => {
// // //     if (clinics && clinics.length > 0) {
// // //       const clinic = clinics.find((c) => c.clinicId === clinicId);
// // //       setSelectedClinic(clinic);
// // //       setLoading(false);
// // //     } else {
// // //       setLoading(false); // Stop loading if no clinic data is available
// // //     }
// // //   }, [clinics, clinicId]);

// // //   return (
// // //     <div>
// // //       <div>
// // //         <p className="text-2xl font-medium mb-3 text-center">
// // //           Browse through Dermatology Clinics:
// // //         </p>
// // //       </div>

// // //       {/* Loading state */}
// // //       {loading ? (
// // //         <p>Loading clinics...</p>
// // //       ) : selectedClinic ? (
// // //         <div>
// // //           <h2 className="text-xl font-semibold mb-4 text-center">
// // //             {selectedClinic.clinicName}
// // //           </h2>
// // //           <p className="text-center mb-4">{selectedClinic.clinicAddress}</p>
// // //           <div className="top-doctor-grid">
// // //             {selectedClinic.dermatologists.length > 0 ? (
// // //               selectedClinic.dermatologists.map((item) => (
// // //                 <div
// // //                   onClick={() => navigate(`/appointment/${item._id}`)}
// // //                   className="top-doctor-card"
// // //                   key={item._id}
// // //                 >
// // //                   <img src={item.image} alt={item.name} />
// // //                   <div className="top-doctor-card-content">
// // //                     <div className="top-doctor-status">
// // //                       <span className="top-doctor-status-indicator"></span>
// // //                       <span>Available</span>
// // //                     </div>
// // //                     <p className="top-doctor-name">{item.name}</p>
// // //                     <p className="top-doctor-experience">{item.experience}</p>
// // //                   </div>
// // //                 </div>
// // //               ))
// // //             ) : (
// // //               <p>No dermatologists found in this clinic.</p>
// // //             )}
// // //           </div>
// // //         </div>
// // //       ) : (
// // //         <p>No clinic found with the specified ID.</p>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default Clinics;

// import React from "react";

// const Clinics = () => {
//   return <div>Clinics Component</div>;
// };

// export default Clinics;
