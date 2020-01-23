import React from "react";
import Producto from "./Producto";

const Resumen = props => {
  const productos = props.productos;
  if (productos.length === 0) return null;

  return (
    <>
      <h2 className="text-center md-5">Resumen y Cantidades</h2>
      <table className="table">
        <thead className="bg-success text-light">
          <tr className="font-weight-bold">
            <th>Producto</th>
            <th>Precio</th>
            <th>Inventario</th>
            <th>Cantidad</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto, index) => (
            <Producto />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Resumen;
