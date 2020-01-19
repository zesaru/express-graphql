import React, { Component } from "react";
import { Query } from "react-apollo";
import { OBTENER_PRODUCTO } from "../../queries";
import FormularioEditar from "./FormularioEditarProducto";

class EditarProducto extends Component {
  state = {};

  render() {
    const { id } = this.props.match.params;
    console.log(id);

    return (
      <>
        <h1 className="text-center">Editar Producto</h1>
        <div className="row justify-content-center">
          <Query query={OBTENER_PRODUCTO} variables={{ id }}>
            {({ loading, error, data, refetch }) => {
              if (loading) return "Cargando...";
              if (error) return `Error! ${error.message}`;
              //console.log(data);
              return (
                <FormularioEditar producto={data} id={id} refetch={refetch} />
              );
            }}
          </Query>
        </div>
      </>
    );
  }
}

export default EditarProducto;
