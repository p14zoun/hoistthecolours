import React from "react";

interface CardProps {
  title: string;
  imageUrl: string;
  description: string;
  buttonText: string;
  link: string;
}

function Card({ title, imageUrl, description, buttonText, link }: CardProps) {
  return (
    <div className="card w-15 shadow-xl">
      <a href={link}>
        <div className="card-body bg-gray-800 ">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions">
            {/* <button className="btn btn-white">{buttonText}</button> */}
          </div>
        </div>
      </a>
    </div>
  );
}

export default Card;
