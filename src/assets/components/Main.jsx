import { useState } from "react"
import languages from "./data/languages"


export default function Main() {
  return (
    <>
      <div className="container mt-4 mb-4">
        <h2>Learn Web development</h2>

        <div className="d-flex gap-3 mb-3">
        {languages.map((item) => (
          <Buttons key={`item-${item.id}`} name={item.name} />
        ))}
        </div>

        <div className="text">
          <p className="card-text">Seleziona un linguaggio per maggiori dettagli.</p>
        </div>
      </div>
    </>
  );
}

function Buttons({ name }) {
  return (
    <div className="buttons d-flex justify-content-start mt-3">
      <button type="button" className="btn btn-primary">
        {name}
      </button>
    </div>
  );
}