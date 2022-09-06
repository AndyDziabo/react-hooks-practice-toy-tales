import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toy, onDonateToy, onAddLike }) {
  return (
    <div id="toy-collection"><ToyCard toy={toy} onDonateToy={onDonateToy} onAddLike={onAddLike} /></div>
  );
}

export default ToyContainer;
