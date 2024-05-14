import "./task.css";
export function TaskCard({ ready }) {
  /*   const cardStyles = {
    background: "#202020",
    color: "#ffffff",
    padding: "20px",
  };

  const titleStyle = {
    fontWeight: "lighter",
  }; */

  return (
    <div className="card">
      <h1>Mi primer tarea</h1>
      <span className={ready ? 'bg-green' : 'bg-red'}>
        {ready ? "Tarea realizada" : "Tarea pendiente"}
      </span>
      <h1>Hola mundo</h1>
    </div>
  );
}
