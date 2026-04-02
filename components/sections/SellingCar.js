 "use client";
import { useState } from "react";
import Link from "next/link";

export default function SellingCar() {
  const [activeItem, setActiveItem] = useState(1);

  const handleMouseOver = (index) => {
    setActiveItem(index);
  };

  return (
    <div className="widget-selling-car">
      <div className="themesflat-container">
        <div className="selling-car-wrap">

          {/* HEADER */}
          <div className="heading-section t-al-center mb-60">
            <span className="sub-title mb-6">
              Buy • Sell • Service
            </span>
            <h2 className="title">
              Your Complete Car Solution
            </h2>
          </div>

          <div className="selling-car">

            {/* LEFT SIDE */}
            <div className="selling-carpart">

              {/* <div className="offer-bg">
                <div className="offer">
                  <div className="offer-sale">
                    TRUST<span>ED</span>
                  </div>
                </div>
              </div> */}

              <div className="carpart">
                <img
                  src="./assets/images/page/mast.png"
                  alt=""
                  className="mask"
                />
                <img
                  src="./assets/images/c/car.png"
                  alt="car"
                  className="car"
                />
              </div>

              {/* DOT 1 - BUY */}
              <div
                className={`item-dot right ${activeItem === 1 ? "active" : ""}`}
                onMouseOver={() => handleMouseOver(1)}
              >
                <div className="inner">
                  <div className="group-title">
                    <div className="title">Buy Premium Cars</div>
                  </div>
                  <div className="description">
                    <p>
                      Explore verified luxury and used cars at the best prices.
                    </p>
                  </div>
                </div>
              </div>

              {/* DOT 2 - SELL */}
              <div
                className={`item-dot dot-1 right ${
                  activeItem === 2 ? "active" : ""
                }`}
                onMouseOver={() => handleMouseOver(2)}
              >
                <div className="inner">
                  <div className="group-title">
                    <div className="title">Sell Your Car Fast</div>
                  </div>
                  <div className="description">
                    <p>
                      Get instant valuation and sell your car with zero hassle.
                    </p>
                  </div>
                </div>
              </div>

              {/* DOT 3 - GARAGE */}
              <div
                className={`item-dot dot-2 ${
                  activeItem === 3 ? "active" : ""
                }`}
                onMouseOver={() => handleMouseOver(3)}
              >
                <div className="inner">
                  <div className="group-title">
                    <div className="title">Garage & Service</div>
                  </div>
                  <div className="description">
                    <p>
                      Professional servicing and repair by expert technicians.
                    </p>
                  </div>
                </div>
              </div>

              {/* DOT 4 - FINANCE */}
              <div
                className={`item-dot dot-3 ${
                  activeItem === 4 ? "active" : ""
                }`}
                onMouseOver={() => handleMouseOver(4)}
              >
                <div className="inner">
                  <div className="group-title">
                    <div className="title">Finance & Support</div>
                  </div>
                  <div className="description">
                    <p>
                      Easy financing, insurance & full customer support.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="selling-content">

              <span className="sub-selling">Megatron Services</span>

              <h4 className="title-selling text-dark">
                Buy, Sell & Service Your Car in One Place
              </h4>

              <p className="des">
                At Megatron, we simplify your car journey. Buy premium cars,
                sell instantly at the best price, and get expert garage services—
                all in one platform.
              </p>

              {/* FEATURES */}
              <div className="parameter">
                <ul>
                  <li>
                    <div className="inner">
                      <span>Buy Cars</span>
                      <p>Verified Listings</p>
                    </div>
                  </li>
                  <li>
                    <div className="inner">
                      <span>Sell Cars</span>
                      <p>Instant Valuation</p>
                    </div>
                  </li>
                  <li>
                    <div className="inner">
                      <span>Garage</span>
                      <p>Expert Service</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* BUTTONS */}
<div className="btn-main">
  <Link href="/car-list" className="button_main_inner">
    <span>Buy Car</span>
  </Link>

 <a
  href="https://wa.me/971565049928?text=Hi%20I%20want%20to%20sell%20my%20car"
  target="_blank"
  rel="noopener noreferrer"
   className="button_main_inner"
>
  
    <span>Sell Car</span>
</a>
</div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}