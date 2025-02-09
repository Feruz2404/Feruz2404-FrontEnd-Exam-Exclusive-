import React from "react";
import { Link } from "react-router-dom"; // Link komponentini import qilish
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800 font-medium">Contact</span>
        </nav>

        {/* Contact content goes here */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info Section */}
          <div className="col-span-1 bg-white shadow-md rounded-lg p-6">
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 rounded-full p-3 mr-4">
                  <FaPhone className="text-red-500 h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Call To Us</h3>
              </div>
              <p className="text-gray-600">We are available 24/7, 7 days a week.</p>
              <p className="mt-2 font-medium text-gray-800">Phone: +88061112222</p>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 rounded-full p-3 mr-4">
                  <FaEnvelope className="text-blue-500 h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Write To Us</h3>
              </div>
              <p className="text-gray-600">Fill out our form and we will contact you within 24 hours.</p>
              <p className="mt-2 font-medium text-gray-800">Emails: customer@exclusive.com</p>
              <p className="font-medium text-gray-800">support@exclusive.com</p>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="col-span-2 bg-white shadow-md rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Your Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-red-500 text-white font-medium text-lg rounded-md shadow hover:bg-red-600 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
