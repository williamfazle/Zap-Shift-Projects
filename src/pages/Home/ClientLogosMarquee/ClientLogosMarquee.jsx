import React from "react";
import Marquee from "react-fast-marquee";


// Import your logos
import logo1 from "../../../assets/brands/logo1.png";
import logo2 from "../../../assets/brands/logo2.png";
import logo3 from "../../../assets/brands/logo3.png";
import logo4 from "../../../assets/brands/logo4.png";
import logo5 from "../../../assets/brands/logo5.png";
import logo6 from "../../../assets/brands/logo6.png";
import logo7 from "../../../assets/brands/logo7.png";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];


const ClientLogosMarquee = () => {
  return (
    <section className="py-10 bg-gray-100">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-2xl text-primary font-bold text-center mb-12">Trusted by Leading Brands</h2>

      {/* ✅ react-fast-marquee handles scrolling */}
      <Marquee pauseOnHover={true} speed={50} gradient={false}>
        {logos.map((logo, idx) => (
          <div key={idx} className="flex items-center  mx-24">
            <img
              src={logo}
              alt={`client-${idx}`}
              className="h-6 w-auto object-contain"  // ~24px height
            />
          </div>
        ))}
      </Marquee>
      </div>
    </section>
  );
};

export default ClientLogosMarquee;
