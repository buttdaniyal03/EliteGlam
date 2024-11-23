import React from "react";

const SalonReviews = ({ reviews }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
      {reviews && reviews.length > 0 ? (
        <div className="space-y-4">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow-md border border-gray-200"
            >
              <p className="text-lg font-medium">{review.customerName}</p>
              <p className="text-yellow-500 font-bold">
                Rating: {review.rating} ⭐
              </p>
              <p className="text-gray-600">{review.comment}</p>
              <p className="text-sm text-gray-400">{review.date}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No reviews available.</p>
      )}
    </div>
  );
};

export default SalonReviews;
