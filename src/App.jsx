import { useState } from "react";
// import "remixicon/fonts/remixicon.css";

const stakeholderData = {
  "City Government": {
    icon: "ri-building-line",
    description: "Responsible for policymaking and waste management.",
    requirements: [
      "Implement a city-wide plastic ban",
      "Secure funding for waste management infrastructure",
      "Educate the public on plastic waste reduction",
      "Develop sustainable urban planning policies",
      "Monitor compliance with environmental regulations",
    ],
  },
  "Local Businesses": {
    icon: "ri-team-line",
    description: "Balancing sustainability with profitability.",
    requirements: [
      "Access affordable alternatives to plastic packaging",
      "Maintain customer satisfaction during the transition",
      "Avoid increased operational costs",
      "Implement green business practices",
      "Support local environmental initiatives",
    ],
  },
  "Environmental NGOs": {
    icon: "ri-recycle-line",
    description: "Advocating for strict environmental regulations.",
    requirements: [
      "Enforce strict penalties for non-compliance",
      "Promote long-term behavioural change",
      "Increase public awareness campaigns",
      "Coordinate with international environmental organizations",
      "Monitor marine ecosystem health",
    ],
  },
  "Tourists and Residents": {
    icon: "ri-sun-umbrella-line",
    description: "Beneficiaries of clean beaches.",
    requirements: [
      "Ensure convenience and accessibility of alternatives",
      "Keep beaches clean and attractive",
      "Receive clear communication about changes",
      "Participate in beach cleanup activities",
      "Support local environmental initiatives",
    ],
  },
  "Waste Management Companies": {
    icon: "ri-delete-bin-line",
    description: "Efficient waste collection and recycling.",
    requirements: [
      "Upgrade recycling infrastructure",
      "Secure consistent funding for operations",
      "Streamline waste collection processes",
      "Implement advanced sorting technologies",
      "Develop circular economy initiatives",
    ],
  },
};

function StakeholderCard({ title, icon, description, requirements }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="glass-card p-8 rounded-lg cursor-pointer transition-all hover:scale-105 hover:shadow-lg"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center justify-center w-16 h-16 mb-6 mx-auto">
        <i className={`${icon} text-3xl text-teal-500`}></i>
      </div>
      <h3 className="text-2xl font-semibold text-center text-navy-800 mb-4">
        {title}
      </h3>
      <p className="text-gray-600 text-center mb-6">{description}</p>
      {isOpen && (
        <div className="requirements transition-max-height duration-300 ease-in-out">
          <ul className="space-y-3 text-gray-700">
            {requirements.map((req, index) => (
              <li key={index} className="flex items-center">
                <i className="ri-checkbox-circle-line text-teal-500 mr-2"></i>
                {req}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center py-12"
      style={{
        backgroundImage:
          "url('https://public.readdy.ai/ai/img_res/27cf99e7a5b6bd3b14a25f33cd82b31b.jpg')",
      }}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <h1 className="text-4xl font-bold text-center text-teal-600 mb-4">
          Key Stakeholders
        </h1>
        <p className="text-center text-gray-600 mb-4">
          Here is the link to my detailed interactive stakeholder requirements
        </p>
        <p className="text-center text-gray-500 text-sm mb-12 flex items-center justify-center">
          <i className="ri-information-line mr-2"></i>
          Click on any card to view detailed requirements
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(stakeholderData).map(([title, data]) => (
            <StakeholderCard key={title} title={title} {...data} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
