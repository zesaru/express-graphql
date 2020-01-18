import React, { Component } from "react";
import { Query } from "react-apollo";
import { OBTENER_PRODUCTOS } from "../../queries";

export class Productos extends Component {
  state = {};
  render() {
    return (
      <>
        <h1 className="text-center mb-5">Productos</h1>
        <Query query={OBTENER_PRODUCTOS} pollInterval={1000}>
          {({ loading, error, data, startPolling, stopPolling }) => {
            if (loading) return "Cargando...";
            if (error) return `Error: ${error.messages}`;
            console.log(data.obtenerProductos);

            return (
              <table className="table">
                <thead>
                  <tr className="table-primary">
                    <th scope="col">Nombre</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Eliminar</th>
                    <th scope="col">Editar</th>
                  </tr>
                </thead>
              </table>
            );
          }}
        </Query>
      </>
    );
  }
}

export default Productos;
