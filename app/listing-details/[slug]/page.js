"use client";
import ModalOfferPrice from "@/components/elements/ModalOfferPrice";
import ModalTestDriver from "@/components/elements/ModalTestDriver";
import Layout from "@/components/layout/Layout";
import ThumbSlider from "@/components/slider/ThumbSlider";
import cars from "@/js/data/cars";
import Link from "next/link";
import { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 4,
  spaceBetween: 30,
  observer: true,
  roundLengths: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
};
export default function ListingDetails({ params }) {
  const { slug } = params;
  const car = cars.find((item) => item.slug === slug);

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    const whatsappMessage = `
Hi, I am contacting from Optimus Megatron Cars website.

👤 Name: ${name}
📧 Email: ${email}
📞 Phone: ${phone}
💬 Message: ${message}
    `.trim()

    const whatsappUrl = `https://wa.me/971565049928?text=${encodeURIComponent(
      whatsappMessage
    )}`

    window.open(whatsappUrl, "_blank")
  }

  if (!car) {
    notFound();
  }

  const overviewFields = [
  { label: "Condition", value: car.condition || "Used", icon: "icon-Vector5" },
  { label: "Cylinders", value: car.overview.cylinders, icon: "icon-Group-1000002834" },
  // { label: "Stock Number", value: car.overview.stockNumber, icon: "icon-Vector-13" },
  { label: "Fuel Type", value: car.overview.fuelType, icon: "icon-Group5" },
  // { label: "VIN Number", value: car.overview.vin, icon: "icon-Vector-13" },
  { label: "Doors", value: car.overview.doors, icon: "icon-Group-15" },
  { label: "Year", value: car.overview.year, icon: "icon-Vector-13" },
  { label: "Color", value: car.overview.color, icon: "icon-Format-color-fill" },
  { label: "Mileage", value: car.overview.mileage, icon: "icon-dashboard-2" },
  { label: "Seats", value: car.overview.seats, icon: "icon-Group-22" },
  { label: "Transmission", value: car.overview.transmission, icon: "icon-Vector-22" },
  { label: "City MPG", value: car.overview.cityMPG, icon: "icon-Group-31" },
  { label: "Engine Size", value: car.overview.engineSize, icon: "icon-engine-1" },
  { label: "Highway MPG", value: car.overview.highwayMPG, icon: "icon-Group-31" },
  { label: "Drive Type", value: car.overview.driveType, icon: "icon-steering-wheel-1" },
];


  const [isToggled4, setToggled4] = useState(false);
  const handleToggle4 = () => setToggled4(!isToggled4);
  const [isToggled5, setToggled5] = useState(false);
  const handleToggle5 = () => setToggled5(!isToggled5);

  const { features } = car;

  const relatedCars = cars
  .filter(c => c.slug !== car.slug)
  .slice(0, 6); // limit slides


  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <div>
          <div className="widget-breakcrumb">
            <div className="themesflat-container">
              <div className="breakcrumb">
                <div className="title-breakcrumb">
                  <Link className="home" href="/">
                    Home
                  </Link>
                  <span>Property Listing</span>
                </div>
              </div>
            </div>
          </div>
          {/* Breakcrumb */}
          {/* property-detail */}
          <div className="widget-property-detail">
            <div className="themesflat-container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="wrap-property-car flex">
                    <div className="box-1">
                      <div className="icon-box-info flex">
                        <div className="info-sale">
                          <span className="sale">-34%</span>
                        </div>
                        <div className="info flex text-light">
                          <span className="text-light">Make:</span>
                          <span className="fw-4 text-light">{car.make}</span>
                        </div>
                        <div className="info flex">
                          <span className="text-light">Model:</span>
                          <span className="fw-4 text-light">{car.model}</span>
                        </div>
                        <div className="info flex">
                          <span className="text-light">Body:</span>
                          <span className="fw-4 text-light">{car.bodyType}</span>
                        </div>
                      </div>
                      <div className="title-heading text-white">
                       {car.title}
                      </div>
                      <div className="text-address">
                        <i className="icon-map-1-1" />
                        <p className="text-white">{car.location.city}</p>
                      </div>
                    </div>
                    <div className="box-2 t-al-right">
                      <div className="icon-boxs flex">
                        <Link href="/#">
                          <i className="icon-heart-1-1" />
                          <span className="text-white">Favorite</span>
                        </Link>
                        <Link href="/#">
                          <i className="icon-shuffle-2-11" />
                          <span className="text-white">Compare</span>
                        </Link>
                      </div>
                      <div className="price-wrap flex text-white">
                        <p className="price-sale text-white">{Number(car.salePrice).toLocaleString()}{car.currency}</p>
                        <p className="price text-warning">{Number(car.price).toLocaleString()} {car.currency}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="gallary-property-details">
                    {/* <ThumbSlider /> */}
                    <ThumbSlider images={car.images} />

                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8 col-md-12">
                  <div className="post-property">
                    <div className="wrap-description wrap-style">
                      <h4 className="title">Description</h4>
                      <p>
                        {car.description}
                      </p>
                    </div>
                    <div className="wrap-car-overview wrap-style">
  <h4 className="title">Car Overview</h4>

  <div className="listing-info">
    <div className="row">
      {overviewFields.map((item, index) =>
        item.value ? (
          <div key={index} className="col-xl-6 col-md-6 item">
            <div className="inner listing-infor-box">
              <div className="icon">
                <i className={item.icon} />
              </div>
              <div className="content-listing-info">
                <span className="listing-info-title">
                  {item.label}:
                </span>
                <p className="listing-info-value">
                  {item.value}
                </p>
              </div>
            </div>
          </div>
        ) : null
      )}
    </div>
  </div>
</div>

                    <div className="wrap-car-feature wrap-style">
  <h4 className="title">Features</h4>

  <div className="tf-listing-info">
    <div id="tf-features">

      {Object.entries(features).map(([category, items]) => (
        <div className="features-item" key={category}>
          <h5 className="features-type-title">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </h5>

          {items.map((feature, index) => (
            <div className="listing-feature-wrap" key={index}>
              <i className="icon-Vector-32" />
              {feature}
            </div>
          ))}
        </div>
      ))}

    </div>
  </div>
</div>

                    {/* <div className="wrap-car-location wrap-style">
                      <h4 className="title">Features</h4>
                      <div className="listing-address">
                        <svg
                          width={22}
                          height={30}
                          viewBox="0 0 22 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11 29.1211C7.48438 23.8477 1.33203 16.6992 1.33203 10.5469C1.33203 5.21596 5.66908 0.878908 11 0.878908C16.3309 0.878908 20.668 5.21596 20.668 10.5469C20.668 16.6992 14.5156 23.8477 11 29.1211Z"
                            stroke="#D01818"
                            strokeWidth={2}
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11 14.9414C8.57697 14.9414 6.60547 12.9699 6.60547 10.5469C6.60547 8.12385 8.57697 6.15234 11 6.15234C13.423 6.15234 15.3945 8.12385 15.3945 10.5469C15.3945 12.9699 13.423 14.9414 11 14.9414Z"
                            stroke="#D01818"
                            strokeWidth={2}
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                      </div>
                      <div className="map2">
                        <div id="map2" />
                      </div>
                    </div> */}
                    {/* <div className="wrap-car-calculator wrap-style">
                      <h4 className="title">Loan Calculator</h4>
                      <form action="/" id="calculator">
                        <div className="input-wrap">
                          <fieldset>
                            <label>Vehicle Price</label>
                            <input type="tel" placeholder="$250000" />
                          </fieldset>
                          <fieldset>
                            <label>Interest Rate</label>
                            <input type="tel" placeholder="$250000" />
                          </fieldset>
                        </div>
                        <div className="input-wrap">
                          <fieldset>
                            <label>Down Payment</label>
                            <input type="tel" placeholder="$250000" />
                          </fieldset>
                          <fieldset>
                            <label>Loan Duration</label>
                            <input type="tel" placeholder="$250000" />
                          </fieldset>
                        </div>
                        <div className="btn-wrap-form mt-45">
                          <div className="btn-main">
                            <button className="button_main_inner" type="submit">
                              Calculate Payment
                            </button>
                          </div>
                          <Link href="/#" className="btn-reset">
                            <i className="icon-rotate-left-circular-arrow-interface-symbol-1" />
                            Reset All
                          </Link>
                        </div>
                      </form>
                    </div> */}
                    {/* <div className="wrap-car-review wrap-style">
                      <h4 className="title">Customer Review</h4>
                      <div className="listing-customer-review">
                        <div id="overall-rating-progress" className="progress">
                          <svg
                            className="progress-circle"
                            width={187}
                            height={186}
                            viewBox="0 0 187 186"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M186 93C186 144.362 144.362 186 93 186C41.6375 186 0 144.362 0 93C0 41.6375 41.6375 0 93 0C144.362 0 186 41.6375 186 93ZM7.84935 93C7.84935 140.027 45.9726 178.151 93 178.151C140.027 178.151 178.151 140.027 178.151 93C178.151 45.9726 140.027 7.84935 93 7.84935C45.9726 7.84935 7.84935 45.9726 7.84935 93Z"
                              fill="#F6F6F6"
                            />
                            <path
                              d="M182.747 65.2706C189.087 85.458 188.32 107.192 180.572 126.887C172.824 146.582 158.559 163.063 140.128 173.61C121.698 184.157 100.204 188.141 79.1915 184.905C58.1789 181.668 38.903 171.404 24.5432 155.807C10.1834 140.209 1.59749 120.209 0.201677 99.105C-1.19414 78.0013 4.68351 57.0547 16.8651 39.7202C29.0468 22.3857 46.8047 9.69872 67.2099 3.75201C87.6151 -2.1947 109.449 -1.04598 129.109 7.0087L126.104 14.2665C108.103 6.89165 88.1118 5.83988 69.4288 11.2847C50.7459 16.7295 34.4867 28.3456 23.3332 44.2171C12.1798 60.0885 6.7982 79.2672 8.0762 98.5897C9.35421 117.912 17.2155 136.224 30.3633 150.506C43.5111 164.787 61.1601 174.184 80.3992 177.148C99.6382 180.111 119.318 176.463 136.193 166.806C153.068 157.149 166.129 142.06 173.223 124.027C180.317 105.994 181.019 86.0945 175.214 67.611L182.747 65.2706Z"
                              fill="#D01818"
                            />
                          </svg>
                          <div className="progress-text" data-progress={0}>
                            <p>Overall Ratings</p>
                            <h3 className="overall-rating-number">4.4</h3>
                            <p>Out Of 5</p>
                          </div>
                        </div>
                        <div className="overall-rating-detail">
                          <div className="overall-rating-detail-item">
                            <label className="overall-rating-detail-label">
                              Comfort
                            </label>
                            <div className="content">
                              <div className="rating-info">
                                <span>Rating 4.8 </span>
                                <div className="overall-rating-detail-star">
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <span>5.0</span>
                                </div>
                              </div>
                              <div
                                className=" bg-primary overall-rating-detail-progress"
                                role="progressbar"
                                aria-valuenow={60}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                          <div className="overall-rating-detail-item">
                            <label className="overall-rating-detail-label">
                              Interior Design
                            </label>
                            <div className="content">
                              <div className="rating-info">
                                <span>Rating 4.8 </span>
                                <div className="overall-rating-detail-star">
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <span>5.0</span>
                                </div>
                              </div>
                              <div
                                className=" bg-primary overall-rating-detail-progress"
                                role="progressbar"
                                aria-valuenow={60}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                          <div className="overall-rating-detail-item">
                            <label className="overall-rating-detail-label">
                              Performance
                            </label>
                            <div className="content">
                              <div className="rating-info">
                                <span>Rating 4.8 </span>
                                <div className="overall-rating-detail-star">
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <span>5.0</span>
                                </div>
                              </div>
                              <div
                                className=" bg-primary overall-rating-detail-progress"
                                role="progressbar"
                                aria-valuenow={60}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                          <div className="overall-rating-detail-item">
                            <label className="overall-rating-detail-label">
                              Speed
                            </label>
                            <div className="content">
                              <div className="rating-info">
                                <span>Rating 4.8 </span>
                                <div className="overall-rating-detail-star">
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <i className="icon-Vector3" />
                                  <span>5.0</span>
                                </div>
                              </div>
                              <div
                                className=" bg-primary overall-rating-detail-progress"
                                role="progressbar"
                                aria-valuenow={60}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <ul className="reviews-list">
                        <li className="review-item">
                          <div className="review-media">
                            <img
                              src="./assets/images/avatar/avt-review.jpg"
                              alt="image"
                            />
                          </div>
                          <div className="review-body">
                            <div className="media-heading d-flex">
                              <Link href="/#">Rohan De Spond</Link>
                              <span className="review-date">25 jan 2021</span>
                            </div>
                            <div className="rating-box d-flex">
                              <label className="rating-comfort_service">
                                very awesome &amp; Comfort
                              </label>
                              <div className="star-rating-review">
                                <i className="icon-Vector3" />
                                <i className="icon-Vector3" />
                                <i className="icon-Vector3" />
                                <i className="icon-Vector3" />
                                <i className="icon-Vector3" />
                                <span>5.0</span>
                              </div>
                            </div>
                            <p className="review-content">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.Curabitur have is covered many vulputate
                              vestibulum Phasellus rhoncus, dolor eget viverra
                              pretium dolor tellus aliquet nunc, vitae ultricies
                              erat elit eu lacus. Vestibul non justo
                              consectetur, cursus ante, tincidunt sapien. Nulla
                              quis
                            </p>
                            <div className="image-review d-flex">
                              <img
                                src="./assets/images/page/rivew-custom.jpg"
                                alt=""
                              />
                              <img
                                src="./assets/images/page/rivew-custom.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                        </li>
                        <li className="review-item">
                          <div className="review-media">
                            <img
                              src="./assets/images/avatar/avt-review.jpg"
                              alt="image"
                            />
                          </div>
                          <div className="review-body">
                            <div className="media-heading d-flex">
                              <Link href="/#">Rohan De Spond</Link>
                              <span className="review-date">25 jan 2021</span>
                            </div>
                            <div className="rating-box d-flex">
                              <label className="rating-comfort_service">
                                very awesome &amp; Comfort
                              </label>
                              <div className="star-rating-review">
                                <i className="icon-Vector3" />
                                <i className="icon-Vector3" />
                                <i className="icon-Vector3" />
                                <i className="icon-Vector3" />
                                <i className="icon-Vector3" />
                                <span>5.0</span>
                              </div>
                            </div>
                            <p className="review-content">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.Curabitur have is covered many vulputate
                              vestibulum Phasellus rhoncus, dolor eget viverra
                              pretium dolor tellus aliquet nunc, vitae ultricies
                              erat elit eu lacus. Vestibul non justo
                              consectetur, cursus ante, tincidunt sapien. Nulla
                              quis
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div> */}
                    {/* <div className="wrap-car-leave-a-reply">
                      <h4 className="title">Customer Review</h4>
                      <form action="/" id="leave-a-reply">
                        <div className="rating-wrap">
                          <div className="rating-box">
                            <label> Comfort </label>
                            <div
                              id="rating_comfort_service"
                              className="star-rating-review"
                            >
                              <i className="icon-Vector3" />
                              <i className="icon-Vector3" />
                              <i className="icon-Vector3" />
                              <i className="icon-Vector3" />
                              <i className="icon-Vector3" />
                            </div>
                          </div>
                          <div className="rating-box">
                            <label> Performance </label>
                            <div
                              id="rating_performance"
                              className="star-rating-review"
                            >
                              <i className="icon-Vector3" />
                              <i className="icon-Vector3" />
                              <i className="icon-Vector3" />
                              <i className="icon-Vector3" />
                              <i className="icon-Vector3" />
                            </div>
                          </div>
                          <div className="rating-box">
                            <label>Interior Design </label>
                            <div
                              id="rating_interior_design"
                              className="star-rating-review"
                            >
                              <i className="icon-Vector3" />
                              <i className="icon-Vector3" />
                              <i className="icon-Vector3" />
                              <i className="icon-Vector3" />
                              <i className="icon-Vector3" />
                            </div>
                          </div>
                          <div className="rating-box">
                            <label> Speed </label>
                            <div
                              id="rating_speed"
                              className="star-rating-review"
                            >
                              <i className="icon-Vector3" />
                              <i className="icon-Vector3" />
                              <i className="icon-Vector3" />
                              <i className="icon-Vector3" />
                              <i className="icon-Vector3" />
                            </div>
                          </div>
                        </div>
                        <div className="post-comment">
                          <div className="d-flex">
                            <fieldset className="input-post-comment">
                              <input type="text" placeholder="First name" />
                              <i className="icon-user-1-1" />
                            </fieldset>
                            <fieldset className="input-post-comment">
                              <input type="email" placeholder="Email Address" />
                              <i className="icon-Group2" />
                            </fieldset>
                          </div>
                          <fieldset className="input-post-comment">
                            <textarea
                              className="write-post-comment"
                              defaultValue={"Write Review"}
                            />
                            <i className="icon-edit-1" />
                          </fieldset>
                          <fieldset className="input-post-comment">
                            <div className="radio">
                              <input
                                id="check-comment"
                                type="checkbox"
                                name="check"
                                defaultValue="check"
                              />
                              <label htmlFor="check-comment">
                                I agree to Terms &amp; Conditions, Refund Policy
                                and Privacy Policy of Fabrilife.
                              </label>
                            </div>
                          </fieldset>
                          <fieldset>
                            <button
                              type="submit"
                              className="button-post-comment"
                            >
                              Post Comment
                            </button>
                          </fieldset>
                        </div>
                      </form>
                    </div> */}
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <div className="driver-price-wrap mb-40">
                    <a
                      className="test-driver mb-16"
                      data-bs-toggle="modal"
                      onClick={handleToggle4}
                      role="button"
                    >
                      Schedule Test Driver
                      <i className="icon-steering-wheel-1" />
                    </a>
                    <a
                      className="offer-price"
                      data-bs-toggle="modal"
                      onClick={handleToggle5}
                      role="button"
                    >
                      Make An Offer Price
                      <i className="icon-Group-12" />
                    </a>
                  </div>
                  <div className="author-contact-listing-wrap">
                    <div className="author-contact-wrap">
                      {/* <div className="author-contact-avatar">
                        <img
                          src="./assets/images/avatar/avt-admin.png"
                          title="image"
                        />
                      </div> */}
                      <div className="author-contact-info">
                        <h4 className="name text-dark"> Admin </h4>
                        <p className="desc">Owner of listing</p>
                        <span className="number-phone">
                          <i className=" icon-Group-14" />
                         +(971) 565049928


                        </span>
                      </div>
                    </div>
                     <form
      className="form-contact-admin"
      aria-label="Contact form"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="group-form">
        <input
          className="admin-form"
          placeholder="Your Name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <i className="icon-user-1-1" />
      </div>

      <div className="group-form">
        <input
          className="admin-form"
          placeholder="Email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <i className="icon-Group2" />
      </div>

      <div className="group-form">
        <input
          className="admin-form"
          placeholder="Enter Phone"
          type="text"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <i className="icon-Group-14" />
      </div>

      <div className="group-form">
        <textarea
          className="admin-form"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <i className="icon-edit-1" />
      </div>

      <button type="submit">Send Message</button>
    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* property-detail */}
          {/* related-single-listing */}
          {/* <div className="widget-related-single-listing">
            <div className="themesflat-container">
              <div className="related-single-listing swiper">
                <Swiper {...swiperOptions} className="swiper-wrapper">
                  <SwiperSlide className="listing-grid-item swiper-slide">
                    <div className="listing-item-image">
                      <div className="hover-listing-image">
                        <div className="wrap-hover-listing">
                          <div
                            className="listing-item active"
                            title="Lexus LC Hybrid 2024"
                          >
                            <div className="images">
                              <img
                                src="./assets/images/car-list/car5.jpg"
                                className="swiper-image tfcl-light-gallery"
                                alt="images"
                              />
                            </div>
                          </div>
                          <div
                            className="listing-item"
                            title="Lexus LC Hybrid 2024"
                          >
                            <div className="images">
                              <img
                                src="./assets/images/car-list/car11.jpg"
                                className="swiper-image lazy tfcl-light-gallery"
                                alt="images"
                              />
                            </div>
                          </div>
                          <div
                            className="listing-item view-gallery"
                            title="Lexus LC Hybrid 2024"
                          >
                            <div className="images">
                              <img
                                src="./assets/images/car-list/car12.jpg"
                                className="swiper-image tfcl-light-gallery"
                                alt="images"
                              />
                              <div className="overlay-limit">
                                <img
                                  src="./assets/images/car-list/img.png"
                                  className="icon-img"
                                  alt="icon-map"
                                />
                                <p>2 more photos</p>
                              </div>
                            </div>
                          </div>
                          <div className="bullet-hover-listing">
                            <div className="bl-item active" />
                            <div className="bl-item" />
                            <div className="bl-item" />
                          </div>
                        </div>
                      </div>
                      <Link href="/#" className="icon-favorite">
                        <i className="icon-heart-1-1" />
                      </Link>
                      <span className="feature">Featured</span>
                    </div>
                    <div className="listing-item-content">
                      <div className="listing-top-content">
                        <h6 className="title">
                          <Link href="/listing-details" />
                          <Link href="/listing-details">
                            Mercedez benz - c class
                          </Link>
                        </h6>
                        <div className="review-wrap">
                          <div className="rating">
                            <i className="icon-Vector3" />
                            <i className="icon-Vector3" />
                            <i className="icon-Vector3" />
                            <i className="icon-Vector3" />
                            <i className="icon-Vector3" />
                          </div>
                          <span className="review">( 2 Reviews )</span>
                        </div>
                        <div className="description">
                          <ul>
                            <li className="listing-information fuel">
                              <i className="icon-gasoline-pump-1" />
                              <div className="inner">
                                <span>Fuel type</span>
                                <p>Petrol</p>
                              </div>
                            </li>
                            <li className="listing-information size-engine">
                              <i className="icon-Group1" />
                              <div className="inner">
                                <span>Mileage</span>
                                <p>90 k.m</p>
                              </div>
                            </li>
                            <li className="listing-information transmission">
                              <i className="icon-gearbox-1" />
                              <div className="inner">
                                <span>Transmission</span>
                                <p>Auto</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <ul className="list-controller">
                          <li>
                            <Link href="/#">
                              <i className="icon-heart-1-1" />
                              <span>Favorite</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/#">
                              <i className="icon-shuffle-2-11" />
                              <span>Compare</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="bottom-price-wrap">
                        <div className="price-wrap">
                          <p className="price">$489</p>
                          <p className="price-sale">$399</p>
                        </div>
                        <div className="btn-read-more">
                          <Link className="more-link" href="/#">
                            <span>View details</span>
                            <i className="icon-arrow-right2" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="listing-grid-item swiper-slide">
                    <div className="listing-item-image">
                      <div className="hover-listing-image">
                        <div className="wrap-hover-listing">
                          <div
                            className="listing-item active"
                            title="Lexus LC Hybrid 2024"
                          >
                            <div className="images">
                              <img
                                src="./assets/images/car-list/car16.jpg"
                                className="swiper-image tfcl-light-gallery"
                                alt="images"
                              />
                            </div>
                          </div>
                          <div
                            className="listing-item"
                            title="Lexus LC Hybrid 2024"
                          >
                            <div className="images">
                              <img
                                src="./assets/images/car-list/car11.jpg"
                                className="swiper-image lazy tfcl-light-gallery"
                                alt="images"
                              />
                            </div>
                          </div>
                          <div
                            className="listing-item view-gallery"
                            title="Lexus LC Hybrid 2024"
                          >
                            <div className="images">
                              <img
                                src="./assets/images/car-list/car12.jpg"
                                className="swiper-image tfcl-light-gallery"
                                alt="images"
                              />
                              <div className="overlay-limit">
                                <img
                                  src="./assets/images/car-list/img.png"
                                  className="icon-img"
                                  alt="icon-map"
                                />
                                <p>2 more photos</p>
                              </div>
                            </div>
                          </div>
                          <div className="bullet-hover-listing">
                            <div className="bl-item active" />
                            <div className="bl-item" />
                            <div className="bl-item" />
                          </div>
                        </div>
                      </div>
                      <Link href="/#" className="icon-favorite">
                        <i className="icon-heart-1-1" />
                      </Link>
                      <span className="feature">Featured</span>
                    </div>
                    <div className="listing-item-content">
                      <div className="listing-top-content">
                        <h6 className="title">
                          <Link href="/listing-details">
                            Mercedez benz - c class
                          </Link>
                        </h6>
                        <div className="review-wrap">
                          <div className="rating">
                            <i className="icon-Vector3" />
                            <i className="icon-Vector3" />
                            <i className="icon-Vector3" />
                            <i className="icon-Vector3" />
                            <i className="icon-Vector3" />
                          </div>
                          <span className="review">( 2 Reviews )</span>
                        </div>
                        <div className="description">
                          <ul>
                            <li className="listing-information fuel">
                              <i className="icon-gasoline-pump-1" />
                              <div className="inner">
                                <span>Fuel type</span>
                                <p>Petrol</p>
                              </div>
                            </li>
                            <li className="listing-information size-engine">
                              <i className="icon-Group1" />
                              <div className="inner">
                                <span>Mileage</span>
                                <p>90 k.m</p>
                              </div>
                            </li>
                            <li className="listing-information transmission">
                              <i className="icon-gearbox-1" />
                              <div className="inner">
                                <span>Transmission</span>
                                <p>Auto</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <ul className="list-controller">
                          <li>
                            <Link href="/#">
                              <i className="icon-heart-1-1" />
                              <span>Favorite</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/#">
                              <i className="icon-shuffle-2-11" />
                              <span>Compare</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="bottom-price-wrap">
                        <div className="price-wrap">
                          <p className="price">$489</p>
                          <p className="price-sale">$399</p>
                        </div>
                        <div className="btn-read-more">
                          <Link className="more-link" href="/#">
                            <span>View details</span>
                            <i className="icon-arrow-right2" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="listing-grid-item swiper-slide">
                    <div className="listing-item-image">
                      <div className="hover-listing-image">
                        <div className="wrap-hover-listing">
                          <div
                            className="listing-item active"
                            title="Lexus LC Hybrid 2024"
                          >
                            <div className="images">
                              <img
                                src="./assets/images/car-list/car23.jpg"
                                className="swiper-image tfcl-light-gallery"
                                alt="images"
                              />
                            </div>
                          </div>
                          <div
                            className="listing-item"
                            title="Lexus LC Hybrid 2024"
                          >
                            <div className="images">
                              <img
                                src="./assets/images/car-list/car11.jpg"
                                className="swiper-image lazy tfcl-light-gallery"
                                alt="images"
                              />
                            </div>
                          </div>
                          <div
                            className="listing-item view-gallery"
                            title="Lexus LC Hybrid 2024"
                          >
                            <div className="images">
                              <img
                                src="./assets/images/car-list/car12.jpg"
                                className="swiper-image tfcl-light-gallery"
                                alt="images"
                              />
                              <div className="overlay-limit">
                                <img
                                  src="./assets/images/car-list/img.png"
                                  className="icon-img"
                                  alt="icon-map"
                                />
                                <p>2 more photos</p>
                              </div>
                            </div>
                          </div>
                          <div className="bullet-hover-listing">
                            <div className="bl-item active" />
                            <div className="bl-item" />
                            <div className="bl-item" />
                          </div>
                        </div>
                      </div>
                      <Link href="/#" className="icon-favorite">
                        <i className="icon-heart-1-1" />
                      </Link>
                      <span className="feature">Featured</span>
                    </div>
                    <div className="listing-item-content">
                      <div className="listing-top-content">
                        <h6 className="title">
                          <Link href="/listing-details">
                            Mercedez benz - c class
                          </Link>
                        </h6>
                        <div className="review-wrap">
                          <div className="rating">
                            <i className="icon-Vector3" />
                            <i className="icon-Vector3" />
                            <i className="icon-Vector3" />
                            <i className="icon-Vector3" />
                            <i className="icon-Vector3" />
                          </div>
                          <span className="review">( 2 Reviews )</span>
                        </div>
                        <div className="description">
                          <ul>
                            <li className="listing-information fuel">
                              <i className="icon-gasoline-pump-1" />
                              <div className="inner">
                                <span>Fuel type</span>
                                <p>Petrol</p>
                              </div>
                            </li>
                            <li className="listing-information size-engine">
                              <i className="icon-Group1" />
                              <div className="inner">
                                <span>Mileage</span>
                                <p>90 k.m</p>
                              </div>
                            </li>
                            <li className="listing-information transmission">
                              <i className="icon-gearbox-1" />
                              <div className="inner">
                                <span>Transmission</span>
                                <p>Auto</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <ul className="list-controller">
                          <li>
                            <Link href="/#">
                              <i className="icon-heart-1-1" />
                              <span>Favorite</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/#">
                              <i className="icon-shuffle-2-11" />
                              <span>Compare</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="bottom-price-wrap">
                        <div className="price-wrap">
                          <p className="price">$489</p>
                          <p className="price-sale">$399</p>
                        </div>
                        <div className="btn-read-more">
                          <Link className="more-link" href="/#">
                            <span>View details</span>
                            <i className="icon-arrow-right2" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="listing-grid-item swiper-slide">
                    <div className="listing-item-image">
                      <div className="hover-listing-image">
                        <div className="wrap-hover-listing">
                          <div
                            className="listing-item active"
                            title="Lexus LC Hybrid 2024"
                          >
                            <div className="images">
                              <img
                                src="./assets/images/car-list/car8.jpg"
                                className="swiper-image tfcl-light-gallery"
                                alt="images"
                              />
                            </div>
                          </div>
                          <div
                            className="listing-item"
                            title="Lexus LC Hybrid 2024"
                          >
                            <div className="images">
                              <img
                                src="./assets/images/car-list/car11.jpg"
                                className="swiper-image lazy tfcl-light-gallery"
                                alt="images"
                              />
                            </div>
                          </div>
                          <div
                            className="listing-item view-gallery"
                            title="Lexus LC Hybrid 2024"
                          >
                            <div className="images">
                              <img
                                src="./assets/images/car-list/car12.jpg"
                                className="swiper-image tfcl-light-gallery"
                                alt="images"
                              />
                              <div className="overlay-limit">
                                <img
                                  src="./assets/images/car-list/img.png"
                                  className="icon-img"
                                  alt="icon-map"
                                />
                                <p>2 more photos</p>
                              </div>
                            </div>
                          </div>
                          <div className="bullet-hover-listing">
                            <div className="bl-item active" />
                            <div className="bl-item" />
                            <div className="bl-item" />
                          </div>
                        </div>
                      </div>
                      <Link href="/#" className="icon-favorite">
                        <i className="icon-heart-1-1" />
                      </Link>
                      <span className="feature">Featured</span>
                    </div>
                    <div className="listing-item-content">
                      <div className="listing-top-content">
                        <h6 className="title">
                          <Link href="/listing-details">
                            Mercedez benz - c class
                          </Link>
                        </h6>
                        <div className="review-wrap">
                          <div className="rating">
                            <i className="icon-Vector3" />
                            <i className="icon-Vector3" />
                            <i className="icon-Vector3" />
                            <i className="icon-Vector3" />
                            <i className="icon-Vector3" />
                          </div>
                          <span className="review">( 2 Reviews )</span>
                        </div>
                        <div className="description">
                          <ul>
                            <li className="listing-information fuel">
                              <i className="icon-gasoline-pump-1" />
                              <div className="inner">
                                <span>Fuel type</span>
                                <p>Petrol</p>
                              </div>
                            </li>
                            <li className="listing-information size-engine">
                              <i className="icon-Group1" />
                              <div className="inner">
                                <span>Mileage</span>
                                <p>90 k.m</p>
                              </div>
                            </li>
                            <li className="listing-information transmission">
                              <i className="icon-gearbox-1" />
                              <div className="inner">
                                <span>Transmission</span>
                                <p>Auto</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <ul className="list-controller">
                          <li>
                            <Link href="/#">
                              <i className="icon-heart-1-1" />
                              <span>Favorite</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/#">
                              <i className="icon-shuffle-2-11" />
                              <span>Compare</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="bottom-price-wrap">
                        <div className="price-wrap">
                          <p className="price">$489</p>
                          <p className="price-sale">$399</p>
                        </div>
                        <div className="btn-read-more">
                          <Link className="more-link" href="/#">
                            <span>View details</span>
                            <i className="icon-arrow-right2" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="listing-grid-item swiper-slide">
                    <div className="listing-item-image">
                      <div className="hover-listing-image">
                        <div className="wrap-hover-listing">
                          <div
                            className="listing-item active"
                            title="Lexus LC Hybrid 2024"
                          >
                            <div className="images">
                              <img
                                src="./assets/images/car-list/car8.jpg"
                                className="swiper-image tfcl-light-gallery"
                                alt="images"
                              />
                            </div>
                          </div>
                          <div
                            className="listing-item"
                            title="Lexus LC Hybrid 2024"
                          >
                            <div className="images">
                              <img
                                src="./assets/images/car-list/car11.jpg"
                                className="swiper-image lazy tfcl-light-gallery"
                                alt="images"
                              />
                            </div>
                          </div>
                          <div
                            className="listing-item view-gallery"
                            title="Lexus LC Hybrid 2024"
                          >
                            <div className="images">
                              <img
                                src="./assets/images/car-list/car12.jpg"
                                className="swiper-image tfcl-light-gallery"
                                alt="images"
                              />
                              <div className="overlay-limit">
                                <img
                                  src="./assets/images/car-list/img.png"
                                  className="icon-img"
                                  alt="icon-map"
                                />
                                <p>2 more photos</p>
                              </div>
                            </div>
                          </div>
                          <div className="bullet-hover-listing">
                            <div className="bl-item active" />
                            <div className="bl-item" />
                            <div className="bl-item" />
                          </div>
                        </div>
                      </div>
                      <Link href="/#" className="icon-favorite">
                        <i className="icon-heart-1-1" />
                      </Link>
                      <span className="feature">Featured</span>
                    </div>
                    <div className="listing-item-content">
                      <div className="listing-top-content">
                        <h6 className="title">
                          <Link href="/listing-details">
                            Mercedez benz - c class
                          </Link>
                        </h6>
                        <div className="review-wrap">
                          <div className="rating">
                            <i className="icon-Vector3" />
                            <i className="icon-Vector3" />
                            <i className="icon-Vector3" />
                            <i className="icon-Vector3" />
                            <i className="icon-Vector3" />
                          </div>
                          <span className="review">( 2 Reviews )</span>
                        </div>
                        <div className="description">
                          <ul>
                            <li className="listing-information fuel">
                              <i className="icon-gasoline-pump-1" />
                              <div className="inner">
                                <span>Fuel type</span>
                                <p>Petrol</p>
                              </div>
                            </li>
                            <li className="listing-information size-engine">
                              <i className="icon-Group1" />
                              <div className="inner">
                                <span>Mileage</span>
                                <p>90 k.m</p>
                              </div>
                            </li>
                            <li className="listing-information transmission">
                              <i className="icon-gearbox-1" />
                              <div className="inner">
                                <span>Transmission</span>
                                <p>Auto</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <ul className="list-controller">
                          <li>
                            <Link href="/#">
                              <i className="icon-heart-1-1" />
                              <span>Favorite</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="/#">
                              <i className="icon-shuffle-2-11" />
                              <span>Compare</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="bottom-price-wrap">
                        <div className="price-wrap">
                          <p className="price">$489</p>
                          <p className="price-sale">$399</p>
                        </div>
                        <div className="btn-read-more">
                          <Link className="more-link" href="/#">
                            <span>View details</span>
                            <i className="icon-arrow-right2" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className="swiper-pagination" />
              </div>
            </div>
          </div> */}

          <div className="widget-related-single-listing">
  <div className="themesflat-container">
    <div className="related-single-listing swiper">

      <Swiper {...swiperOptions}>
        {relatedCars.map((item) => (
          <SwiperSlide
            key={item.id}
            className="listing-grid-item swiper-slide"
          >
            {/* IMAGE */}
            <div className="listing-item-image">
              <div className="hover-listing-image">
                <div className="wrap-hover-listing">

                  {item.images.slice(0, 2).map((img, i) => (
                    <div
                      key={i}
                      className={`listing-item ${i === 0 ? "active" : ""}`}
                      title={item.title}
                    >
                      <div className="images">
                        <img
                          src={img}
                          className="swiper-image tfcl-light-gallery"
                          alt={item.title}
                        />
                      </div>
                    </div>
                  ))}

                  {/* VIEW GALLERY */}
                  {item.images.length > 2 && (
                    <div className="listing-item view-gallery">
                      <div className="images">
                        <img
                          src={item.images[2]}
                          className="swiper-image"
                          alt={item.title}
                        />
                        <div className="overlay-limit">
                          <img
                            src="/assets/images/car-list/img.png"
                            className="icon-img"
                            alt="gallery"
                          />
                          <p>{item.images.length - 2} more photos</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* BULLETS */}
                  <div className="bullet-hover-listing">
                    {item.images.slice(0, 3).map((_, i) => (
                      <div
                        key={i}
                        className={`bl-item ${i === 0 ? "active" : ""}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {item.featured && <span className="feature">Featured</span>}
            </div>

            {/* CONTENT */}
            <div className="listing-item-content">
              <div className="listing-top-content">
                <h6 className="title">
                  <Link href={`/listing-details/${item.slug}`}>
                    {item.title}
                  </Link>
                </h6>

                {/* RATING */}
                <div className="review-wrap">
                  <div className="rating">
                    {[...Array(item.rating || 4)].map((_, i) => (
                      <i className="icon-Vector3" key={i} />
                    ))}
                  </div>
                  <span className="review">
                    ({item.reviews || 0} Reviews)
                  </span>
                </div>

                {/* SPECS */}
                <div className="description">
                  <ul>
                    <li className="listing-information fuel">
                      <i className="icon-gasoline-pump-1" />
                      <div className="inner">
                        <span>Fuel</span>
                        <p>{item.quickSpecs.fuel}</p>
                      </div>
                    </li>

                    <li className="listing-information size-engine">
                      <i className="icon-Group1" />
                      <div className="inner">
                        <span>Mileage</span>
                        <p>{item.quickSpecs.mileage}</p>
                      </div>
                    </li>

                    <li className="listing-information transmission">
                      <i className="icon-gearbox-1" />
                      <div className="inner">
                        <span>Transmission</span>
                        <p>{item.quickSpecs.transmission}</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* PRICE */}
              <div className="bottom-price-wrap">
                <div className="price-wrap">
                  <p className="price-sale">
                    {item.currency}
                    {item.salePrice}
                  </p>
                  <p className="price">
                    {item.currency}
                    {item.price}
                  </p>
                </div>

                <div className="btn-read-more">
                  <Link
                    className="more-link"
                    href={`/listing-details/${item.slug}`}
                  >
                    <span>View details</span>
                    <i className="icon-arrow-right2" />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-pagination" />
    </div>
  </div>
</div>

        </div>
      </Layout>
      <ModalTestDriver isToggled4={isToggled4} handleToggle4={handleToggle4} />
      <ModalOfferPrice isToggled5={isToggled5} handleToggle5={handleToggle5} />
    </>
  );
}
