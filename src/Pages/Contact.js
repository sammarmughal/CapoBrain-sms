import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    message: "",
  });
  const formRef = useRef(null);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = "WhatsApp number is required";
    } else if (!/^\+?[0-9]{10,15}$/.test(formData.whatsapp)) {
      newErrors.whatsapp = "Invalid phone number";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (validateForm()) {
      emailjs
        .sendForm(
          "service_pj93zyr",
          "template_i20j2uo", 
          formRef.current, 
          "2IXZCnlGYrCJooOAK" 
        )
        .then(
          (result) => {
            console.log("Email sent successfully:", result.text);
            Swal.fire({
              title: "Success!",
              text: "Your message has been sent successfully.",
              icon: "success",
              confirmButtonText: "OK",
            });
          },
          (error) => {
            console.error("Error sending email:", error.text);
            Swal.fire({
              title: "Error!",
              text: "Failed to send your message. Please try again later.",
              icon: "error",
              confirmButtonText: "OK",
            });
          }
        );
    } else {
      Swal.fire({
        title: "Warning!",
        text: "Please fill out all the required fields before submitting.",
        icon: "warning",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Get in touch with Capobrain School Management System for any inquiries, support, or assistance. Our team is here to help you with School ERP software solutions, implementation, and more."
        />
        <meta
          name="keywords"
          content="Capobrain Contact, School Management System Contact, School ERP Support, Contact School Software Provider, School ERP Help, Contact Capobrain School Software, School Software Support"
        />
        <meta name="robots" content="index, follow" />
        <title>
          Contact Us - Capobrain | Get Support for School Management Software
        </title>
        <meta
          property="og:title"
          content="Contact Us - Capobrain | Get Support for School Management Software"
        />
        <meta
          property="og:description"
          content="Need assistance? Contact Capobrain today for support with our School Management System. Our team will help you with any queries regarding School ERP software, implementation, and more."
        />
        <meta property="og:image" content="URL_TO_IMAGE" />
        <meta property="og:url" content="YOUR_CONTACT_PAGE_URL" />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:title"
          content="Contact Us - Capobrain | Get Support for School Management Software"
        />
        <meta
          name="twitter:description"
          content="Get in touch with Capobrain for support with our School Management System. We're here to assist with implementation, troubleshooting, and other School ERP needs."
        />
        <meta name="twitter:image" content="URL_TO_IMAGE" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <section className="relative bg-purple-900">
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
          <div className="space-y-5 max-w-8xl mx-auto text-center">
            <h1 className="heading-hero">Contact For Any Query</h1>
            <p className="max-w-2xl mx-auto text-gray-200">
              Contact us today to discuss your school management challenges. Our
              team offers tailored software solutions to help you streamline
              your administration.
            </p>
          </div>
        </div>
        <div
          className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
          style={{
            background:
              "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
          }}
        ></div>
      </section>
      <section className="mb-32">
        <div
          id="map"
          className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3376.859812864154!2d74.18231357455578!3d32.18105481420559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f2990ca7332c7%3A0xda83589acd8c568d!2sMumtaz%20Market!5e0!3m2!1sen!2s!4v1694084446010!5m2!1sen!2s"
            width="100%"
            height="480"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="container px-6 md:px-12 mx-auto">
          <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
            <div className="flex flex-wrap">
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input
                      type="text"
                      name="name"
                      className="peer input-bar mb-2"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <label className="input-label" htmlFor="name">
                      Name
                    </label>
                    {errors.name && (
                      <div className="text-sm text-red-500">{errors.name}</div>
                    )}
                  </div>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input
                      type="email"
                      name="email"
                      className="peer input-bar mb-2"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <label className="input-label" htmlFor="email">
                      Email address
                    </label>
                    {errors.email && (
                      <div className="text-sm text-red-500">{errors.email}</div>
                    )}
                  </div>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input
                      type="email"
                      className="peer input-bar mb-2"
                      name="whatsapp"
                      placeholder="WhatsApp Number"
                      value={formData.whatsapp}
                      onChange={handleChange}
                    />
                    <label className="input-label" htmlFor="whatsapp">
                      Whatsapp Number
                    </label>
                    {errors.whatsapp && (
                      <div className="text-sm text-red-500">
                        {errors.whatsapp}
                      </div>
                    )}
                  </div>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <textarea
                      className="peer input-bar py-3"
                      rows="3"
                      name="message"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                    <label htmlFor="message" className="input-label">
                      Message
                    </label>
                    {errors.message && (
                      <div className="text-sm text-red-500">
                        {errors.message}
                      </div>
                    )}
                  </div>

                  <div className="flex justify-center items-center">
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="mb-6 max-w-[200px] w-full rounded-full btn-anim text-white px-8 pt-2.5 pb-2 text-lg font-medium uppercase leading-normal lg:mb-0"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                <div className="flex flex-wrap">
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-indigo-200 p-4 text-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold ">Technical support</p>
                        <p className="text-sm text-neutral-500">
                          <a
                            href="mailto:info@capobrain.com"
                            style={{ textDecoration: "none" }}
                            target="_blank"
                          >
                            info@capobrain.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                    <div className="flex items-start">
                      <div className="srink-0">
                        <div className="inline-block rounded-md bg-indigo-200 p-4 text-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-7 h-7"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold ">Address</p>
                        <p className="text-sm text-neutral-500">
                          Mumtaz Market, GT Road, <br /> Gujranwala
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:mb-12 lg:w-full lg:px-6 xl:w-6/12">
                    <div className="align-start flex">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-indigo-200 p-4 text-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold ">Technic Mentors</p>
                        <a
                          href="https://technicmentors.com/"
                          className="text-neutral-500"
                          target="_blank"
                        >
                          https://technicmentors.com
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12">
                    <div className="align-start flex">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-indigo-200 p-4 text-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokewidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold ">Mobile</p>
                        <p className="text-neutral-500"> +923 111 122 144</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
