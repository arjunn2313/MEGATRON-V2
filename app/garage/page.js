 import Layout from "@/components/layout/Layout"
import {
  FaTools,
  FaCar,
  FaCogs,
  FaTint,
  FaPaintRoller,
  FaCouch,
  FaCheckCircle
} from "react-icons/fa"

export const metadata = {
  title: "Best Luxury Used Cars in Dubai | Optimus Megatron Cars",
  description:
    "Best luxury and used cars in Dubai. Optimus Megatron Cars offers inspected premium vehicles with finance assistance and export support.",
};


export default function Garage() {
  return (
    <Layout headerStyle={1} footerStyle={1}>
 
    <section className="detailing-hero pt-100 pb-100">
        <div className="widget-banner-car-listing banner-car-listing-list mt-5">
          <div className="themesflat-container full">
            <div className="banner-car-listing">
              <span className="sub-title">Complete Car Care Under One Roof</span>
              <h1 className="title text-white mt-10">
            Optimus <span className="text-gold">Megatron</span> Garage
              </h1>
              <p className="text-white mt-12">
              Precision. Performance. Passion.  
              From routine care to performance upgrades, we bring your car
              back to life with expert craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="pt-70 pb-70 mt-5">
        <div className="themesflat-container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-30">
              <h2>About Our Garage</h2>
              <p className="mt-20">
                At Optimus Megatron Garage, we combine advanced tools,
                certified expertise, and premium-quality products to ensure
                every detail of your vehicle is perfected.
              </p>
              <p>
                From a spotless interior to a powerful engine performance,
                our garage services are designed to exceed expectations and
                deliver results you can feel on the road.
              </p>
            </div>

            <div className="col-lg-6 mb-30">
              <img
                src="/assets/images/garage/about.jpg"
                alt="Garage Service"
                className="img-fluid radius-16"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
 {/* WHY CHOOSE US */}
<section className="why-choose-us pt-80 pb-80 py-5">
  <div className="themesflat-container">
    <div className="heading-section text-center mb-60">
      <span className="sub-title text-gold">Why Choose Us</span>
      <h2 className="title text-white">Trusted Garage Experts</h2>
      <p className="text-muted mt-10">
        Experience precision service, advanced technology, and unmatched
        automotive expertise.
      </p>
    </div>

    <div className="row">
      {whyChoose.map((item, i) => (
        <div key={i} className="col-lg-4 col-md-6 mb-30">
          <div className="offer-box modern-dark text-center">
            <FaCheckCircle className="offer-icon" />
            <h5 className="text-white">{item}</h5>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* SERVICES */}
    {/* SERVICES */}
<section className="pt-80 pb-80 py-5 garage-services" >
  <div className="themesflat-container">
    <div className="heading-section text-center mb-60">
      <span className="sub-title">Our Services</span>
      <h2 className="title">Garage Services</h2>
      <p className="text-muted mt-10">
        Professional automotive care engineered for performance, safety,
        and long-term reliability.
      </p>
    </div>

    <div className="row">
      {services.map((service, index) => (
        <div key={index} className="col-lg-4 col-md-6 mb-30">
          <div className="service-card modern text-center">
            <div className="service-icon-wrap">
              <service.icon className="service-icon" />
            </div>

            <h5>{service.title}</h5>
            <p className="service-desc">{service.desc}</p>

            <ul className="service-points">
              {service.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* CTA */}
   <section className="pt-80 pb-80 bg-dark text-center py-5">
  <div className="themesflat-container">
    <h2 className="text-white">
      Let’s Get Your Car Ready to Shine
    </h2>

    <p className="text-muted mt-10">
      Book your service today and experience automotive care that exceeds
      expectations.
    </p>

    <div className="cta-buttons mt-35 d-flex justify-content-center gap-3 flex-column flex-sm-row">
      <a
        href="/assets/brochure/Megatron-Garage-Brochure.pdf"
        target="_blank"
        className="btn btn-outline-gold"
      >
        View Brochure
      </a>

      <a
        href="https://wa.me/971565049928"
        target="_blank"
        className="btn btn-primarys"
      >
        Book Garage Service
      </a>
    </div>
  </div>
</section>


    </Layout>
  )
}

const whyChoose = [
  "Certified & Experienced Technicians",
  "Advanced Tools & Technology",
  "Quality Products & Genuine Parts",
  "Customer-First Service",
  "Trusted by Car Enthusiasts",
   "Transparent Pricing & Honest Advice"
]

 const services = [
  {
    title: "Car Detailing",
    desc:
      "Comprehensive interior and exterior detailing that restores your vehicle’s original showroom finish.",
    points: [
      "Deep interior cleaning & sanitization",
      "Exterior foam wash & machine polishing",
      "Paint protection & long-lasting shine"
    ],
    icon: FaCar
  },
  {
    title: "Engine Cleaning & Restoration",
    desc:
      "Professional engine bay cleaning designed to improve performance and extend engine life.",
    points: [
      "Safe degreasing & detailing",
      "Heat-resistant cleaning methods",
      "Improved engine efficiency & durability"
    ],
    icon: FaCogs
  },
  {
    title: "Tinting & Wrapping",
    desc:
      "Enhance comfort, privacy, and style with premium window tinting and custom vehicle wraps.",
    points: [
      "UV & heat-blocking window tints",
      "Matte, gloss & custom wraps",
      "Protects original paintwork"
    ],
    icon: FaTint
  },
  {
    title: "Alloy & Wheel Restoration",
    desc:
      "Restore the original brilliance of alloy wheels with expert repair and polishing services.",
    points: [
      "Scratch & curb damage repair",
      "Brake dust & stain removal",
      "High-gloss protective finish"
    ],
    icon: FaPaintRoller
  },
  {
    title: "Tuning & Performance Upgrades",
    desc:
      "Customized performance tuning solutions to enhance power, efficiency, and driving response.",
    points: [
      "Engine & ECU optimization",
      "Improved throttle response",
      "Model-specific performance upgrades"
    ],
    icon: FaTools
  },
  {
    title: "Upholstery & Interior Refurbishing",
    desc:
      "Luxury interior restoration services that refresh comfort, aesthetics, and cabin quality.",
    points: [
      "Leather & fabric seat restoration",
      "Dashboard & trim refinishing",
      "Premium interior detailing"
    ],
    icon: FaCouch
  }
]
