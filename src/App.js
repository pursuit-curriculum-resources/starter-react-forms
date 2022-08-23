import { dogsData } from "./data";
import { useState } from "react";
import DogDetails from "./DogDetails";

// console.log(dogsData);

function App() {
  const [dogs, setDogs] = useState(dogsData);

  function addDog() {
    const rover = {
      id: dogs.length + 50,
      name: "Rover",
      present: false,
      grade: "100",
      notes: "The goodest new dog",
    };
    setDogs([rover, ...dogs]);
  }

  function removeDog(dogID) {
    const filteredDogArray = dogs.filter((dog) => dog.id !== dogID);
    setDogs(filteredDogArray);
  }

  function updateDogAttendance(dogId) {
    // Copy the dogs array so that the copy can be updated
    const dogArray = [...dogs];
    // Find the dog with the matching id number's array position
    const index = dogArray.findIndex((dog) => dogId === dog.id);
    // Access the dog's present property and update the value
    // By using ! it will change a true value to false or a false value to true
    dogArray[index].present = !dogArray[index].present;
    // Put the updated array into setDogs to update the dogs array
    setDogs(dogArray);
  }
  return (
    <div className="App">
      <header>
        <h1> Bark and Bowl Doggy Day Care</h1>
      </header>
      <main>
        <button onClick={addDog}>Add a new dog</button>
        <ul>
          {dogs.map((dog) => {
            return (
              <li key={dog.id}>
                <span
                  onClick={() => updateDogAttendance(dog.id)}
                  style={
                    dog.present
                      ? { textDecoration: "none" }
                      : { textDecoration: "line-through" }
                  }
                >
                  {dog.name}{" "}
                </span>

                <button onClick={() => removeDog(dog.id)}>remove</button>
                <DogDetails dog={dog} />
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}

export default App;
