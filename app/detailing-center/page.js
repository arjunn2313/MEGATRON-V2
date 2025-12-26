import Layout from "@/components/layout/Layout";
import {
  FaCar,
  FaShieldAlt,
  FaPaintRoller,
  FaCogs,
  FaTint,
  FaCouch,
} from "react-icons/fa";

export const metadata = {
  title: "Top Used Car Dealer in Dubai UAE | Optimus Megatron Cars",
  description:
    "Find the best used cars in Dubai and UAE. Optimus Megatron Cars provides certified vehicles, transparent pricing, finance assistance, and export services.",
};



export default function DetailingCenter() {
  return (
    <Layout headerStyle={1} footerStyle={1}>
      {/* HERO */}
      <section className="detailing-hero pt-100 pb-100">
        <div className="widget-banner-car-listing banner-car-listing-list mt-5">
          <div className="themesflat-container full">
            <div className="banner-car-listing">
              <span className="sub-title"> Premium Car Detailing & Care </span>
              <h1 className="title text-white mt-10">
                Optimus <span className="text-gold">Megatron</span> Detailing
                Center
              </h1>
              <p className="text-white mt-12">
                Redefining perfection — one car at a time. From deep detailing
                to advanced paint protection, we transform your vehicle into a
                showroom-grade masterpiece.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="pt-60 pb-60">
        <div className="themesflat-container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-30">
              <h2>Redefining Perfection</h2>
              <p className="mt-20">
                At Optimus Megatron Cars, detailing is not just a service — it’s
                an art of precision and care. Located in the heart of Dubai, we
                specialize in high-end detailing, protection, and vehicle
                rejuvenation.
              </p>
              <p>
                With advanced techniques and premium-grade products, every
                vehicle receives personalized attention to restore brilliance,
                elegance, and long-term protection.
              </p>
              <strong className="text-gold">
                Drive Clean. Shine Bold. Stay Protected.
              </strong>
            </div>

            <div className="col-lg-6 mb-30">
              <img
                src="/assets/images/detailing/about.jpg"
                alt="Car Detailing"
                className="img-fluid radius-16 detailing-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
   <section className="pt-80 pb-80 detailing-services mt-5">
  <div className="themesflat-container">
    <div className="heading-section text-center mb-60">
      <span className="sub-title ">Our Expertise</span>
      <h2 className="title">Detailing Services</h2>
      <p className="text-muted mt-10">
        Precision-crafted car care solutions designed to protect, enhance, and
        elevate your driving experience.
      </p>
    </div>

    <div className="row  ">
      {services.map((service, index) => (
        <div key={index} className="col-lg-4 col-md-6 mb-30">
          <div className="service-card modern">
            <div className="service-icon-wrap">
              <service.icon className="service-icon" />
            </div>

            <h5 className="text-warning">{service.title}</h5>
            <p>{service.desc}</p>

            <ul className="service-points  ">
              {service.points.map((point, i) => (
                <li key={i}>✔ {point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* PPF & WRAP */}
 <section className="pt-80 pb-80 ppf-section">
  <div className="themesflat-container">
    <div className="row align-items-center">
      <div className="col-lg-6 mb-30">
        <div className="ppf-img-wrap">
          <img
            src="/assets/images/detailing/ppf.jpg"
            alt="PPF"
            className="img-fluid"
          />
        </div>
      </div>

      <div className="col-lg-6 mb-30">
        <span className="ppf-subtitle">Paint Protection Film</span>
        <h2 className="ppf-title">Invisible Shield. Visible Perfection.</h2>

        <p className="mt-20 ppf-desc">
          Protect your vehicle from scratches, stone chips, and UV damage with
          our premium Paint Protection Film (PPF) and high-quality vehicle
          wrapping solutions.
        </p>

        <ul className="ppf-list mt-5">
          <li>Hood, roof, doors & full-panel protection</li>
          <li>Matte, gloss & custom wrap finishes</li>
          <li>Crystal-clear clarity with long-lasting durability</li>
        </ul>
      </div>
    </div>
  </div>
</section>


      {/* CTA */}
   <section className="pt-80 pb-80 bg-  cta-posters">
  <div className="themesflat-container">
    <div className="heading-section text-center mb-50">
      <h2 className="text-white">Give Your Car the Care It Deserves</h2>
      <p className="text-muted mt-10">
        Premium detailing, protection, and restoration — crafted for those who
        care about perfection.
      </p>
    </div>

    {/* Posters */}
    <div className="row mt-5">
      <div className="col-lg-4 col-md-6 mb-30">
        <div className="cta-poster">
          <img src="/assets/images/detailing/cover.jpg" alt="Detailing" />
          <h5>Complete Car Detailing</h5>
          <p>Restore showroom shine inside & out</p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 mb-30">
        <div className="cta-poster">
          <img src="/assets/images/detailing/cover2.jpg" alt="PPF & Ceramic" />
          <h5>PPF & Ceramic Coating</h5>
          <p>Invisible protection with lasting gloss</p>
        </div>
      </div>

<div className="col-lg-4 col-md-6 mb-30">
  <div className="cta-poster offer">
   
    <img
      src="/assets/images/detailing/cover3.jpg"
      alt="PPF Offer"
    />

    <h5>PPF Special Offer</h5>
    <p>
      FREE window tinting for customers who choose Paint Protection  
    </p>
  </div>
</div>

    </div>

    {/* Buttons */}
    <div className="text-center d-flex justify-content-center gap-3 flex-column flex-sm-row">
      <a
        href="/assets/brochure/Detailing-Brochure.pdf"
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
        Book Appointment
      </a>
    </div>
  </div>
</section>

    </Layout>
  );
}

 const services = [
  {
    title: "Complete Car Detailing",
    desc:
      "A comprehensive interior and exterior detailing service that restores your car’s original showroom shine and cleanliness.",
    points: [
      "Deep interior vacuum & sanitization",
      "Exterior foam wash & polishing",
      "Paint decontamination & protection"
    ],
    icon: FaCar
  },
  {
    title: "Ceramic Coating",
    desc:
      "Advanced ceramic coating that delivers mirror-like gloss and long-term protection against harsh weather and road conditions.",
    points: [
      "High-gloss hydrophobic finish",
      "UV & chemical resistance",
      "Long-lasting durability"
    ],
    icon: FaShieldAlt
  },
  {
    title: "Alloy Restoration & Polishing",
    desc:
      "Restore the original brilliance of your alloy wheels by removing brake dust, scratches, and stains.",
    points: [
      "Brake dust & stain removal",
      "Scratch correction",
      "High-shine wheel finish"
    ],
    icon: FaPaintRoller
  },
  {
    title: "Performance Tuning",
    desc:
      "Customized performance tuning designed to improve power, efficiency, and driving smoothness.",
    points: [
      "Engine optimization",
      "Throttle response enhancement",
      "Model-specific tuning"
    ],
    icon: FaCogs
  },
  {
    title: "Engine Cleaning",
    desc:
      "Safe and professional engine bay cleaning to improve performance and  extend engine lifespan.",
    points: [
      "Degreasing & detailing",
      "Heat-safe cleaning methods",
      "Improved engine longevity"
    ],
    icon: FaCogs
  },
  {
    title: "Window Tinting & Upholstery",
    desc:
      "Enhance comfort and style with premium window tinting and complete  interior restoration services.",
    points: [
      "Heat & UV protection tints",
      "Leather & fabric restoration",
      "Luxury interior finish"
    ],
    icon: FaTint
  }
];

