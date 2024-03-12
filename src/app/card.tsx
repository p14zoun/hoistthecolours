import React from "react";

interface CardProps {
  title: string;
  imageUrl: string;
  description: string;
  buttonText: string;
}

function Card({ title, imageUrl, description, buttonText }: CardProps) {
  return (
    <div className="card w-15 bg-gray-800 shadow-xl image-full">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <button className="btn btn-white">{buttonText}</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
