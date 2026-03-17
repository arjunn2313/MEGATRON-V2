import Link from "next/link";

export default function BrowseByMode() {
  return (
    <>
      <div className="widget-browse-by-mode">
        <div className="themesflat-container">
          <div className="browse-by-mode">
            <div className="heading-section">
              <span className="sub-title mb-6 wow fadeInUp">
                Trusted Used Car Dealer
              </span>

              <h2 className="title mb-40 wow fadeInUp">Browse by Body Type</h2>

              <p className="description wow fadeInUp">
                With over 15 years of experience, we raise the standard of used
                car retailing by offering thoroughly inspected vehicles,
                transparent pricing, and dependable service you can trust.
              </p>

              <div className="btn-main mt-40 wow fadeInUp">
                <Link href="/car-list" className="button_main_inner">
                  <span>View All Listings</span>
                </Link>
              </div>
            </div>

            <div className="w-722">
              <div className="box-icon-list">
                <Link href="/#" className="icon-box v1-box">
                  <div className="image-box-wrap">
                    <img src="/assets/images/type/c1.png" alt="" />
                  </div>
                  <span className="title-icon">Sedan</span>
                  <div className="btn-con-box">
                    <i className="icon-arrow-right2" />
                  </div>
                </Link>
                <Link href="/#" className="icon-box v1-box">
                  <div className="image-box-wrap">
                    <img src="/assets/images/type/c2.png" alt="" />
                  </div>
                  <span className="title-icon">Cuv</span>
                  <div className="btn-con-box">
                    <i className="icon-arrow-right2" />
                  </div>
                </Link>
                <Link href="/#" className="icon-box v1-box">
                  <div className="image-box-wrap">
                    <img src="/assets/images/type/c3.png" alt="" />
                  </div>
                  <span className="title-icon">cabriolet</span>
                  <div className="btn-con-box">
                    <i className="icon-arrow-right2" />
                  </div>
                </Link>
                <Link href="/#" className="icon-box v1-box">
                  <div className="image-box-wrap">
                    <img src="/assets/images/type/c4.png" alt="" />
                  </div>
                  <span className="title-icon">Pickup</span>
                  <div className="btn-con-box">
                    <i className="icon-arrow-right2" />
                  </div>
                </Link>
                <Link href="/#" className="icon-box v1-box">
                  <div className="image-box-wrap">
                    <img src="/assets/images/type/c5.png" alt="" />
                  </div>
                  <span className="title-icon">Supercar</span>
                  <div className="btn-con-box">
                    <i className="icon-arrow-right2" />
                  </div>
                </Link>
                <Link href="/#" className="icon-box v1-box">
                  <div className="image-box-wrap">
                    <img src="/assets/images/type/c6.png" alt="" />
                  </div>
                  <span className="title-icon">Suv</span>
                  <div className="btn-con-box">
                    <i className="icon-arrow-right2" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
