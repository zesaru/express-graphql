import React from "react";
import { Query } from "react-apollo";
import { CLIENTE_QUERY } from "../../queries";

const DatosCliente = ({ id }) => {
  return (
    <>
      <h2 className="text-center mb-3">Resumen del Cliente</h2>
      <Query query={CLIENTE_QUERY} variables={{ id }}>
        {({ loading, error, data, startPolling, stopPolling }) => {
          if (loading) return "Cargando...";
          if (error) return `Error ${error.message}`;
          console.log(data.getCliente);

          return <p>HOola</p>;
        }}
      </Query>
    </>
  );
};

export default DatosCliente;
