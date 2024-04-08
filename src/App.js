import React, { useState } from "react";
// import "./styles.css";

// Tab component
const Tab = ({ label, onClick, isActive }) => (
  <button className={isActive ? "active" : ""} onClick={onClick}>
    {label}
  </button>
);

// Tabs component
const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <Tab
          key={tab.id}
          label={tab.label}
          onClick={() => handleTabClick(tab.id)}
          isActive={activeTab === tab.id}
        />
      ))}
      <div className="tab-content">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};

// Example usage of Tabs component
export default function App() {
  const tabs = [
    { id: "tab1", label: "Tab 1", content: <div>Content for Tab 1</div> },
    { id: "tab2", label: "Tab 2", content: <div>Content for Tab 2</div> },
    { id: "tab3", label: "Tab 3", content: <div>Content for Tab 3</div> },
  ];

  return (
    <div className="App">
      <Tabs tabs={tabs} />
    </div>
  );
}
