"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState("");

    // submit form data
    const onSubmit = async (data) => {
        setIsSubmitting(true);
        setSubmitMessage("");
        
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    // TO DO: Replace with your Web3Forms Access Key
                    access_key: "0a71fcce-3d22-4b2e-920a-f9afb180e796",
                    subject: `New Contact Form Submission from ${data.name}`,
                    from_name: data.name,
                    ...data,
                }),
            });
            const result = await response.json();
            if (result.success) {
                setSubmitMessage("Your message has been sent successfully!");
                reset(); // Clear the form fields
            } else {
                setSubmitMessage("Failed to send message. Please try again.");
            }
        } catch (error) {
            console.error(error);
            setSubmitMessage("Something went wrong!");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-wrapper">
            <div className="contact-form mt-45">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="contact-info pt-20">
                        <div className="row">
                            <div
                                className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 pr6 mb-12"
                                data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom"
                                data-aos-duration={2000}
                            >
                                <input
                                    className="name w-100 theme-border pl-20 pt-15 pb-15 pr-10 form-color border-radius5 openS-font-family"
                                    type="text"
                                    name="name"
                                    id="inputName"
                                    placeholder="Your Name"
                                    {...register("name", {
                                        required: "Name is required",
                                    })}
                                />
                                {errors.name && (
                                    <span className="ui-error">
                                        {errors.name.message}
                                    </span>
                                )}
                            </div>

                            <div
                                className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 pl6 pr-12 mb-12"
                                data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom"
                                data-aos-duration={2500}
                            >
                                <input
                                    className="email w-100 theme-border pl-20 pt-15 pb-15 pr-10 form-color border-radius5 openS-font-family"
                                    type="email"
                                    name="email"
                                    id="inputEmail"
                                    placeholder="Your Email"
                                    {...register("email", {
                                        required: "Email is required",
                                        validate: () => {
                                            const email = watch("email");
                                            return (
                                                email.includes("@") ||
                                                "Invalid email"
                                            );
                                        },
                                    })}
                                />{" "}
                                {errors.email && (
                                    <span className="ui-error">
                                        {errors.email.message}
                                    </span>
                                )}
                            </div>

                            <div
                                className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 pr6 mb-12"
                                data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom"
                                data-aos-duration={2000}
                            >
                                <input
                                    className="phone w-100 theme-border pl-20 pt-15 pb-15 pr-10 form-color border-radius5 openS-font-family"
                                    type="text"
                                    name="phone"
                                    id="inputPhone"
                                    placeholder="Your Phone"
                                    {...register("phone", {
                                        required: "Phone is required",
                                    })}
                                />
                                {errors.phone && (
                                    <span className="ui-error">
                                        {errors.phone.message}
                                    </span>
                                )}
                            </div>

                            <div
                                className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 pl6 pr-12 mb-12"
                                data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom"
                                data-aos-duration={2500}
                            >
                                <input
                                    className="subject w-100 theme-border pl-20 pt-15 pb-15 pr-10 form-color border-radius5 openS-font-family"
                                    type="text"
                                    name="subject"
                                    id="inputSubject"
                                    placeholder="Your Subject"
                                    {...register("subject", {
                                        required: "Subject is required",
                                    })}
                                />
                                {errors.subject && (
                                    <span className="ui-error">
                                        {errors.subject.message}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="row ">
                            <div
                                className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 pl-12 pr-12 mb-12"
                                data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom"
                                data-aos-duration={2000}
                            >
                                <textarea
                                    className="massage w-100 theme-border pl-20 pt-15 pr-10 primary-color border-radius5 openS-font-family"
                                    name="inputMessage"
                                    id="msg"
                                    placeholder="Start writing message here"
                                    {...register("msg", {
                                        required: "Message is required",
                                        minLength: {
                                            message: "Minimum length is 10",
                                            value: 10,
                                        },
                                    })}
                                />
                                {errors.msg && (
                                    <span className="ui-error">
                                        {errors.msg.message}
                                    </span>
                                )}
                            </div>
                        </div>

                        <button
                            className="btn position-relative over-hidden text-white d-inline-block theme-bg white-text text-uppercase"
                            type="submit"
                            name="submit"
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom"
                            data-aos-duration={2500}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Submitting..." : "Submit Now"}
                        </button>
                    </div>
                </form>
                {submitMessage && (
                    <p className={`form-message mt-20 p-3 rounded ${submitMessage.includes("successfully") ? "bg-success text-white" : "bg-danger text-white"}`}>
                        {submitMessage}
                    </p>
                )}
            </div>
        </div>
    );
}
