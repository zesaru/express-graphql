import React from "react";
import { Query } from "react-apollo";
import { CLIENTE_QUERY } from "../../queries";

const DatosCliente = ({ id }) => {
  return (
    <>
      <h2 className="text-center mb-3">Resumen del Cliente</h2>
      <Query query={CLIENTE_QUERY} variables={{ id }} pollInterval={500}>
        {({ loading, error, data, startPolling, stopPolling }) => {
          if (loading) return "Cargando...";
          if (error) return `Error ${error.message}`;
          const {
            nombre,
            apellido,
            edad,
            emails,
            empresa,
            tipo
          } = data.getCliente;
          console.log(data.getCliente);
          return (
            <ul className="list-unstyled my-5">
              <li className="border font-weigth-bold p-2">
                Nombre: <span className="font-weight-normal">{nombre}</span>
              </li>
              <li className="border font-weigth-bold p-2">
                Apellido: <span className="font-weight-normal">{apellido}</span>
              </li>
              <li className="border font-weigth-bold p-2">
                edad: <span className="font-weight-normal">{edad}</span>
              </li>
              <li className="border font-weigth-bold p-2">
                emails:{" "}
                <span className="font-weight-normal">
                  {emails.map(email => ` ${email.email} `)}
                </span>
              </li>
              <li className="border font-weigth-bold p-2">
                empresa: <span className="font-weight-normal">{empresa}</span>
              </li>
              <li className="border font-weigth-bold p-2">
                tipo: <span className="font-weight-normal">{tipo}</span>
              </li>
            </ul>
          );
        }}
      </Query>
    </>
  );
};

export default DatosCliente;
