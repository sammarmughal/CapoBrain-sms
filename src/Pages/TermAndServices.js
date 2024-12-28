import React from "react";
import { Helmet } from "react-helmet";
import twittercard from "../img/twiiter-card.jpg";


const TermsAndServices = () => {
  return (
    <>
     <Helmet>
        <title>Terms and Services | CapoBrain School Management System</title>
        <meta
          name="description"
          content="Read the terms and services of CapoBrain School Management System. Understand your rights, obligations, and our policies for using the software and services."
        />
        <meta
          property="og:title"
          content="Terms and Services | CapoBrain School Management System"
        />
        <meta
          property="og:description"
          content="Review the terms and services of CapoBrain School Management System to ensure compliance and gain insight into the use of our advanced school management platform."
        />
        <meta property="og:image" content={twittercard} />
        <meta
          property="og:url"
          content="https://capobrain.com/term-and-services"
        />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="twitter:title"
          content="Terms and Services | CapoBrain School Management System"
        />
        <meta
          name="twitter:description"
          content="Understand the terms and conditions for using CapoBrain School Management System. Know your responsibilities and our commitment to delivering quality service."
        />
        <meta
          name="twitter:image"
          content={twittercard}
        />
        <link
          rel="canonical"
          href="https://capobrain.com/term-and-services"
        />
      </Helmet>
    <div className="bg-gray-100 min-h-screen">
      <section className="relative bg-purple-900">
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
          <div className="space-y-5 max-w-8xl mx-auto text-center">
            <h1 className="heading-hero">Capobrain Term & Conditions</h1>
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
      <main className="cb-container mx-auto px-4 py-10">
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="heading-body my-5 text-center">
            Welcome to CapoBrain School Management Software
          </h2>
          <p style={{ textAlign: "justify" }}>
          Welcome to Capobrain's Terms & Conditions. By accessing and using our
          website and services, you agree to comply with these terms. Please
          read them carefully.
        </p>
        <h3 className="sm:text-2xl text-xl font-bold mt-3">1. Acceptance of Terms</h3>
        <p style={{ textAlign: "justify" }}>
          By using Capobrain, you acknowledge and agree to these Terms &
          Conditions. If you do not agree with any part of these terms, please
          do not use our website or services.
        </p>
        <h3 className="sm:text-2xl text-xl font-bold mt-3">2. Use of Services</h3>
        <p style={{ textAlign: "justify" }}>
          You must be at least 18 years old to use Capobrain. You agree to use
          our services and website in compliance with all applicable laws and
          regulations.
        </p>
        <h3 className="sm:text-2xl text-xl font-bold mt-3">3. User Accounts</h3>
        <p style={{ textAlign: "justify" }}>
          To access certain features of Capobrain, you may be required to create
          an account. You are responsible for maintaining the confidentiality of
          your account credentials and are liable for any activities conducted
          through your account.
        </p>
        <h3 className="sm:text-2xl text-xl font-bold mt-3">4. Privacy</h3>
        <p style={{ textAlign: "justify" }}>
          Our Privacy Policy explains how we collect, use, and protect your
          personal information. By using Capobrain, you consent to our privacy
          practices as outlined in the Privacy Policy.
        </p>
        <h3 className="sm:text-2xl text-xl font-bold mt-3">5. Intellectual Property</h3>
        <p style={{ textAlign: "justify" }}>
          All content on Capobrain, including text, graphics, logos, and
          software, is the property of Capobrain or its licensors and is
          protected by copyright and other intellectual property laws. You may
          not use, reproduce, or distribute our content without our explicit
          permission.
        </p>
        <h3 className="sm:text-2xl text-xl font-bold mt-3">6. Prohibited Activities</h3>
        <p>You agree not to engage in any of the following activities:</p>
        <ul>
          <li>Violating any applicable laws or regulations.</li>
          <li>Attempting to access or interfere with our systems or data.</li>
          <li>Impersonating another person or entity.</li>
          <li>
            Uploading or sharing content that is unlawful, defamatory, or
            harmful.
          </li>
        </ul>
        <h3 className="sm:text-2xl text-xl font-bold mt-3">7. Termination</h3>
        <p>
          We reserve the right to terminate or suspend your account and access
          to our services at our discretion, with or without notice, for any
          reason, including violations of these Terms & Conditions.
        </p>
        <h3 className="sm:text-2xl text-xl font-bold mt-3">8. Disclaimer of Warranties</h3>
        <p style={{ textAlign: "justify" }}>
          Capobrain provides its services "as is" and does not make any
          warranties, express or implied, regarding the accuracy, reliability,
          or fitness for a particular purpose of our services.
        </p>
        <h3 className="sm:text-2xl text-xl font-bold mt-3">9. Limitation of Liability</h3>
        <p style={{ textAlign: "justify" }}>
          Capobrain is not liable for any direct, indirect, incidental, special,
          or consequential damages resulting from the use of our services or
          website.
        </p>
        <h3 className="sm:text-2xl text-xl font-bold mt-3">10. Changes to Terms</h3>
        <p style={{ textAlign: "justify" }}>
          We may update these Terms & Conditions to reflect changes in our
          services or legal requirements. You are responsible for reviewing
          these terms periodically.
        </p>
        <h3 className="sm:text-2xl text-xl font-bold mt-3">12. Contact Us</h3>
        <p style={{ textAlign: "justify" }}>
          If you have questions or concerns about these Terms & Conditions,
          please contact us at [{" "}
          <span style={{ color: "rgb(19, 61, 120)" }}>info@capobrain.com</span>{" "}
          ]. By using Capobrain, you agree to these Terms & Conditions. If you
          do not agree with any part of these terms, please discontinue your use
          of our website and services.
        </p>
        </section>
      </main>
    </div>
    </>
  );
};

export default TermsAndServices;
