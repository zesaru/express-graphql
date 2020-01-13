import React, { Component } from "react";
import { CLIENTE_QUERY } from "../queries";
import { Query } from "react-apollo";

import FormularioeEditarCliente from "./FormularioEditarCliente";

class EditarCliente extends Component {
  state = {};
  render() {
    const { id } = this.props.match.params;
    console.log(id);
    return (
      <>
        <h2 className="text-center">Editar Cliente</h2>

        <div className="row justify-content-center">
          <Query query={CLIENTE_QUERY} variables={{ id }}>
            {({ loading, error, data, refetch }) => {
              if (loading) return "Cargando...";
              if (error) return `Error! ${error.message}`;
              //console.log(data);
              return (
                <FormularioeEditarCliente
                  cliente={data.getCliente}
                  refetch={refetch}
                />
              );
            }}
          </Query>
        </div>
      </>
    );
  }
}

export default EditarCliente;
