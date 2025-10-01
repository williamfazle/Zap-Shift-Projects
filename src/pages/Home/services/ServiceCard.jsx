import React from "react";

const ServiceCard = ({ service }) => {
    const {icon: Icon, title, description} = service
  return (
    <div className="card bg-base-100 shadow-md p-6 hover:shadow-lg transition rounded-2xl">
      <div className="flex items-center space-x-4 mb-4">
        <div className="text-primary text-3xl">
          <Icon />
        </div>
        <h3 className="text-lg font-semibold mb-2 text-primary">{title}</h3>
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default ServiceCard;
