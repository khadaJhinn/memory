import React, { useState } from "react";

function MemoryGame() {
  // Création du tableau de cartes avec des paires
  const initialCards = [
    { id: 1, value: "1", flipped: true },
    { id: 2, value: "1", flipped: true },
    { id: 3, value: "2", flipped: true },
    { id: 4, value: "2", flipped: true },
    { id: 5, value: "3", flipped: true },
    { id: 6, value: "3", flipped: true },
    { id: 7, value: "4", flipped: true },
    { id: 8, value: "4", flipped: true },
    { id: 9, value: "5", flipped: true },
    { id: 10, value: "5", flipped: true },
    { id: 11, value: "6", flipped: true },
    { id: 12, value: "6", flipped: true },
    { id: 13, value: "7", flipped: true },
    { id: 14, value: "7", flipped: true },
    { id: 15, value: "8", flipped: true },
    { id: 16, value: "8", flipped: true },
  ].sort(() => Math.random() - 0.5); // Mélange des cartes

  const [cards] = useState(initialCards);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 100px)", gap: "10px" }}>
      {cards.map((card) => (
        <div
          key={card.id}
          style={{
            width: "100px",
            height: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            backgroundColor: "#fff",
            cursor: "default",
          }}
        >
          {card.value}
        </div>
      ))}
    </div>
  );
}

export default MemoryGame;

