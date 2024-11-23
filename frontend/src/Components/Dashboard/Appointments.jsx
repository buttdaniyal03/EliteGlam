import React from "react";

const Appointments = () => {
  const upcomingAppointments = [
    { id: 1, date: "2024-11-15", time: "10:00 AM", salon: "Glam Hub" },
    { id: 2, date: "2024-11-20", time: "2:00 PM", salon: "Beauty Bliss" },
  ];

  const pastAppointments = [
    { id: 1, date: "2024-10-30", salon: "Style Studio", review: "Loved it!" },
  ];

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Appointments</h2>
      <div className="mb-6">
        <h3 className="font-medium mb-2">Upcoming Appointments</h3>
        <ul className="space-y-2">
          {upcomingAppointments.map((appointment) => (
            <li key={appointment.id} className="text-gray-700">
              {appointment.date} - {appointment.time} at {appointment.salon}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-medium mb-2">Past Appointments</h3>
        <ul className="space-y-2">
          {pastAppointments.map((appointment) => (
            <li key={appointment.id} className="text-gray-700">
              {appointment.date} at {appointment.salon} - {appointment.review}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Appointments;
