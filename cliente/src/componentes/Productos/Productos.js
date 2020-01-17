import React, { Component } from "react";
import { Query } from "react-apollo";

export class Productos extends Component {
  render() {
    {
      ({ loading, error, data, startPolling, stopPolling }) => {
        if (loading) return "Cargando...";
        if (error) return `Error: ${error.messages}`;
        console.log(data);

        return (
          <>
            <h1 className="text-center mb-5">Productos</h1>
          </>
        );
      };
    }
  }
}

export default Productos;
