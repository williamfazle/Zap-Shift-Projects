import React from "react";
import ServiceCard from "./ServiceCard";


// Import icons from react-icons
import { 
     FaShippingFast,
     FaMapMarkedAlt,
     FaWarehouse,
     FaMoneyBillWave,
     FaBuilding,
     FaUndo
     } from "react-icons/fa";

const servicesData = [
  {
    title: "Express & Standard Delivery",
    description: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    icon: FaShippingFast,
  },
  {
    title: "Nationwide Delivery",
    description: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    icon: FaMapMarkedAlt,
  },
  {
    title: "Fulfillment Solution",
    description: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    icon: FaWarehouse,
  },
  {
    title: "Cash on Home Delivery",
    description: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    icon: FaMoneyBillWave,
  },
  {
    title: "Corporate Service / Contract In Logistics",
    description: "Customized corporate services which includes warehouse and inventory management support.",
    icon: FaBuilding,
  },
  {
    title: "Parcel Return",
    description: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    icon: FaUndo,
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-base-200">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl text-primary font-bold mb-4">Our Services</h2>
        <p className="text-gray-600">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. 
          From personal packages to business shipments – we deliver on time, every time.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, idx) => (
         <ServiceCard

         key={idx}
         service={service}

         ></ServiceCard>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
