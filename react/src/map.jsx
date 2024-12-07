import React from 'react';

export const Map = () => {
  const flowers = [
    {
      id: 1,
      name: 'Rose',
      color: 'Red',
      price: 10,
      img: '/vite.svg',  // Path from the public folder
      quantity: 5,
      description: 'A beautiful red flower',
    },
    {
      id: 2,
      name: 'Lily',
      color: 'Yellow',
      price: 5,
      img: '/vite.svg',  // Path from the public folder
      quantity: 10,
      description: 'A vibrant yellow flower',
    },
    {
      id: 3,
      name: 'Tulip',
      color: 'Purple',
      price: 8,
      img: '/vite.svg',  // Path from the public folder
      quantity: 8,
      description: 'A delicate purple flower',
    },
  ];

  return (
    <div>
      <ul>
        {flowers.map((flower) => (
          <li key={flower.id} style={{border:"2px solid red" , padding : "10px ",margin:"10px"}}>
            <img src={flower.img} alt={flower.name} width="50" />
            <h3>{flower.name}</h3>
            <p>Color: {flower.color}</p>
            <p>Price: ${flower.price}</p>
            <p>Quantity: {flower.quantity}</p>
            <p>Description: {flower.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
