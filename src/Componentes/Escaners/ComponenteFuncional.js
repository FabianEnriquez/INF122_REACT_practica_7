import React from "react";
import { Link } from "react-router-dom";

// El nombre Escaners puede ser diferente
export default function ComponenteFuncional() {
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    alert("Comprado");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <h1>Formulario de Compra de Escaners</h1>
          <label htmlFor="nombre">Nombre completo:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            required
            style={{ marginLeft: "10px", padding: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="producto">Producto a comprar:</label>
          <select
            id="producto"
            name="producto"
            required
            style={{ marginLeft: "10px", padding: "5px" }}
          >
            <option value="">Seleccione una opción</option>
            <option value="Prod1">Escanner Fujitsu</option>
            <option value="Prod2">Escanner Fujitsu2</option>
            <option value="Prod3">Escanner Fujitsu3</option>
          </select>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="fecha">Fecha:</label>
          <input
            type="date"
            id="fecha"
            name="fecha"
            required
            style={{ marginLeft: "10px", padding: "5px" }}
          />
        </div>
        <button type="submit" style={{ marginTop: "10px" }}>
          Enviar
        </button>
      </form>

      <a
        href="/"
        className="btn btn-warning"
        style={{ marginTop: "20px", display: "inline-block" }}
      >
        Volver a la página Principal
      </a>
    </div>
  );
}
