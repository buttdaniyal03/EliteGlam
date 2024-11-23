// src/Components/ClinicDetail.js
import React from "react";

// const ClinicDetail = () => {
//   const { clinicId } = useParams();
//   const [selectedClinic, setSelectedClinic] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const { clinics } = useClinics(); // Access clinics data from the context
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (clinics && clinics.length > 0) {
//       const clinic = clinics.find((c) => c.clinicId === clinicId);
//       setSelectedClinic(clinic);
//       setLoading(false);
//     } else {
//       setLoading(false);
//     }
//   }, [clinics, clinicId]);

//   return (
//     <div>
//       <div>
//         <p className="text-2xl font-medium mb-3 text-center">Clinic Details</p>
//       </div>

//       {loading ? (
//         <p>Loading clinic details...</p>
//       ) : selectedClinic ? (
//         <div>
//           <h2 className="text-xl font-semibold mb-4 text-center">
//             {selectedClinic.clinicName}
//           </h2>
//           <p className="text-center mb-4">{selectedClinic.clinicAddress}</p>
//           <div className="top-doctor-grid">
//             {selectedClinic.dermatologists.length > 0 ? (
//               selectedClinic.dermatologists.map((item) => (
//                 <div
//                   onClick={() => navigate(`/appointment/${item._id}`)}
//                   className="top-doctor-card"
//                   key={item._id}
//                 >
//                   <img src={item.image} alt={item.name} />
//                   <div className="top-doctor-card-content">
//                     <div className="top-doctor-status">
//                       <span className="top-doctor-status-indicator"></span>
//                       <span>Available</span>
//                     </div>
//                     <p className="top-doctor-name">{item.name}</p>
//                     <p className="top-doctor-experience">{item.experience}</p>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p>No dermatologists found in this clinic.</p>
//             )}
//           </div>
//         </div>
//       ) : (
//         <p>No clinic found with the specified ID.</p>
//       )}
//     </div>
//   );
// };

// export default ClinicDetail;

const ClinicDetail = () => {
  return <div>ClinicDetail</div>;
};

export default ClinicDetail;
