"use client";
import Image from "next/image";
import HeroSociable from "./ui/hero-sociable";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
    return (
        <div id="home" className="slider-area slider-bg-color over-hidden">
            <div
                className="single-slider slider-height over-hidden position-relative xxl-device-width bg-cover no-repeat"
                style={{
                    backgroundImage: "url(/images/slider/slider-bg.jpg)",
                }}
            >
                <div className="parallax position-absolute w-100 h-100 z-index1">
                    <Image
                        height={74}
                        width={88}
                        alt="shape"
                        className="hero-shape hero-shape1 position-absolute d-none d-lg-inline-block"
                        src="/images/shape/shape1.png"
                    />
                    <Image
                        height={44}
                        width={53}
                        alt="shape"
                        className="hero-shape hero-shape2 position-absolute d-none d-lg-inline-block"
                        src="/images/shape/shape2.png"
                    />
                    <Image
                        height={29}
                        width={31}
                        alt="shape"
                        className="hero-shape hero-shape3 position-absolute d-none d-lg-inline-block"
                        src="/images/shape/shape3.png"
                    />
                    <Image
                        height={98}
                        width={94}
                        alt="shape"
                        className="hero-shape hero-shape4 position-absolute d-none d-lg-inline-block"
                        src="/images/shape/shape4.png"
                    />
                </div>
                <div className="container slider-height d-flex align-item-center justify-content-center">
                    <div className="row justify-content-center align-items-stretch w-100">
                        {/* Text Content */}
                        <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12 d-flex align-items-center justify-content-center justify-content-lg-start order-1 order-lg-1 hero-text-col" style={{ alignSelf: "center" }}>
                            <div className="slider-wrapper">
                                <div
                                    className="slider-content text-center text-lg-left position-relative z-index11"
                                    data-aos="fade-right"
                                    data-aos-duration={2200}
                                    style={{ paddingTop: "0", marginTop: "0" }}
                                >
                                    <h1 className="mb-15 white-text">
                                        <span className="sub-heading d-block text-uppercase theme-color mb-0">
                                            Hello I&apos;m
                                        </span>
                                        Divyen Ghoghari
                                    </h1>
                                    <h2 className="text-capitalize white-text mb-40">
                                        A Passionate
                                        <span className="d-text d-block d-sm-inline-block">
                                            {/* type animation start */}
                                            <TypeAnimation
                                                className="typer theme-color d-inline-block pl-2"
                                                sequence={[
                                                    "Software Engineer",
                                                    1000,
                                                    "Android Developer",
                                                    1000,
                                                    "Freelancer",
                                                    1000,
                                                ]}
                                                wrapper="span"
                                                speed={30}
                                                repeat={Infinity}
                                            />
                                            {/* type animation end */}
                                        </span>
                                    </h2>
                                    <a
                                        href="https://wa.me/919712518848?text=Hello%20Divyen"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn position-relative over-hidden theme-bg text-uppercase transition5"
                                    >
                                        Say Hello
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Hero Image */}
                        {/* Hero Image */}
                        <div className="col-xl-7 col-lg-6 col-md-10 col-sm-12 col-12 d-flex justify-content-center align-items-end order-2 order-lg-2 hero-img-col" style={{ alignSelf: "flex-end" }}>
                            <div
                                className="slider-img position-relative z-index1"
                                style={{ display: "flex", alignItems: "flex-end", width: "100%", justifyContent: "center" }}
                                data-aos="fade-left"
                                data-aos-duration={2200}
                            >
                                <Image
                                    height={1100}
                                    width={850}
                                    src="/images/slider/person.png"
                                    alt="hero image"
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        maxHeight: "92vh",
                                        minHeight: "450px",
                                        objectFit: "contain",
                                        objectPosition: "bottom center",
                                        display: "block",
                                        marginBottom: "0",
                                    }}
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* social media start */}
                <HeroSociable />
                {/* social media end */}
            </div>
        </div>
    );
}
