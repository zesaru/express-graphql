import React, { Component } from "react";
import { Query, Mutation } from "react-apollo";
import { OBTENER_PRODUCTOS } from "../../queries";
import { Link } from "react-router-dom";
import { ELIMINAR_PRODUCTO } from "../../mutations";

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
                <tbody>
                  {data.obtenerProductos.map(item => {
                    const { id } = item;
                    return (
                      <tr key={id}>
                        <td>{item.nombre}</td>
                        <td>{item.precio}</td>
                        <td>{item.stock}</td>
                        <td>
                          <Mutation mutation={ELIMINAR_PRODUCTO}>
                            {eliminarProducto => (
                              <button
                                onClick={() => {
                                  if (
                                    window.confirm(
                                      "seguro que quieres eliminar este producto?"
                                    )
                                  ) {
                                    eliminarProducto({
                                      variables: { id }
                                    });
                                  }
                                }}
                                type="button"
                                className="btn btn-danger"
                              >
                                &times; Eliminar
                              </button>
                            )}
                          </Mutation>
                        </td>
                        <td>
                          <Link
                            to={`/productos/editar/${id}`}
                            className="btn btn-success"
                          >
                            Editar Producto
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            );
          }}
        </Query>
      </>
    );
  }
}

export default Productos;
