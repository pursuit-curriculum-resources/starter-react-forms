import { useState } from "react";
export default function DogDetails({ dog }) {
  const [showDetails, setShowDetails] = useState(false);
  function toggleDogDetails() {
    setShowDetails(!showDetails);
  }
  return (
    <>
      <button onClick={toggleDogDetails}>
        {!showDetails ? "Show details" : "Hide details"}
      </button>
      {showDetails ? (
        <div className="dog-details">
          <p>
            {" "}
            <span>id:</span>
            {dog.id}
          </p>
          <p>
            <span>present:</span>
            {dog.present ? "true" : "false"}
          </p>
          <p>
            <span>grade:</span> {dog.grade}
          </p>
          <p>
            <span>notes:</span> {dog.notes}
          </p>
        </div>
      ) : null}
    </>
  );
}
