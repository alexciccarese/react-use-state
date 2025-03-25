import { useState } from "react";
import languages from "./data/languages";

export default function Main() {
  const [selectedDescription, setSelectedDescription] = useState(""); 
  const [selectedName, setSelectedName] = useState("");
  const [selectedButton, setSelectedButton] = useState(null)

  const handleSelectLanguage = (item) => {
    setSelectedName(item.name);
    setSelectedDescription(item.description) 
    setSelectedButton(item.id)
  };

  return (
    <div className="container mt-4 mb-4">
      <h2>Learn Web development</h2>

      <div className="d-flex gap-3 mb-3">
        {languages.map((item) => (
          <Buttons
            key={`item-${item.id}`}
            name={item.name}
            isSelected={selectedButton === item.id}
            handleSelect={() => handleSelectLanguage(item)} 
          />
        ))}
      </div>

      <Content 
      name={selectedName || "Seleziona un linguaggio"}
      description={selectedDescription || "Nessuna descrizione disponibile"}
      /> 
    </div>
  );
}

function Buttons({ name, handleSelect, isSelected }) {
  return (
    <div className="buttons d-flex justify-content-start mt-3">
      <button type="button" 
      className={`btn ${isSelected ? "btn-warning" : "btn-primary"}`}
      onClick={handleSelect}>
        {name}
      </button>
    </div>
  );
}

function Content({ name, description }) {
  return (
    <div className="text">
      <h4>{name}</h4>
      <p className="card-text">{description}</p>
    </div>
  );
}