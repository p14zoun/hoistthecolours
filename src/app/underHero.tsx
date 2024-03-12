import React from "react";
import Card from "./card";

function UnderHero() {
  // Array of objects with card content
  const cards = [
    {
      title: "Audiobooks!",
      imageUrl: "https://example.com/audiobooks.jpg",
      description:
        "Listen to captivating stories on-the-go with our vast collection of audiobooks!",
      buttonText: "Go",
      link: "#",
    },
    {
      title: "Books!",
      imageUrl: "https://example.com/books.jpg",
      description:
        "Expand your knowledge and imagination with our diverse range of books!",
      buttonText: "Go",
      link: "#",
    },
    {
      title: "Documentaries!",
      imageUrl: "https://example.com/documentaries.jpg",
      description:
        "Explore the wonders of the world and learn from real-life stories with our documentaries!",
      buttonText: "Go",
      link: "#",
    },
    {
      title: "Videos!",
      imageUrl: "https://example.com/videos.jpg",
      description:
        "Discover entertaining and informative videos covering a variety of topics!",
      buttonText: "Go",
      link: "#",
    },
  ];

  return (
    <div id="underHero" className="flex justify-center items-center h-screen">
      <div className="container">
        <div className="grid grid-cols-2 gap-4">
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              imageUrl={card.imageUrl}
              description={card.description}
              buttonText={card.buttonText}
              link={card.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default UnderHero;
