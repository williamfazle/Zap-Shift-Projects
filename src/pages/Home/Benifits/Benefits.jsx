import React from "react";
import { FaMapMarkedAlt, FaShieldAlt, FaHeadset } from "react-icons/fa";
import BenefitCard from "./BenefitCard";
import track from "../../../assets/benefits/track.png";
import call from "../../../assets/benefits/call.png";
import support from "../../../assets/benefits/support.png";

const benefits = [
  {
    id: 1,
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    image: track,
  },
  {
    id: 2,
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    image: call,
  },
  {
    id: 3,
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    image: support,
  }
];

const Benefits = () => {
  return (
    <div className="py-12 bg-base-100">
      <h2 className="text-3xl font-bold text-center mb-10">Our Benefits</h2>

      <div className="flex flex-col gap-6">
        {benefits.map((benefit) => (
          <BenefitCard
            key={benefit.id}
            image={benefit.image}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Benefits;
