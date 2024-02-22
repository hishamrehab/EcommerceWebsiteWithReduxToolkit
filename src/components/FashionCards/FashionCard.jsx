import React from 'react'

const FashionCard = ({img , desc , title , admin}) => {
  return (
    <div>
      <img src={img} alt="image" />
      <p>{title}</p>
      <p>{desc}</p>
      <p>{admin}</p>
    </div>
  );
}

export default FashionCard
