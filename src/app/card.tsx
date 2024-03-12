import React from "react";

interface CardProps {
  title: string;
  imageUrl: string;
  description: string;
  buttonText: string;
}

function Card({ title, imageUrl, description, buttonText }: CardProps) {
  return (
    <div className="card w-15 bg-base-100 shadow-xl image-full">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <button className="btn btn-primary">{buttonText}</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
