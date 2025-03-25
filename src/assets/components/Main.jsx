import { useState } from "react";
import languages from "./data/languages";

export default function Main() {
  const [selectedDescription, setSelectedDescription] = useState(""); 

  const handleOpen = (description) => {
    setSelectedDescription(description) 
  };

  return (
    <div className="container mt-4 mb-4">
      <h2>Learn Web development</h2>

      <div className="d-flex gap-3 mb-3">
        {languages.map((item) => (
          <Buttons
            key={`item-${item.id}`}
            name={item.name}
            handleOpen={() => handleOpen(item.description)} 
          />
        ))}
      </div>

      <Content description={selectedDescription} /> 
    </div>
  );
}

function Buttons({ name, handleOpen, isSelected }) {
  return (
    <div className="buttons d-flex justify-content-start mt-3">
      <button type="button" 
      className="btn btn-primary"
      onClick={handleOpen}>
        {name}
      </button>
    </div>
  );
}

function Content({ description }) {
  return (
    <div className="text">
      <p className="card-text">{description}</p>
    </div>
  );
}