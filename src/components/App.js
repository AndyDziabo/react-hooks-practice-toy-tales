import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyList, setToyList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then(res => res.json())
      .then(toyList => setToyList(toyList));
  }, []);

  function handleCreateNewToy(newToy){
    setToyList([...toyList, newToy]);
  }

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleDonateToy(donatedToy) {
    const updatedToys = toyList.filter((toy) => toy.id !== donatedToy.id);
    setToyList(updatedToys);
  }

  function handleAddLike(updatedToy) {
    const updatedToys = toyList.map((toy) => {
      if(toy.id === updatedToy.id){
        return updatedToy;
      }else{
        return toy;
      }
    });
    setToyList(updatedToys);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onCreateNewToy={handleCreateNewToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      {toyList.map((toy) => (
        <ToyContainer key={toy.id} toy={toy} onDonateToy={handleDonateToy} onAddLike={handleAddLike} />
      ))}
    </>
  );
}

export default App;
