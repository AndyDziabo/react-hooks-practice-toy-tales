import React from "react";

function ToyCard({ toy, onDonateToy, onAddLike }) {
  function handleDonateClick() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(() => onDonateToy(toy));
  }

  function handleLike() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: toy.likes + 1,
      }),
    })
      .then(res => res.json())
      .then(updatedToy => onAddLike(updatedToy));
  }
  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDonateClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
