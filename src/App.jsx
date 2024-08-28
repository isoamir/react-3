import { useState } from "react";
import "./App.css";

const tabdata = [
  { id: 1, name: "Home", content: "Welcome to Home" },
  { id: 2, name: "Collection", content: "Collection Page" },
  { id: 3, name: "About", content: "About Page" },
  { id: 4, name: "Contact", content: "Contact Page " },
  // Add more tab data as needed...
];

function App() {
  const [activeTabId, setActiveTabId] = useState(1);

  const handleActiveTab = (id) => {
    setActiveTabId(id);
  };
  return (
    <div className="tab-component">
      {tabdata.map((item) => (
        <ul
          id={item.id}
          className={activeTabId === item.id ? "active" : ""}
          key={item.id}
          onClick={() => handleActiveTab(item.id)}
        >
          <li> {item.name}</li>
          {/* <li>
            {" "}
            {item.name}
          </li>

          <li>
            {" "}
            {item.name}
          </li>
          <li>
            {" "}
            {item.name}
          </li> */}
        </ul>
      ))};
      <div className="tabcontent">{tabdata[activeTabId - 1].content}</div>
    </div>
  );
}

export default App;
