"use client";

import Layout from "@/components/layout/Layout";
import { useEffect, useState } from "react";

export default function GarageServices() {
  const [isToggled, setToggled] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setToggled(window.innerWidth >= 992);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // const services = [
  //   {
  //     title: "General Car Service",
  //     img: "/assets/images/garage/gs.jpg",
  //   },
  //   {
  //     title: "Engine Diagnostics",
  //     img: "/assets/images/garage/eg.jpg",
  //   },
  //   {
  //     title: "Brake & Suspension Repair",
  //     img: "/assets/images/garage/su.jpg",
  //   },
  //   {
  //     title: "Oil Change & Maintenance",
  //     img: "/assets/images/garage/oil.jpg",
  //   },
  //   {
  //     title: "AC Repair & Gas Refill",
  //     img: "/assets/images/garage/ac.jpg",
  //   },
  //   {
  //     title: "Battery Replacement",
  //     img: "/assets/images/garage/battery.jpg",
  //   },
  // ];

  const services = [
  {
    title: "Car Detailing",
    img: "/assets/images/garage/detailing.jpg",
    desc: "Restore your car’s showroom shine with interior cleaning, exterior polishing, waxing, and paint protection.",
  },
  {
    title: "Engine Cleaning & Restoration",
    img: "/assets/images/garage/oil.jpg",
    desc: "Deep engine bay cleaning to improve performance, safety, and long-term durability.",
  },
  {
    title: "Tinting & Wrapping",
    img: "/assets/images/garage/wrap.jpg",
    desc: "Premium window tinting and custom vehicle wraps for style, comfort, and protection.",
  },
  {
    title: "Alloy & Wheel Restoration",
    img: "/assets/images/garage/alloy.jpg",
    desc: "Repair, repaint, and polish alloy wheels to restore shine and protect against corrosion.",
  },
  {
    title: "Tuning & Performance Upgrades",
    img: "/assets/images/garage/eg.jpg",
    desc: "ECU tuning and performance enhancements to boost power, efficiency, and driving dynamics.",
  },
  {
    title: "Upholstery & Interior Refurbishing",
    img: "/assets/images/garage/interior.jpg",
    desc: "From seat repair to full interior detailing, we refresh your cabin to a premium finish.",
  },
];

const showroomServices = [
  {
    title: "Luxury, Premium & Economy Cars",
    desc: "Explore a curated selection of luxury, premium, and economy vehicles under one roof.",
    img: "/assets/images/showroom/luxury.jpg",
  },
  {
    title: "Park & Sell Service",
    desc: "Showcase your car in our showroom while we handle marketing, enquiries, and sales.",
    img: "/assets/images/showroom/park-sell.jpg",
  },
  {
    title: "Buy & Sell with Confidence",
    desc: "Transparent pricing, verified listings, and expert guidance for every transaction.",
    img: "/assets/images/showroom/buy-sell.jpg",
  },
  {
    title: "Certified Vehicle Inspection",
    desc: "Every vehicle passes a certified multi-point inspection for performance and safety.",
    img: "/assets/images/showroom/inspection.jpg",
  },
  {
    title: "Easy Financing Options",
    desc: "Flexible financing plans with quick approvals to help you drive your dream car.",
    img: "/assets/images/showroom/finance.jpg",
  },
  {
    title: "Worldwide Car Export",
    desc: "Global vehicle export with complete documentation and trusted logistics support.",
    img: "/assets/images/showroom/export.jpg",
  },
];


const detailingServices = [
  {
    title: "Complete Car Detailing",
    desc: "Interior deep cleaning and exterior polishing for a spotless, showroom-quality finish.",
    img: "/assets/images/detailing/detailings.jpg",
  },
  {
    title: "Ceramic Coating",
    desc: "Long-lasting ceramic protection with extreme gloss, hydrophobic effect, and durability.",
    img: "/assets/images/detailing/ceramic.jpg",
  },
  {
    title: "Paint Protection Film (PPF)",
    desc: "Premium PPF to protect your paint from scratches, chips, and UV damage.",
    img: "/assets/images/detailing/ppf.jpg",
  },
  {
    title: "Alloy Restoration & Polishing",
    desc: "Restore alloy wheels by removing stains, scratches, and brake dust.",
    img: "/assets/images/detailing/alloy.jpg",
  },
  {
    title: "Engine Cleaning",
    desc: "Safe engine bay cleaning to enhance performance and extend engine life.",
    img: "/assets/images/detailing/engine.jpg",
  },
  {
    title: "Upholstery Restoration",
    desc: "Leather rejuvenation and interior refurbishing with premium materials.",
    img: "/assets/images/detailing/upholstery.jpg",
  },
  {
    title: "Window Tinting",
    desc: "Heat & UV blocking window tints for privacy, comfort, and style.",
    img: "/assets/images/detailing/tint.jpg",
  },
  {
    title: "Vehicle Wrapping",
    desc: "Matte, gloss, and custom wraps to transform your car’s look while protecting paint.",
    img: "/assets/images/detailing/wrap.jpg",
  },
];


  return (
    <Layout headerStyle={1} footerStyle={1}>
      {/* HERO BANNER */}
      <div className="widget-banner-car-listing banner-car-listing-list mt-5">
        <div className="themesflat-container full">
          <div className="banner-car-listing">
            <span className="sub-title">Trusted Garage Services</span>
            <h1 className="title text-white">
              Megatron <span className="text-red">Car Garage</span>
            </h1>
            <p className="text-white mt-12">
              Professional car servicing, repairs & diagnostics under one roof
            </p>
          </div>
        </div>
      </div>

      {/* ABOUT GARAGE */}
      <section className="garage-about mt-80">
        <div className="themesflat-container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="image-wrapper mt-5">
                <img
                  src="/assets/images/garage/why.jpg"
                  alt="Car Garage Service"
                  style={{
                    width: "520px",
                    height: "380px",
                    objectFit: "cover",
                    borderRadius: "16px",
                  }}
                />
              </div>
            </div>

            <div className="col-lg-6 mt-5">
              <h3 className="mb-20">Why Choose Our Garage?</h3>
              <p>
                We provide high-quality automotive repair and maintenance
                services using modern tools and experienced technicians. Whether
                it's routine servicing or complex repairs, your car is in safe
                hands.
              </p>
              <ul className="mt-20">
                <li>✔ Certified mechanics</li>
                <li>✔ Genuine spare parts</li>
                <li>✔ Transparent pricing</li>
                <li>✔ Quick turnaround</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="garage-services mt-5">
        <div className="themesflat-container">
          {/* <div className="heading-section text-center mb-40">
            <span className="sub-title">What We Offer</span>
            <h2 className="title">Our Garage Services</h2>
          </div> */}

          <div className="heading-section text-center mb-40">
  <span className="sub-title">Professional Auto Care</span>
  <h2 className="title">
    Expert <span className="text-red">Garage Services</span> Under One Roof
  </h2>
  <p className="mt-12">
    From routine maintenance to advanced repairs, our certified technicians
    deliver reliable, high-quality automotive services you can trust.
  </p>
</div>


          <div className="row">
            {services.map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-30">
                <div className="service-card">
                  <div className="service-image">
                    <img src={service.img} alt={service.title} />
                  </div>

                  <h5 className="mt-20">{service.title}</h5>
                  <p>
                    Reliable and professional {service.title.toLowerCase()} with
                    quality assurance.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


{/* SHOWROOM SERVICES SECTION */}
<section className="showroom-services my-5">
  <div className="themesflat-container">
    <div className="heading-section text-center mb-40">
      <span className="sub-title">Megatron Showroom</span>
      <h2 className="title">
        Premium <span className="text-red">Car Showroom Services</span>
      </h2>
      <p className="mt-12">
        Buy, sell, or showcase your car with complete confidence and transparency.
      </p>
    </div>

    <div className="row">
      {showroomServices.map((service, index) => (
        <div key={index} className="col-lg-4 col-md-6 mb-30">
          <div className="service-card h-100">
            <div className="service-image">
              {/* <img src={service.img} alt={service.title} /> */}
            </div>

            <h5 className="mt-20">{service.title}</h5>
            <p>{service.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


{/* DETAILING SERVICES SECTION */}
<section className="detailing-services my-5 bg-dar text-white">
  <div className="themesflat-container">
    <div className="heading-section text-center mb-40">
      <span className="sub-title text-warning">
        Optimus Megatron Detailing Studio
      </span>
      <h2 className="title">
        Redefining <span className="text-warning">Perfection</span>   
         One Car at a Time
      </h2>
      <p className="mt-12">
        Premium car detailing, paint protection, and restoration services
        designed to make your vehicle look and feel brand new.
      </p>
    </div>

    <div className="row">
      {detailingServices.map((service, index) => (
        <div key={index} className="col-lg-3 col-md-6 mb-30">
          <div className="service-card h-100 bg-black borde border-warning">
            <div className="service-image">
              <img src={service.img} alt={service.title} />
            </div>

            <h5 className="mt-20 text-warning">{service.title}</h5>
            <p className="text-light">{service.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* USED CAR SALES SECTION */}
<section className="used-car-sales my-5">
  <div className="themesflat-container">
    <div className="row align-items-center">
      {/* CONTENT */}
      <div className="col-lg-6">
        <span className="sub-title">Premium Used Cars</span>
        <h2 className="title mb-20">
          Certified <span className="text-red">Pre-Owned Cars</span> for Sale
        </h2>

        <p className="mb-20">
          Along with professional garage services, Megatron Car Garage also
          offers a curated collection of premium used cars. Each vehicle is
          thoroughly inspected, serviced, and quality-checked before sale.
        </p>

        <ul className="mb-30">
          <li>✔ Fully inspected & serviced vehicles</li>
          <li>✔ Transparent history & pricing</li>
          <li>✔ Premium brands available</li>
          <li>✔ Test drive & instant support</li>
        </ul>

        <div className="d-flex gap-3">
          <a href="/car-list" className="btn btn-warning px-4 py-2">
            View Used Cars
          </a>

          {/* <a
            href="https://wa.me/971565049928?text=Hi%20I%20am%20interested%20in%20your%20premium%20used%20cars"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-dark px-4 py-2"
          >
            WhatsApp Us
          </a> */}
        </div>
      </div>

      {/* IMAGE */}
      <div className="col-lg-6 mt-4 mt-lg-0">
        <img
          src="/assets/images/garage/vintage.jpg"
          alt="Premium Used Cars"
          style={{
            width: "100%",
            height: "600px",
            objectFit: "cover",
            borderRadius: "16px",
          }}
        />
      </div>
    </div>
  </div>
</section>


      {/* GALLERY SECTION */}
      <section className="garage-gallery my-5">
        <div className="themesflat-container">
          <div className="heading-section mb-40">
            <h2 className="title">Our Workshop</h2>
            <p className="description">
              A glimpse into our modern facilities and professional working
              environment.
            </p>
          </div>

          <div className="row">
            {[
              "/assets/images/garage/s (1).JPG",
              "/assets/images/garage/s (2).JPG",
              "/assets/images/garage/s (3).JPG",
              "/assets/images/garage/s (4).JPG",
            ].map((img, index) => (
              <div key={index} className="col-lg-3 col-md-6 mb-30">
                <div className="gallery-image">
                  <img src={img} alt={`Workshop ${index + 1}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}

   <section className="cta-section py-5 bg-dark text-white">
  <div className="themesflat-container text-center">
    <h2 className="my-3">Need a Quick Repair?</h2>
    <p className="my-4">
      We offer same-day service for most minor repairs and maintenance.
    </p>

    <div className="d-flex justify-content-center gap-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/971565049928?text=Hi%20I%20would%20like%20to%20book%20a%20car%20service"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-danger px-5 py-3"
      >
        Book Appointment
      </a>

      {/* Contact Page Button */}
      <a href="/contact-us" className="btn btn-outline-light px-5 py-3">
        Contact Us
      </a>
    </div>
  </div>
</section>

    </Layout>
  );
}
