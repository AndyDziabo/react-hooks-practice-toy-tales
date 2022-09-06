import React from "react";

function ToyForm({ onCreateNewToy }) {
  function handleSubmit(e){
    e.preventDefault();
    const toyData = {
      name:  e.target.name.value,
      image: e.target.image.value,
      likes: 0,
    };
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toyData),
    })
      .then(res => res.json())
      .then(newToy => onCreateNewToy(newToy));
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
