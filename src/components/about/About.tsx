// import React from "react";
import { FaUsers, FaCheckCircle, FaChartLine } from "react-icons/fa";
import defaultUserImage from "../../assets/images/user-default.webp";

// Component: Statistic Item
const StatisticItem = ({ icon, title, description, iconColor }: any) => (
  <div className="relative p-6 rounded-2xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
    {/* Background Icon */}
    <div className="absolute inset-0 opacity-10">
      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[10rem] ${iconColor === 'blue' ? 'text-blue-500' : iconColor === 'green' ? 'text-green-500' : 'text-red-500'}`}>
        {icon}
      </div>
    </div>

    {/* Content */}
    <div className="relative z-10 text-center">
      <div className={`inline-flex items-center justify-center p-3 rounded-full bg-${iconColor}-100 text-${iconColor}-500 mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  </div>
);

// Component: Team Member Card
const TeamMemberCard = ({ name, role, image }: any) => (
  <div className="relative group">
    <div className="absolute rounded-2xl inset-0 bg-gradient-to-tr from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md"></div>
    <div className="relative p-4 rounded-2xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto object-cover shadow-md mb-3"
      />
      <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
      <p className="text-gray-600">{role}</p>
    </div>
  </div>
);

const About = () => {
  const teamMembers = [
    { name: "John Doe", role: "CEO & Founder", image: defaultUserImage },
    { name: "Jane Smith", role: "Head of Marketing", image: defaultUserImage },
    { name: "Michael Brown", role: "Lead Developer", image: defaultUserImage },
  ];

  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 md:px-12">
        {/* About Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-5">Our Story</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-4xl mx-auto">
            We are a passionate team committed to delivering exceptional products and services. From our humble beginnings, we've strived to foster innovation, ensure quality, and build lasting relationships with our customers.
          </p>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          <StatisticItem
            icon={<FaUsers className="h-7 w-7" />}
            title="10,000+ Customers"
            description="Trusted by people worldwide"
            iconColor="blue"
          />
          <StatisticItem
            icon={<FaCheckCircle className="h-7 w-7" />}
            title="500+ Projects Completed"
            description="Successfully delivered quality services"
            iconColor="green"
          />
          <StatisticItem
            icon={<FaChartLine className="h-7 w-7" />}
            title="20+ Years Experience"
            description="In business and industry growth"
            iconColor="red"
          />
        </div>

        {/* Our Team Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">Meet Our Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} {...member} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
