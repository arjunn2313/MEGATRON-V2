import Layout from "@/components/layout/Layout";
import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaCheckCircle, FaCar, FaGlobe } from "react-icons/fa"

export const metadata = {
  title: "Best Luxury Used Cars in Dubai | Optimus Megatron Cars",
  description:
    "Best luxury and used cars in Dubai. Optimus Megatron Cars offers inspected premium vehicles with finance assistance and export support.",
};


export default function Showroom() {
  return (
    <Layout headerStyle={1} footerStyle={1}>
      {/* HERO / BANNER */}
      <div className="widget-banner-car-listing banner-car-listing-list mt-5">
        <div className="themesflat-container full">
          <div className="banner-car-listing">
            <span className="sub-title">Luxury • Premium • Economy Cars</span>

            <h1 className="title text-white">
              Optimus <span className="text-gold">Megatron Car Showroom</span>
            </h1>

            <p className="text-white mt-12">
              Discover luxury, premium, and economy vehicles under one roof.
              Buy, sell, or showcase your car with complete transparency and
              confidence.
            </p>
          </div>
        </div>
      </div>

      {/* ABOUT SHOWROOM */}
      <section className="about-showroom pt-80 pb-80">
        <div className="themesflat-container">
          <div className="row align-items-center">
            <div className="col-lg-6 ">
              <span className="sub-title">Who We Are</span>
              <h2 className="mb-25">Drive with Confidence. Always.</h2>

              <p>
                Optimus Megatron is a leading car showroom in Dubai, UAE, built
                on a foundation of trust, transparency, and automotive
                excellence. We proudly present a handpicked range of luxury,
                premium, and economy vehicles designed to match the expectations
                of today’s discerning drivers.
              </p>

              <p className="mt-12">
                Situated within Dubai’s renowned automotive district, our
                showroom serves as a one-stop destination for customers seeking
                quality, reliability, and long-term value. Every vehicle
                showcased at Optimus Megatron undergoes detailed inspection to
                ensure performance, safety, and peace of mind.
              </p>

              <p className="mt-12">
                Beyond buying, we redefine selling through our exclusive
                <strong> Park & Sell</strong> service. By showcasing your
                vehicle in our showroom, we manage everything — professional
                marketing, verified inspections, buyer screening, negotiation,
                and final documentation — ensuring a seamless and stress-free
                selling experience.
              </p>

              <p className="mt-12">
                With flexible financing options, global export support, and a
                customer-first approach, Optimus Megatron is more than a
                showroom — it’s a long-term automotive partner committed to
                helping you drive with complete confidence across every journey.
              </p>
            </div>

            <div className="col-lg-6">
              <div className="showroom-image-wrapper mt-5">
                <img
                  src="/assets/images/showroom/sale.jpg"
                  alt="Optimus Megatron Luxury Car Showroom in Dubai UAE"
                  className="radius-12 showroom-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POSTER / BROCHURE SECTION */}
      <section className="showroom-poster  pt-80 pb-80">
        <div className="themesflat-container full">
          <div className="heading-section text-center my-5">
            <span className="sub-title">Inside Our Showroom</span>
            <h2 className="title text-white">
              A Glimpse of Automotive Excellence
            </h2>
          </div>

          <div className="themesflat-container">
            <div className="row gx-4 justify-content-center">
              <div className="col-lg-4 col-md-6 mb-30">
                <img
                  src="/assets/images/showroom/c1.jpg"
                  alt="Showroom Poster"
                  className="radius-12 w-100"
                />
              </div>

              <div className="col-lg-4 col-md-6 mb-30">
                <img
                  src="/assets/images/showroom/c2.jpg"
                  alt="Luxury Cars Poster"
                  className="radius-12 w-100"
                />
              </div>

              <div className="col-lg-4 col-md-6 mb-30">
                <img
                  src="/assets/images/showroom/c3.jpg"
                  alt="Premium Cars Poster"
                  className="radius-12 w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAR CATEGORIES */}
 <section className="showroom-categories pt-60 pb-60">
  <div className="themesflat-container">
    <div className="heading-section text-center mb-5">
      <span className="sub-title">Our Collection</span>
      <h2 className="title">Explore Our Cars</h2>
      <p className="mt-10 text-muted">
        From luxury masterpieces to smart everyday drives — find the car that
        fits your lifestyle.
      </p>
    </div>

    <div className="row">
      {/* Luxury Cars */}
      <div className="col-lg-4 col-md-6  ">
        <div className="category-card modern">
          <div className="category-img">
            <img
              src="/assets/images/showroom/b1.png"
              alt="Luxury Cars"
            />
          </div>
          <div className="category-content mt-3">
            <h4>Luxury Cars</h4>
            <p>
              Flagship sedans and elite SUVs featuring handcrafted interiors,
              cutting-edge technology, and commanding road presence.
            </p>
            <span className="category-link">View Luxury Collection →</span>
          </div>
        </div>
      </div>

      {/* Premium Cars */}
      <div className="col-lg-4 col-md-6  ">
        <div className="category-card modern">
          <div className="category-img">
            <img
              src="/assets/images/showroom/b2.jpg"
              alt="Premium Cars"
            />
          </div>
          <div className="category-content mt-3">
            <h4>Premium Cars</h4>
            <p>
              Perfect balance of performance, comfort, and style — ideal for
              drivers who want more than just transportation.
            </p>
            <span className="category-link">Browse Premium Cars →</span>
          </div>
        </div>
      </div>

      {/* Economy Cars */}
      <div className="col-lg-4 col-md-6 mb-30">
        <div className="category-card modern">
          <div className="category-img">
            <img
             src="/assets/images/showroom/b3.jpg"
              alt="Economy Cars"
            />
          </div>
          <div className="category-content mt-3">
            <h4>Economy Cars</h4>
            <p>
              Fuel-efficient, reliable, and affordable vehicles designed for
              daily commuting and smart ownership.
            </p>
            <span className="category-link">Explore Economy Cars →</span>
          </div>
        </div>
      </div>
    </div>

    <div className="row ">
  <div className="col-12">
    <div className="category-cta text-center my-5">
      <a href="/car-list" className="btn btn-primary me-3 ">
        View Listings
      </a>
      <a
        href="/assets/brochure/showroom-brochure.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-outline"
      >
        View Brochure
      </a>
    </div>
  </div>
</div>
  </div>
</section>


      {/* REELS / VIDEO SECTION */}
 <section className="showroom-reels bg-dar pt-80 pb-80 mt-5">
  <div className="themesflat-container">
    <div className="heading-section text-center mb-40">
      <span className="sub-title">Experience the Vibe</span>
      <h2 className="title text-white">Showroom Shorts</h2>
      <p className="text-muted mt-10">
        {/* Real showroom moments, car walkarounds & delivery highlights */}
      </p>
    </div>

    <div className="row justify-content-center">
      {/* Reel 1 */}
      <div className="col-lg-4 col-md-6 mb-30">
        <div className="video-card short">
          <iframe
            src="https://www.youtube.com/embed/0LfyUWHNQy4?controls=0&loop=1"
            title="Showroom Reel 1"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      </div>

      {/* Reel 2 */}
      <div className="col-lg-4 col-md-6 mb-30">
        <div className="video-card short">
          <iframe
            src="https://www.youtube.com/embed/9AZeY237bdY?controls=0&loop=1"
            title="Showroom Reel 2"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      </div>

      {/* Reel 3 */}
      <div className="col-lg-4 col-md-6 mb-30">
        <div className="video-card short">
          <iframe
            src="https://www.youtube.com/embed/MjJp2Ls7X2k?controls=0&loop=1"
            title="Showroom Reel 3"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      </div>
    </div>
    {/* YouTube Channel CTA */}
<div className="row">
  <div className="col-12">
    <div className="text-center mt-40">
      <a
        href="https://www.youtube.com/@OptimusMegatronCarsUAE/shorts"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-youtube"
      >
          <FaYoutube size={18} />
        Watch More on YouTube
      </a>
    </div>
  </div>
</div>

  </div>
</section>


      {/* WHAT WE OFFER */}
    <section className="what-we-offer pt-60 pb-60 my-5">
  <div className="themesflat-container">
    <div className="heading-section text-center mb-40">
      <span className="sub-title">Why Choose Us</span>
      <h2 className="title">What We Offer</h2>
    </div>

    <div className="row">
      <div className="col-lg-4 mb-30">
        <div className="offer-box bordered text-center">
          <FaCheckCircle className="offer-icon" />
          <h5 className="text-dark">Certified Quality</h5>
          <p>
            Every vehicle passes a certified multi-point inspection for
            guaranteed reliability and performance.
          </p>
        </div>
      </div>

      <div className="col-lg-4 mb-30">
        <div className="offer-box bordered text-center">
          <FaCar className="offer-icon" />
          <h5 className="text-dark">Park & Sell Service</h5>
          <p>
            Showcase your car in our showroom while we handle marketing,
            inspections, and closing the deal.
          </p>
        </div>
      </div>

      <div className="col-lg-4 mb-30">
        <div className="offer-box bordered text-center">
          <FaGlobe className="offer-icon" />
          <h5 className="text-dark">Global Export & Financing</h5>
          <p>
            Easy financing options and worldwide export services with
            trusted logistics support.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
    </Layout>
  );
}
