import React, { useState } from "react";
import { useTheme } from "../ThemeContext.jsx";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { isDarkMode } = useTheme();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for form submission here
    console.log("Form submitted:", formData);
    // Reset form fields after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className={`container mx-auto my-8 ${isDarkMode ? "dark" : ""}`}>
      <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
      <p className={`${
              isDarkMode
                ? "dark:text-gray-300"
                : ""
    }`}>
        Have questions or suggestions? Contact us using the form below or email
        us at contact@example.com.
      </p>

      {/* Contact form */}
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className={`${
                      isDarkMode
                        ? "dark:text-gray-300"
                        : ""
            }`}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`mt-1 p-2 border rounded-md w-full ${
              isDarkMode
                ? "dark:bg-gray-800 dark:text-white"
                : "border-gray-300"
            }`}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className={`${
                      isDarkMode
                        ? "dark:text-gray-300"
                        : ""
            }`}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`mt-1 p-2 border rounded-md w-full ${
              isDarkMode
                ? "dark:bg-gray-800 dark:text-white"
                : "border-gray-300"
            }`}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className={`${
                      isDarkMode
                        ? "dark:text-gray-300"
                        : ""
            }`}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className={`mt-1 p-2 border rounded-md w-full ${
              isDarkMode
                ? "dark:bg-gray-800 dark:text-white"
                : "border-gray-300"
            }`}
          />
        </div>

        <button
          type="submit"
          className={`bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-600 ${
            isDarkMode ? "dark:bg-gray-800" : ""
          }`}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
