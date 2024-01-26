export const Contact = ({ contact: { name, number } }) => {
  return (
    <>
      <h2>{name}</h2>
      <p>{number}</p>
      <button type="button">Delate</button>
    </>
  );
};
