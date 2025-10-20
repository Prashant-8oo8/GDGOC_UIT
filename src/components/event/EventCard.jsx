import React from "react";
import { useNavigate } from "react-router-dom";

const EventCard = ({
  title,
  image,
  description,
  link = "#",
  status = "open",
  disabled = false,
  id,
  onClick, // Optional: custom click handler
}) => {
  const navigate = useNavigate();

  // Normalize and determine status color
  const normalizedStatus = status.toLowerCase();
  const statusColor =
    normalizedStatus === "open"
      ? "text-green-600"
      : normalizedStatus === "extended"
      ? "text-yellow-500"
      : "text-red-600";

  // Event card click handler
  const handleClick = () => {
    if (disabled || normalizedStatus === "closed") return;
    onClick ? onClick() : navigate(link);
  };

  return (
    <div
      onClick={handleClick}
      className={`bg-white rounded-lg overflow-hidden shadow-md transition-shadow duration-300 w-full sm:w-[300px]
        ${disabled || normalizedStatus === "closed"
          ? "cursor-not-allowed opacity-60"
          : "hover:shadow-xl cursor-pointer"
        }
      `}
      aria-label={`Event: ${title} - Status: ${status}`} // Accessible label
    >
      <img
        src={image}
        alt={`Image for ${title}`} // Improved alt text
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
        <h4 className={`text-sm uppercase font-semibold ${statusColor} mb-2`}>
          {status}
        </h4>
        <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
      </div>
    </div>
  );
};

export default EventCard;
