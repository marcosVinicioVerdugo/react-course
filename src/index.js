import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product, { Navbar } from "./Product";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";
import { Posts } from "./Posts";

const root = ReactDOM.createRoot(document.getElementById("root"));

const handleChange = (e) => {
  console.log(e.target.value);
};

const users = [
  {
    id: 1,
    name: "Marcos Verdugo",
    image: "https://robohash.org/user1",
  },
  {
    id: 2,
    name: "Vinicio Beltran",
    image: "https://robohash.org/user2",
  },
  {
    id: 3,
    name: "hola mundo",
    image: "https://robohash.org/user3",
  },
];

function Counter() {
  const [mensaje, setMensaje] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("render");
  }, [counter]);

  return (
    <div>
      <input
        onChange={(e) => {
          setMensaje(e.target.value);
        }}
      />
      <button
        onClick={() => {
          alert("el mensaje es: " + mensaje);
        }}
      >
        Save
      </button>
      <hr />
      <h1>Counter: {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Incrementar
      </button>
    </div>
  );
}

root.render(
  <>
    {/*
    <TaskCard ready={true} />
    <Saludar />
    <Button text="Saludad" />

    <input onChange={handleChange} />

    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("enviado");
      }}
    >
      <h1>Registro de usuario</h1>
      <button>Submit</button>
    </form>

    <Posts />

    {users.map((user, i) => {
      return (
        <div key={i}>
          <h1>{user.name}</h1>
          <img src={user.image} />
        </div>
      );
    })}
  */}

    <Counter />

    {/* <Button text="Click me" />
    <Button text="Hello world" name="Joe"/> */}

    {/*     <UserCard
      name="Marcos"
      amount={3000}
      married={true}
      points={[99, 33.3, 22.2]}
      address={{
        street: "6 de abril",
        city: "New York",
      }}
      greet={function () {
        alert("hello");
      }}
    /> */}
  </>
);
