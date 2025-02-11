const MenuItem = ({ pizza }) => {
  return (
    <div>
      <p>
        <img src={pizza.imageUrl} />
      </p>
      <p>{pizza.name}</p>
      <p>{pizza.unitPrice}</p>
      {pizza.ingredients.map((i) => (
        <span key={i}>{i} </span>
      ))}
    </div>
  );
};

export default MenuItem;
