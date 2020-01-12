import gql from "graphql-tag";

export const CLIENTES_QUERY = gql`
  {
    getClientes {
      id
      nombre
      apellido
      empresa
    }
  }
`;

export const CLIENTE_QUERY = gql`
  query consultar_cliente($id: ID) {
    getCliente(id: $id) {
      id
      nombre
      apellido
      empresa
    }
  }
`;
