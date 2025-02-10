import React from "react";
import { useNavigate } from "react-router-dom";
import { GoPaperAirplane } from "react-icons/go";
import { BsCCircle } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { PiXLogoLight } from "react-icons/pi";

import qr from "../../assets/images/qr.svg";
import googlePlay from "../../assets/images/google_play.svg";
import appStore from "../../assets/images/app_store.svg";

const Footer = () => {
  const socialLinks = [
    { icon: FaFacebookF, href: "https://www.facebook.com/" },
    { icon: PiXLogoLight, href: "https://x.com/" },
    { icon: FaInstagram, href: "https://www.instagram.com/" },
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/" },
  ];

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 px-4">
        {/* Exclusive Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Exclusive</h3>
          <p className="text-lg mb-2">Subscribe</p>
          <p className="mb-4">Get 10% off your first order</p>
          <form onSubmit={(e) => e.preventDefault()} className="relative">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-black border border-gray-600 rounded-md py-3 px-4 text-white placeholder-gray-400"
              required
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white text-xl"
            >
              <GoPaperAirplane />
            </button>
          </form>
        </div>

        {/* Support Section */}
        <FooterSection title="Support">
          <p>A.Navoiy street 12, Tashkent</p>
          <a href="mailto:rferuz96@gmail.com" className="hover:underline">
            rferuz96@gmail.com
          </a>
          <a href="tel:+998200032406" className="hover:underline">
            +998-20-003-24-06
          </a>
        </FooterSection>

        {/* Account Section */}
        <FooterSection title="Account">
          <FooterLinkItem to="/profile">My Account</FooterLinkItem>
          <FooterLinkItem to="/login">Login / Register</FooterLinkItem>
          <FooterLinkItem to="/cart">Cart</FooterLinkItem>
          <FooterLinkItem to="/wishlist">Wishlist</FooterLinkItem>
          <FooterLinkItem to="/shop">Shop</FooterLinkItem>
        </FooterSection>

        {/* Quick Links Section */}
        <FooterSection title="Quick Link">
          <FooterLinkItem to="/privacy-policy">Privacy Policy</FooterLinkItem>
          <FooterLinkItem to="/terms-of-use">Terms Of Use</FooterLinkItem>
          <FooterLinkItem to="/faq">FAQ</FooterLinkItem>
          <FooterLinkItem to="/contact">Contact</FooterLinkItem>
          <FooterLinkItem to="/about">About</FooterLinkItem>
        </FooterSection>
        
        {/* Download App Section */}
        <div>
          <h3 className="text-xl font-medium mb-4">Download App</h3>
          <p className="text-sm mb-2">Save $3 with App New User Only</p>
          <div className="flex items-center gap-4 mb-6">
            <img src={qr} alt="QR Code" className="w-16" />
            <div className="flex flex-col gap-2">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src={googlePlay}
                  alt="Google Play"
                  className="w-28 cursor-pointer hover:opacity-80"
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src={appStore}
                  alt="App Store"
                  className="w-28 cursor-pointer hover:opacity-80"
                />
              </a>
            </div>
          </div>
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-gray-400"
              >
                <link.icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-12 border-t border-gray-700 pt-4 text-center text-gray-500">
        <BsCCircle className="inline-block mr-1" />
        Copyright Rimel 2022. All rights reserved.
      </div>
    </footer>
  );
};

const FooterSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <h3 className="text-xl font-medium mb-4">{title}</h3>
    <div className="flex flex-col gap-2">{children}</div>
  </div>
);

const FooterLinkItem = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(to)}
      className="hover:underline text-left"
    >
      {children}
    </button>
  );
};

export default Footer;
