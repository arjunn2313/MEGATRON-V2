"use client";
import Link from "next/link";
import { useState } from "react";
import VideoPopup from "../elements/VideoPopup";

export default function Slide() {
  const [isToggled, setToggled] = useState(true);
  const handleToggle = () => setToggled(!isToggled);
  return (
    <>
      <div className="widget-tf-slider ">
        <div className="slider-wrap swiper-wrapper">
          <div className="tf-slide-item swiper-slide">
            <div className="slide-item-image">
              <img src="/assets/images/slide/bg1.jpg" alt="" />
              <div className="overlay" />
            </div>
            <div className="slide-item-content">
              <div className="slide-content">
                <span
                  className="wow fadeInUp sub-title"
                  data-wow-delay="100ms"
                  data-wow-duration="2000ms"
                >
                  Trusted Used Car Dealer
                </span>

                <h1
                  className="title-slide wow slideInUp"
                  data-wow-delay="50ms"
                  data-wow-duration="200ms"
                >
                  Premium Pre-Owned Car  
                </h1>

                <p
                  className="description wow fadeInUp"
                  data-wow-delay="300ms"
                  data-wow-duration="2000ms"
                >
                  Discover carefully inspected, high-quality used cars with
                  transparent history, fair pricing, and complete peace of mind.
                </p>

                <div className="box">
                  {/* Button */}
                  <div
                    className="btn-main wow fadeInUp"
                    data-wow-delay="400ms"
                    data-wow-duration="2000ms"
                  >
                    <Link href="/car-list" className="button_main_inner">
                      <span>Go To Listing</span>
                    </Link>
                  </div>

                  {/* Video */}
                  <div
                    className="video-wrap wow fadeInUp"
                    data-wow-delay="500ms"
                    data-wow-duration="2000ms"
                  >
                    <VideoPopup style={2} />
                  </div>
                </div>
              </div>

              <div className="slide-image">
                <img
                  src="/assets/images/slide/icon.png"
                  className="icon-shape wow swing"
                  alt=""
                />
                <div className="box-offer">
                  <p>
                    40 <span>%</span>
                  </p>
                  <span>off</span>
                </div>
                <div className="box-car">
                  <img src="/assets/images/slide/car.png" alt="" />
                  <div className="dot-car">
                    <div className="dot">
                      {/* <i
                        className={
                          isToggled
                            ? "icon-Vector-5  active"
                            : " icon-Vector-5 "
                        }
                        onClick={handleToggle}
                      ></i> */}
                      {/* <div
                        className={
                          isToggled
                            ? "content-price  active"
                            : " content-price "
                        }
                      >
                        <div className="proflile">
                          <span>Luxury Ford Car</span>
                          <span className="price">$13000</span>
                        </div>
                        <p>Al Khail St - Al Quoz Industrial Area 3 - Dubai</p>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="box">
                <span>+(971) 0527094940</span>
                <span>optimusmegatroncars@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
