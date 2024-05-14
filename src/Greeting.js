export function Greeting(props) {
  console.log(props.title);
  return <h1>{props.title}</h1>;
}

export function UserCard({ name, amount, married, address, greet }) {
  console.log(name, amount, married, address, greet);
  return (
    <div>
      <h1>{name}</h1>
      <p>${amount}</p>
      <p>{married ? "married" : "single"}</p>
      <ul>
        <li>{address.street}</li>
        <li>address.city</li>
      </ul>
    </div>
  );
}
