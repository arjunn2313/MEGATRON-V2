
import Link from 'next/link'

export default function IconBox() {
    return (
        <>
            <div className="widget-icon-box mt--115">
                <div className="themesflat-container">
                    <div className="heading-section t-al-center mb-30">
                        <span className="sub-title mb-6 wow fadeInUp">Find your car by car brand</span>
                        <h2 className="title wow fadeInUp">Browse by Brands</h2>
                    </div>
                    <div className="row">
                        <div className="col-6 col-md-4 col-lg-4 col-xl-2">
                            <Link href="/car-list?make=Nissan" className="icon-box border-line">
                                <div className="image-box-wrap">
                                    <img src="/assets/images/car-logo/nissan.png" alt="" />
                                </div>
                                <span className="title-icon">Nissan</span>
                                <div className="btn-con-box">
                                    <i className="icon-arrow-right2" />
                                </div>
                            </Link>
                        </div>
                        <div className="col-6 col-md-4 col-lg-4 col-xl-2">
                            <Link href="/car-list?make=Ford" className="icon-box border-line">
                                <div className="image-box-wrap">
                                    <img src="/assets/images/car-logo/ford.png" alt="" />
                                </div>
                                <span className="title-icon">Ford</span>
                                <div className="btn-con-box">
                                    <i className="icon-arrow-right2" />
                                </div>
                            </Link>
                        </div>
                        <div className="col-6 col-md-4 col-lg-4 col-xl-2">
                            <Link href="/car-list?make=Hyundai" className="icon-box border-line">
                                <div className="image-box-wrap">
                                    <img src="/assets/images/car-logo/hyundai.png" alt="" />
                                </div>
                                <span className="title-icon">Hyundai</span>
                                <div className="btn-con-box">
                                    <i className="icon-arrow-right2" />
                                </div>
                            </Link>
                        </div>
                        <div className="col-6 col-md-4 col-lg-4 col-xl-2">
                            <Link href="/car-list?make=Chevrolet" className="icon-box border-line">
                                <div className="image-box-wrap">
                                    <img src="/assets/images/car-logo/cheavrolet.png" alt="" />
                                </div>
                                <span className="title-icon">Cheavrolet</span>
                                <div className="btn-con-box">
                                    <i className="icon-arrow-right2" />
                                </div>
                            </Link>
                        </div>
                        <div className="col-6 col-md-4 col-lg-4 col-xl-2">
                            <Link href="/car-list?make=Toyota" className="icon-box border-line">
                                <div className="image-box-wrap">
                                    <img src="/assets/images/car-logo/toyota.png" alt="" />
                                </div>
                                <span className="title-icon">Toyota</span>
                                <div className="btn-con-box">
                                    <i className="icon-arrow-right2" />
                                </div>
                            </Link>
                        </div>
                        <div className="col-6 col-md-4 col-lg-4 col-xl-2">
                            <Link href="/car-list?make=Mercedes-Benz" className="icon-box border-line">
                                <div className="image-box-wrap">
                                    <img src="/assets/images/car-logo/mercedes.png" alt="" />
                                </div>
                                <span className="title-icon">Mercedes</span>
                                <div className="btn-con-box">
                                    <i className="icon-arrow-right2" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
