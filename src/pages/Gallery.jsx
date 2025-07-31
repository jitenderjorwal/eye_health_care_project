import React from "react";
import "./Gallery.css";

const Gallery = () => {
  const cards = [
    {
      img: "https://bhartieyefoundation.in/img/Computer-Vision-Syndrome.webp",
      text: "Card One Text",
    },
    {
      img: "https://bhartieyefoundation.in/img/Cornea-Transplant.webp",
      text: "Card Two Text",
    },
    {
      img: "https://bhartieyefoundation.in/img/Laser-Cataract-Surgery.webp",
      text: "Card Three Text",
    },
    {
      img: "https://bhartieyefoundation.in/img/Lasik-Eye-Surgery.webp",
      text: "Card Four Text",
    },
    {
      img: "https://bhartieyefoundation.in/img/Lasik-Eye-Surgery.webp",
      text: "Card Four Text",
    },
    {
      img: "https://bhartieyefoundation.in/img/Squint-Treatment.webp",
      text: "Card Four Text",
    },
    {
      img: "https://bhartieyefoundation.in/img/Retina-Surgery.webp.webp",
      text: "Card Four Text",
    },
    {
      img: "https://bhartieyefoundation.in/img/Refractive-Surgery.webp",
      text: "Card Four Text",
    },
  ];

  return (
    <div className='gallery'>
      {cards.map((card, index) => (
        <div key={index} className='card'>
          <img src={card.img} alt={`Card ${index + 1}`} className='card-img' />
          <div className='card-text'>{card.text}</div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
