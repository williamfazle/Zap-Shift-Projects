import React from "react";

const BenefitCard = ({ image, title, description }) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl border hover:bg-base-200 transition">
      <div className="card-body flex-row items-center">
        {/* Left side (icon/image) */}
        <img src={image} alt={title} className="w-16 h-16 object-content"/>

        {/* Divider */}
        <div className="mx-4 h-16 w-px bg-gray-300"></div>

        {/* Right side (content) */}
        <div>
          <h3 className="card-title text-lg mb-2">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BenefitCard;
