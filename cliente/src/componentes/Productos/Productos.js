import React, { Component } from "react";
import { Query, Mutation } from "react-apollo";
import { Link } from "react-router-dom";
import { OBTENER_PRODUCTOS } from "../../queries";
import { ELIMINAR_PRODUCTO } from "../../mutations";
import Exito from "../Alertas/Exito";
import Paginador from "../Paginador";

export class Productos extends Component {
  limite = 2;

  state = {
    paginador: {
      offset: 0,
      actual: 1
    },
    alerta: {
      mostrar: false,
      mensaje: ""
    }
  };
  paginaAnterior = () => {
    this.setState({
      paginador: {
        offset: this.state.paginador.offset - this.limite,
        actual: this.state.paginador.actual - 1
      }
    });
  };

  paginaSiguiente = () => {
    this.setState({
      paginador: {
        offset: this.state.paginador.offset + this.limite,
        actual: this.state.paginador.actual + 1
      }
    });
  };

  render() {
    const {
      alerta: { mostrar, mensaje }
    } = this.state;

    const alerta = mostrar ? <Exito mensaje={mensaje} /> : "";
    return (
      <>
        <h1 className="text-center mb-5">Productos</h1>
        {alerta}
        <Query
          query={OBTENER_PRODUCTOS}
          pollInterval={1000}
          variables={{
            limite: this.limite,
            offset: this.state.paginador.offset
          }}
        >
          {({ loading, error, data, startPolling, stopPolling }) => {
            if (loading) return "Cargando...";
            if (error) return `Error: ${error.messages}`;
            console.log(data);
            return (
              <>
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
                            <Mutation
                              mutation={ELIMINAR_PRODUCTO}
                              onCompleted={data => {
                                this.setState(
                                  {
                                    alerta: {
                                      mostrar: true,
                                      mensaje: data.eliminarProducto
                                    }
                                  },
                                  () => {
                                    setTimeout(() => {
                                      this.setState({
                                        alerta: {
                                          mostrar: false,
                                          mensaje: ""
                                        }
                                      });
                                    }, 3000);
                                  }
                                );
                              }}
                            >
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
                <Paginador
                  actual={this.state.paginador.actual}
                  total={data.totalProductos}
                  limite={this.limite}
                  paginaAnterior={this.paginaAnterior}
                  paginaSiguiente={this.paginaSiguiente}
                />
              </>
            );
          }}
        </Query>
      </>
    );
  }
}

export default Productos;
