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

  const services = [
    {
      title: "General Car Service",
      img: "/assets/images/garage/gs.jpg",
    },
    {
      title: "Engine Diagnostics",
      img: "/assets/images/garage/eg.jpg",
    },
    {
      title: "Brake & Suspension Repair",
      img: "/assets/images/garage/su.jpg",
    },
    {
      title: "Oil Change & Maintenance",
      img: "/assets/images/garage/oil.jpg",
    },
    {
      title: "AC Repair & Gas Refill",
      img: "/assets/images/garage/ac.jpg",
    },
    {
      title: "Battery Replacement",
      img: "/assets/images/garage/battery.jpg",
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
          <div className="heading-section text-center mb-40">
            <span className="sub-title">What We Offer</span>
            <h2 className="title">Our Garage Services</h2>
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
              "/assets/images/garage/s (1).jpg",
              "/assets/images/garage/s (2).jpg",
              "/assets/images/garage/s (3).jpg",
              "/assets/images/garage/s (4).jpg",
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
