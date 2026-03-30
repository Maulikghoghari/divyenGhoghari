import Image from "next/image";

export default function AboutInfo() {
    return (
        <div className="about-content position-relative mb-50">
            <div className="position-relative">
                <div className="title">
                    <span className="theme-color text-uppercase d-block mb-1 mt--5">
                        About Me
                    </span>
                    <h2 className="mb-30">I Develop System that Works</h2>
                </div>
            </div>
            <p className="mb-25">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia dese runt mollit anim id est laboru doloremque
                laudantium, totaeaque ipsa quae ab illo inven tore veritatis et
                quasi architecto beatae vitae.
            </p>
            <p>Oremque laudantium, totaeaque ipsa quae</p>
            <div className="about-info-wrapper pt-25 pb-20 mt-25">
                <div className="row">
                    <div className="col-xl-6 col-lg-12 col-md-6 col-sm-12 col-12">
                        <ul className="about-info">
                            <li className="d-inline-block pr-50">
                                <p className="jostMedium-font-family mb-6">
                                    Name
                                </p>
                                <p className="jostMedium-font-family mb-6">
                                    Age
                                </p>
                                <p className="jostMedium-font-family mb-6">
                                    Occupation
                                </p>
                            </li>

                            <li className="d-inline-block">
                                <p className="mb-6">James Smith</p>
                                <p className="mb-6">29 Years</p>
                                <p className="mb-6">System Engineer</p>
                            </li>
                        </ul>
                    </div>

                    <div className="col-xl-6 col-lg-12 col-md-6 col-sm-12 col-12">
                        <ul className="about-info">
                            <li className="d-inline-block pr-50">
                                <p className="jostMedium-font-family mb-6">
                                    Phone
                                </p>
                                <p className="jostMedium-font-family mb-6">
                                    Email
                                </p>
                                <p className="jostMedium-font-family mb-6">
                                    Nationality
                                </p>
                            </li>

                            <li className="d-inline-block">
                                <p className="mb-6">+123 456 7890</p>
                                <p className="mb-6">hello@qubohub.com</p>
                                <p className="mb-6">Bangladeshi</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="about-footer-content d-sm-flex align-items-center mt-lg-2 mt-sm-4 mt-3">
                <div className="signature pt-12 pr-45">
                    <Image
                        height={99}
                        width={178}
                        src="/images/about/signature.png"
                        alt="signature"
                    />
                </div>
                <div className="about-footer-content-right mt-20 text-left">
                    <h6 className="d-xl-inline-block text-uppercase pr5 mb-0">
                        Bruce Wayne
                    </h6>
                    <span className="openS-font-family meta-text-color">
                        Software Architect, Google Inc.
                    </span>
                </div>
            </div>
        </div>
    );
}
