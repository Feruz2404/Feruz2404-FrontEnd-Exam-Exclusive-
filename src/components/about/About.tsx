import React from "react";
import {
  FaUsers,
  FaShoppingCart,
  FaSmile,
  FaDollarSign,
  FaShippingFast,
  FaHeadset,
  FaShieldAlt,
} from "react-icons/fa";
import ourstory from "../../assets/images/ourstory.jpg"; // Import the image
import { Link } from "react-router-dom";

// Define types for props
interface StatisticItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  bgColor: string;
}

interface TeamMemberCardProps {
  name: string;
  role: string;
  image: string;
}

// Functional Components with Type Definitions
const StatisticItem: React.FC<StatisticItemProps> = ({
  icon,
  value,
  label,
  bgColor,
}) => (
  <div className="flex flex-col items-center p-6 bg-white shadow rounded-xl">
    <div className={`p-4 rounded-full text-white ${bgColor} mb-4`}>{icon}</div>
    <h3 className="text-3xl font-bold text-gray-800 mb-2">{value}</h3>
    <p className="text-gray-600">{label}</p>
  </div>
);

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, role, image }) => (
  <div className="text-center bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
    <img
      src={image}
      alt={name}
      className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
      loading="lazy"
    />
    <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
    <p className="text-gray-600">{role}</p>
    <div className="flex justify-center mt-4 space-x-4 text-gray-500">
      <a href="#" className="hover:text-blue-500">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="#" className="hover:text-pink-500">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="#" className="hover:text-blue-700">
        <i className="fab fa-linkedin"></i>
      </a>
    </div>
  </div>
);

const About: React.FC = () => {
  const teamMembers = [
    {
      name: "Tom Cruise",
      role: "Founder & Chairman",
      image:
        "https://static01.nyt.com/images/2022/05/18/arts/18cannes-day2-tom-cruise-event3/18cannes-day2-tom-cruise-event3-mediumSquareAt3X.jpg",
    },
    {
      name: "Emma Watson",
      role: "Managing Director",
      image:
        "https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/canvas/2021/12/07/4cc13a06-dbe9-4adb-b761-3c7c2caf04d8_98f9ca2f.jpg?itok=o7T1SnW-&v=1638870231",
    },
    {
      name: "Will Smith",
      role: "Product Designer",
      image:
        "https://variety.com/wp-content/uploads/2025/01/GettyImages-1445892465.jpg?w=681&h=454&crop=1",
    },
  ];

  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 md:px-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800 font-medium">About</span>
        </nav>

        {/* Our Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16"> {/* Keep grid layout */}
          <div>
            <h2 className="text-5xl font-extrabold text-gray-900 mb-5">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Launched in 2015, Exclusive is South Asia’s premier online shopping
              marketplace with an active presence in Bangladesh. Supported by a wide
              range of tailored marketing, data, and service solutions, Exclusive has
              10,500 sellers and 300 brands and serves 3 million customers across the
              region.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Exclusive has more than 1 million products to offer, growing at a very
              fast pace. Exclusive offers a diverse assortment in categories ranging
              from consumer electronics to fashion.
            </p>
          </div>
          <div className="order-first lg:order-last"> {/* Add order classes */}
            <img
              src={ourstory} // Use the imported image
              alt="Our Story"
              className="rounded-lg shadow-md object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <StatisticItem
            icon={<FaUsers className="h-8 w-8" />}
            value="10.5k"
            label="Sellers active on our site"
            bgColor="bg-blue-500"
          />
          <StatisticItem
            icon={<FaShoppingCart className="h-8 w-8" />}
            value="33k"
            label="Monthly Product Sale"
            bgColor="bg-red-500"
          />
          <StatisticItem
            icon={<FaSmile className="h-8 w-8" />}
            value="45.5k"
            label="Customer active on our site"
            bgColor="bg-green-500"
          />
          <StatisticItem
            icon={<FaDollarSign className="h-8 w-8" />}
            value="25k"
            label="Annual gross sale in our site"
            bgColor="bg-yellow-500"
          />
        </div>

        {/* Our Team Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Meet Our Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} {...member} />
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <FaShippingFast className="h-12 w-12 text-gray-700 mx-auto mb-4" />
            <h4 className="text-lg font-semibold">Free and Fast Delivery</h4>
            <p className="text-gray-600">Free delivery for all orders over $140</p>
          </div>
          <div className="text-center">
            <FaHeadset className="h-12 w-12 text-gray-700 mx-auto mb-4" />
            <h4 className="text-lg font-semibold">24/7 Customer Service</h4>
            <p className="text-gray-600">Friendly 24/7 customer support</p>
          </div>
          <div className="text-center">
            <FaShieldAlt className="h-12 w-12 text-gray-700 mx-auto mb-4" />
            <h4 className="text-lg font-semibold">Money Back Guarantee</h4>
            <p className="text-gray-600">We return money within 30 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
