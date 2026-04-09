"use client";
import ContactForm from "./ui/contact-form";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import { useEffect } from "react";

const contact = [
    {
        icon: "fas fa-map-marker-alt",
        title: "Location",
        text: "Surat, Gujarat, India",
    },
    {
        icon: "fas fa-phone-alt",
        title: "Phone",
        text: "+91 97125 18848",
    },
    {
        icon: "fas fa-envelope",
        title: "Email",
        text: " divyenghoghari618@gmail.com",
    },
];

export default function Contact() {
    const position = [22.4031265, 91.8641075];

    // Create custom icon
    const customIcon = new Icon({
        iconUrl: `data:image/svg+xml;utf8,
        <svg fill="%2380db66" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>`,
        iconSize: ["48", "48"],
    });

    // Use effect to handle Leaflet cleanup on unmount
    useEffect(() => {
        return () => {
            const mapContainer = document.querySelector(".leaflet-container");
            if (mapContainer) {
                mapContainer._leaflet_id = null; // Prevent Leaflet from reinitializing
            }
        };
    }, []);

    return (
        <div id="contact" className="contact-area over-hidden mb-160 mt-155">
            <div id="hero-btn" className="contact-wrapper position-relative">
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col-xl-12 col-lg-12  col-md-12  col-sm-12 col-12">
                            <div className="title text-center">
                                <span className="theme-color text-uppercase d-block mb-6">
                                    Contact Me
                                </span>
                                <h2>Let’s Start A New Project</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-5 col-md-12  col-sm-12 col-12">
                            <div className="contact-wrapper mt-70">
                                <ul className="contact-info-content">
                                    {/* contact list start */}
                                    {contact.map((item, i) => (
                                        <li
                                            key={i}
                                            className="contact-location s-contact mb-20 transition-3 d-lg-flex align-items-center"
                                        >
                                            <div className="contact-icon d-inline-block text-center theme-bg mr-30">
                                                <span className="text-white d-inline-block">
                                                    <i className={item.icon} />
                                                </span>
                                            </div>

                                            <div className="contact-text d-inline-block">
                                                <h4 className="mb-2">
                                                    {item.title}
                                                </h4>
                                                <p className="text-color mb-0">
                                                    {item.text}
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                    {/* contact list end */}
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7 col-md-12  col-sm-12 col-12">
                            {/* contact form start */}
                            <ContactForm />
                            {/* contact form end */}
                        </div>
                    </div>
                    <div className="row">
                        <div
                            className="col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12"
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom"
                            data-aos-duration={2000}
                            data-aos-delay={500}
                        >
                            <div
                                className="map-wrapper mt-70 over-hidden"
                                style={{ height: "340px" }}
                            >
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238132.67288347203!2d72.65746845016942!3d21.159440569803273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1775616217931!5m2!1sen!2sin" width="100%" height="450" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
