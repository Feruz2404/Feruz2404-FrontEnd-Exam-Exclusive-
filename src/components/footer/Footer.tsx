import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { GoPaperAirplane } from "react-icons/go";
import { BsCCircle } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { PiXLogoLight } from "react-icons/pi";

import qr from "../../assets/images/qr.svg";
import googlePlay from "../../assets/images/google_play.svg";
import appStore from "../../assets/images/app_store.svg";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = useCallback((path: string) => {
    navigate(path);
  }, [navigate]);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Subscribed!");
  };

  const socialLinks = [
    { icon: FaFacebookF, href: "https://www.facebook.com/" },
    { icon: PiXLogoLight, href: "https://x.com/" },
    { icon: FaInstagram, href: "https://www.instagram.com/" },
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/" },
  ];

  return (
    <footer className="bg-primary pt-20 flex flex-col gap-16 text-white">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 w-full px-4 gap-8">

        {/* Subscription Section */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <h3 className="text-2xl font-semibold font-inter mb-6">Exclusive</h3>
          <p className="text-xl font-medium mb-6">Subscribe</p>
          <p className="mb-4">Get 10% off your first order</p>
          <form onSubmit={handleEmailSubmit}>
            <div className="flex border border-white bg-black rounded-md py-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full outline-none bg-black pl-4 text-white"
                required
              />
              <GoPaperAirplane
                className="text-2xl mr-3 cursor-pointer hover:text-gray-600 duration-150"
                onClick={() => handleNavigation("/")}
              />
            </div>
          </form>
        </div>

        {/* Support Section */}
        <FooterSection title="Support">
          <address className="not-italic">A.Navoiy street 12, Tashkent</address>
          <a href="mailto:exclusive@gmail.com" className="hover:underline">
            rferuz96@gmail.com
          </a>
          <a href="tel:+88015-88888-9999" className="hover:underline">
            +998-20-003-24-06
          </a>
        </FooterSection>

        {/* Account Section */}
        <FooterSection title="Account">
          <FooterLinkItem to="/my-account">My Account</FooterLinkItem>
          <FooterLinkItem to="/login">Login / Register</FooterLinkItem>
          <FooterLinkItem to="/cart">Cart</FooterLinkItem>
          <FooterLinkItem to="/wishlist">Wishlist</FooterLinkItem>
          <FooterLinkItem to="/shop">Shop</FooterLinkItem>
        </FooterSection>

        {/* Quick Links Section */}
        <FooterSection title="Quick Links">
          <FooterLinkItem to="/privacy-policy">Privacy Policy</FooterLinkItem>
          <FooterLinkItem to="/terms-of-use">Terms Of Use</FooterLinkItem>
          <FooterLinkItem to="/faq">FAQ</FooterLinkItem>
          <FooterLinkItem to="/contact">Contact</FooterLinkItem>
        </FooterSection>

        {/* Download App Section */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <h3 className="text-xl font-medium mb-6">Download App</h3>
          <p className="text-xs mb-2">Save $3 with App New User Only</p>
          <div className="flex gap-2 mb-6">
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
          <div className="flex gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl cursor-pointer hover:text-gray-600 duration-150"
              >
                <link.icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="flex justify-center items-center gap-1 border-t border-zinc-800 py-5">
        <BsCCircle className="text-zinc-700" />
        <p className="text-zinc-700">Copyright Rimel 2022. All rights reserved.</p>
      </div>
    </footer>
  );
};

interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, children }) => (
  <div className="col-span-1">
    <h3 className="text-xl font-medium mb-6">{title}</h3>
    <div className="flex flex-col gap-4">{children}</div>
  </div>
);

interface FooterLinkItemProps {
  to: string;
  children: React.ReactNode;
}

const FooterLinkItem: React.FC<FooterLinkItemProps> = ({ to, children }) => {
  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    navigate(to);
  }, [navigate, to]);

  return (
    <button onClick={handleClick} className="hover:underline">
      {children}
    </button>
  );
};

export default Footer;
