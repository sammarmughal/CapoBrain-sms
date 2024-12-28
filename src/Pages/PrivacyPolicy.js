import React from "react";
import { Helmet } from "react-helmet";
import twittercard from "../img/twiiter-card.jpg";

const PrivacyPolicy = () => {
  return (
    <>
    <Helmet>
        <title>Privacy Policy | CapoBrain School Management System</title>
        <meta
          name="description"
          content="Learn how CapoBrain School Management System uses and protects your personal information. Our privacy policy ensures security for all users."
        />
        {/* Open Graph (OG) Metadata */}
        <meta
          property="og:title"
          content="Privacy Policy | CapoBrain School Management System"
        />
        <meta property="og:image" content={twittercard} />
        <meta
          property="og:description"
          content="Explore the privacy policy of CapoBrain School Management System. Understand how we handle your personal data with the highest standards of security and transparency."
        />
        <meta
          property="og:url"
          content="https://capobrain.com/privacy-policy"
        />
        <meta property="og:type" content="website" />
        {/* Twitter Metadata */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="twitter:title"
          content="Privacy Policy | CapoBrain School Management System"
        />
        <meta
          name="twitter:description"
          content="CapoBrain School Management System values your privacy. Read our policy to know how we collect, use, and secure your data responsibly."
        />
        <meta
          name="twitter:image"
          content={twittercard}
        />
        <link
          rel="canonical"
          href="https://capobrain.com/privacy-policy"
        />
      </Helmet>
      <div className="bg-gray-100">
        <section className="relative bg-purple-900">
          <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
            <div className="space-y-5 max-w-8xl mx-auto text-center">
              <h1 className="heading-hero">Capobrain Privacy Policy</h1>
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
        <div className="cb-container mx-auto px-4 py-10">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-center my-5 heading-body">
              Privacy Policy of Capobrain School Management Software
            </h2>
            <p style={{ textAlign: "justify" }}>
              Welcome to CapoBrain's School Management Software Privacy Policy.
              We understand the importance of protecting your privacy and are
              committed to safeguarding your personal information. This policy
              explains how we collect, use, and protect the data you provide
              when using our school management software platform, CapoBrain, and
              related services.
            </p>
            <h3 className="sm:text-2xl text-xl font-bold mt-3">
              1. Information We Collect
            </h3>
            <p style={{ textAlign: "justify" }}>
              Personal Information: When you register for CapoBrain, sign up for
              demos, or use our services, we collect personal information such
              as your name, email address, and contact details.{" "}
              <strong>School Management Software Usage Data</strong>: We also
              collect data on how you interact with CapoBrain, including the
              features you use and pages you access.
            </p>

            <h3 className="sm:text-2xl text-xl font-bold mt-3">
              2. How We Use Your Information
            </h3>
            <p style={{ textAlign: "justify" }}>
              We use the data collected to:
              <ul>
                <li>
                  Provide and enhance our{" "}
                  <strong>school management system</strong> and software
                  solutions.
                </li>
                <li>
                  Communicate with you about updates, offers, and information
                  related to CapoBrain’s services.
                </li>
                <li>
                  Analyze usage patterns to improve{" "}
                  <strong>school management software features</strong> and user
                  experience.
                </li>
              </ul>
            </p>

            <h4 className="sm:text-2xl text-xl font-bold mt-3">3. Data Security</h4>
            <p style={{ textAlign: "justify" }}>
              We implement industry-standard security protocols to protect your
              personal data and ensure that our{" "}
              <strong>education software platform</strong> remains secure.
            </p>

            <h4 className="sm:text-2xl text-xl font-bold mt-3">
              {" "}
              4. Sharing Your Information
            </h4>
            <p style={{ textAlign: "justify" }}>
              We do not sell or share your information with third parties unless
              required by law or necessary to provide our services.
            </p>
            <h4 className="sm:text-2xl text-xl font-bold mt-3">5. Your Choices</h4>
            <p style={{ textAlign: "justify" }}>
              You can manage communication preferences and update your personal
              information through your CapoBrain account settings. Users also
              have the right to request access, correction, or deletion of their
              data.
            </p>
            <h4 className="sm:text-2xl text-xl font-bold mt-3">
              6. Cookies and Tracking Technologies
            </h4>
            <p style={{ textAlign: "justify" }}>
              CapoBrain uses cookies and other tracking technologies to improve
              your experience. You can manage cookie preferences through your
              browser settings.
            </p>
            <h4 className="sm:text-2xl text-xl font-bold mt-3">
              7. Third-Party Links
            </h4>
            <p style={{ textAlign: "justify" }}>
              Our website may contain links to third-party websites. We are not
              responsible for their privacy practices, and we encourage you to
              review their privacy policies.
            </p>
            <h4 className="sm:text-2xl text-xl font-bold mt-3">
              8. Changes to this Privacy Policy
            </h4>
            <p style={{ textAlign: "justify" }}>
              We may update this Privacy Policy to reflect changes in our data
              handling practices. All updates will be posted here, and we will
              notify users if required by law.
            </p>
            <h4 className="sm:text-2xl text-xl font-bold mt-3">9. Contact Us</h4>
            <p style={{ textAlign: "justify" }}>
              If you have any questions regarding this policy or your data,
              please contact us at [{" "}
              <span style={{ color: "rgb(19, 61, 120)" }}>
                info@capobrain.com
              </span>{" "}
              ]. By using CapoBrain's software, you agree to this Privacy
              Policy. We recommend reviewing this policy periodically.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
