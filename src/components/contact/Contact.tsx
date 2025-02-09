import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            We'd Love To Hear From You
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Have questions? We're here to help. Get in touch with us today!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          <div className="bg-white shadow-xl rounded-2xl p-6 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-red-100 rounded-full p-3 mr-4">
                <FaPhone className="text-red-500 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Call Us</h3>
            </div>
            <p className="text-gray-600">Our friendly team is here to answer your questions.</p>
            <p className="mt-3 font-medium text-gray-800">+88061112222</p>
          </div>

          <div className="bg-white shadow-xl rounded-2xl p-6 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 rounded-full p-3 mr-4">
                <FaEnvelope className="text-blue-500 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Email Us</h3>
            </div>
            <p className="text-gray-600">We'll get back to you within 24 hours.</p>
            <p className="mt-3 font-medium text-gray-800">customer@exclusive.com</p>
            <p className="font-medium text-gray-800">support@exclusive.com</p>
          </div>

          <div className="bg-white shadow-xl rounded-2xl p-6 hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Visit Us</h3>
            <p className="text-gray-600">Come say hello at our office.</p>
            <address className="mt-3 text-gray-800">
              111 Bijoy Sarani,
              <br />
              Dhaka, Bangladesh
            </address>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-extrabold text-gray-900 mb-8">Send us a message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
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
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
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
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
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
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-4 px-6 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
