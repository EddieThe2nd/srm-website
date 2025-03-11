import { useState } from "react";
import './App.css';
import { RiGovernmentFill, RiTeamFill, RiRecycleFill, FaUmbrellaBeach, RiDeleteBinFill } from "react-icons/ri";

const stakeholderData = {
  "City Government": {
    icon: <RiGovernmentFill />, 
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
    icon: <RiTeamFill />, 
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
    icon: <RiRecycleFill />, 
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
    icon: <FaUmbrellaBeach />, 
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
    icon: <RiDeleteBinFill />, 
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

const StakeholderCard = ({ title, data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`stakeholder-card ${isOpen ? 'pop' : ''}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="card-icon">
        {data.icon} 
      </div>
      <h3 className="stakeholder-name">{title}</h3>
      <p>{data.description}</p>
      <div className={`requirements ${isOpen ? 'open' : ''}`}>
        <ul>
          {data.requirements.map((req, index) => (
            <li key={index}>
              <i className="ri-checkbox-circle-line text-teal-500 mr-2"></i>
              {req}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="app-container">
      <div className="content">
      <header className="header">
        <h1>Saving the Seas: A Collaborative Approach to Reducing Plastic Waste</h1>
        <p>Addressing plastic waste in Durban through stakeholder collaboration</p>
      </header>
        <h1>Key Stakeholders</h1>
        <a href="https://miro.com/app/board/uXjVIUht8KM=/">Here is the Link to my detailed interactive stakeholder requirements</a>
        <p className="info">
          <i className="ri-information-line mr-2"></i> Click on any card to view detailed requirements
        </p>
        <div className="cards-grid">
          {Object.entries(stakeholderData).map(([title, data]) => (
            <StakeholderCard key={title} title={title} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;