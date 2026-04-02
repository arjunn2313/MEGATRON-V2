"use client";

import Image from "next/image";
import { FaCar, FaCheckCircle, FaDollarSign } from "react-icons/fa";
 

export default function SellCarSection() {
  return (
    <section className="sell-section">
      <div className="sell-container">

        {/* TOP CONTENT */}
        <div className="sell-header">
          <h2>Sell Your Car</h2>
          <p>
            Convert your car into instant cash with ease. Our experienced team
            offers honest pricing and a smooth, hassle-free selling process—no
            hidden costs, no unexpected surprises.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="sell-grid">

          {/* LEFT IMAGE */}
          <div className="sell-image-wrapper">
            <Image
              src="/assets/sell.jpeg" // put image in public folder
              alt="Sell Car"
              fill
              className="sell-image"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="sell-cards">

            <div className="sell-card">
              <FaCar className="sell-icon" />
              <div>
                <h4>Instant Vehicle Valuation</h4>
                <p>
                  Receive a fast, accurate estimate of your car’s worth using
                  smart pricing technology.
                </p>
              </div>
            </div>

            <div className="sell-card  ">
              <FaCheckCircle className="sell-icon" />
              <div>
                <h4>Smooth, Stress-Free Process</h4>
                <p>
                  Enjoy quick transactions with minimal paperwork—we handle
                  everything from start to finish.
                </p>
              </div>
            </div>

            <div className="sell-card">
              <FaDollarSign className="sell-icon" />
              <div>
                <h4>Best Market Value</h4>
                <p>
                  Get competitive offers based on real-time market trends and
                  your vehicle condition.
                </p>
              </div>
            </div>

 <a
  href="https://wa.me/971565049928?text=Hi%20I%20want%20to%20sell%20my%20car"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="sell-btn">
    Sell Your Car Now
  </button>
</a>
          </div>
        </div>
      </div>
    </section>
  );
}