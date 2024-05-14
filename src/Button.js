import PropTypes from "prop-types";

export function Button({ text, name = "User" }) {
  return (
    <button
      onClick={function () {
        alert("Hola boton");
      }}
    >
      {text} - {name}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

/*
Button.defaultProps = {
    name: 'Puto'
}
*/
