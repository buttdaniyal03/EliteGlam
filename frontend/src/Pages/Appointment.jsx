import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets";
import { AppContext } from "../Components/Context/AppContext";

const Appointment = () => {
  const { docId } = useParams();
  const navigate = useNavigate();
  const { dermatologist, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const fetchDocInfo = async () => {
    if (dermatologist) {
      const docInfo = dermatologist.find((doc) => doc._id === docId.toString());
      setDocInfo(docInfo);
      console.log(docInfo);
    }
  };

  const getAvailableSlots = async () => {
    const newSlots = [];

    // Getting current date
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      // Getting date with index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      // Setting end time of date with index
      let endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0); // Assuming 9 PM is the end time

      // Setting Hours for start of time slots
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10); // Assuming 10 AM is the start time
        currentDate.setMinutes(0);
      }

      // Collecting time slots
      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        // Add slot to array
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        // Increment time by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      // Add the day’s slots to the main slots array
      newSlots.push(timeSlots);
    }

    // Update state once after the loop completes
    setDocSlots(newSlots);
  };

  useEffect(() => {
    fetchDocInfo();
  }, [dermatologist, docId]);

  useEffect(() => {
    if (docInfo) {
      getAvailableSlots();
    }
  }, [docInfo]);

  return (
    <div>
      {docInfo ? (
        <div>
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Doctor Image */}
            <div>
              <img
                className="bg-primary w-[18rem] sm:mx-0 rounded-lg"
                src={docInfo.image}
                alt={docInfo.name}
              />
            </div>

            <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
              {/* Doctor Info */}
              <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
                {docInfo.name}
                {assets.verified_icon && (
                  <img src={assets.verified_icon} alt="Verified" />
                )}
              </p>

              <div className="flex items-center gap-2 text-sm mt-1 text-gray-500">
                <p>
                  {docInfo.degree} - {docInfo.speciality}
                </p>

                <button className="py-0.5 px-2 border text-sm rounded-full">
                  {docInfo.experience} years of experience
                </button>
              </div>

              {/* About Doctor */}
              <div>
                <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                  About <img src={assets.info_icon} alt="Info" />
                </p>
                <p className="text-sm text-gray-500 max-w-[700px] mt-1">
                  {docInfo.about}
                </p>
              </div>
              <p className="text-gray-500 font-medium mt-4">
                Appointment Fee:{" "}
                <span className="text-gray-600">
                  {docInfo.fees} {currencySymbol}
                </span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      {/* BOOKING SLOTS */}
      <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
        <p>Booking Slots</p>

        <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
          {docSlots.length > 0 &&
            docSlots.map((item, index) => (
              <div
                className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                  slotIndex === index
                    ? "bg-primary text-white"
                    : "border border-gray-200"
                }`}
                key={index}
                onClick={() => setSlotIndex(index)}
              >
                <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>
              </div>
            ))}
        </div>

        {/* Slot Times */}
        <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
          {docSlots.length > 0 &&
            docSlots[slotIndex].map((item, index) => (
              <p
                onClick={() => setSlotTime(item.time)}
                className={`text-sm font-light flex-shrink-0 py-2 px-2 rounded-full cursor-pointer ${
                  item.time === slotTime
                    ? "bg-primary text-white"
                    : "text-gray-400 border border-gray-300"
                }`}
                key={index}
              >
                {item.time.toLowerCase()}
              </p>
            ))}
        </div>
        <button className="bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6">
          Book an Appointment
        </button>
      </div>

      {/* Listing Related Doctors */}

      <div className="top-doctor-container py-8">
        <h1 className="top-doctor-title text-2xl font-semibold text-center mb-6">
          Related Doctors
        </h1>

        <div className="top-doctor-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {dermatologist
            .sort(() => Math.random() - 0.5) // Shuffle the array
            .slice(0, 4) // Display 4 random doctors
            .map((item, index) => (
              <div
                onClick={() => {
                  navigate(`/appointment/${item._id}`);
                  window.scroll(0, 0);
                }}
                className="top-doctor-card bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                key={index}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover"
                />
                <div className="top-doctor-card-content p-4">
                  <div className="top-doctor-status flex items-center mb-2">
                    <span className="top-doctor-status-indicator w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                    <span className="text-sm text-gray-600">Available</span>
                  </div>
                  <p className="top-doctor-name text-lg font-medium text-gray-800">
                    {item.name}
                  </p>
                  <p className="top-doctor-experience text-sm text-gray-500">
                    {item.experience}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Appointment;
