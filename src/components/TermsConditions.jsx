// src/components/TermsConditions.jsx
import React from "react";
import { Link } from "react-router-dom";

const TermsConditions = () => {
  return (
    <div className="container mx-auto mt-8 text-sm md:text-md ">
      <h2 className="text-2xl font-semibold mb-4 ">Terms and Conditions</h2>
      <p>
        By accessing and using our website (https://www.codingnepalweb.com), you
        agree to comply with the following terms and conditions. If you do not
        agree with any part of these terms, please refrain from using our
        website.
      </p>
      <br />
      Use of Cookies
      <br />
      <br />
      <p>
        We utilize cookies in accordance with our Privacy Policy. Cookies are
        used to enhance your experience and improve the functionality of certain
        areas on our website. Some affiliate/advertising partners may also use
        cookies.
      </p>
      <br />
      <br />
      Intellectual Property Rights
      <br />
      <br />
      All materials on CodingNepal, unless otherwise stated, are owned by
      CodingNepal and its licensors, and all intellectual property rights are
      reserved. You may access and use our content for personal purposes, but
      you must not republish, sell, rent, reproduce, or redistribute it without
      our prior consent.
      <br />
      <br />
      User Comments
      <br />
      <br />
      Certain areas of our website allow users to post and exchange opinions and
      information. Please note that we do not filter or review these comments in
      advance. The views expressed in user comments do not necessarily reflect
      our views, and we are not liable for any content users post.
      <br />
      <br />
      Hyperlinks to Our Content
      <br />
      <br />
      Government agencies, search engines, and news organizations may link to
      our website without prior written approval. Other organizations may seek
      approval for hyperlinking based on specific criteria, including
      non-deceptiveness and contextual relevance.
      <br />
      <br />
      iFrames
      <br />
      <br />
      Creating frames around our web pages that alter the visual presentation of
      our website is not permitted without our prior approval.
      <br />
      <br />
      Content Liability
      <br />
      <br />
      We are not responsible for any content that appears on external websites
      linking to our site. You agree to defend and protect us against any claims
      arising from the content displayed on your website that links to
      CodingNepal.
      <br />
      <br />
      Privacy
      <br />
      <br />
      Please read our{" "}
      <Link
        to="/privacy-policy"
        className="text-sm text-blue-500 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Privacy Policy
      </Link>{" "}
      to understand how we handle your personal information.
      <br />
      <br />
      Reservation of Rights
      <br />
      <br />
      We reserve the right to request the removal of any link to our website and
      to modify these terms and conditions. By continuing to link to our
      website, you agree to be bound by the updated terms and conditions.
      <br />
      <br />
      Disclaimer
      <br />
      <br />
      We strive to provide accurate and up-to-date information, but we do not
      warrant the completeness or accuracy of the content on our website. Your
      use of our website is at your own risk, and we do not accept liability for
      any loss or damage resulting from it.
      <br />
      <br />
      By accessing and using CodingNepal, you acknowledge and accept these terms
      and conditions. If you have any questions or concerns, please{" "}
      <Link to="/contact" className="text-sm text-blue-500 hover:underline">
        Contact us
      </Link> .
    </div>
  );
};

export default TermsConditions;
