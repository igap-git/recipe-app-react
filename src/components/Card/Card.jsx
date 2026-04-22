import React from "react";
import "./Card.css"

export default function Card({ SourceImage, title }) {
    return (
        <div className="card">
            <img src={SourceImage} alt={title} />
            <p>{title}</p>
        </div>
    );
}