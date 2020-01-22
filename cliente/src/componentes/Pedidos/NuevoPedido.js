import React, { Component } from "react";
import DatosCliente from "./DatosCliente";

export class NuevoPedido extends Component {
  state = {};
  render() {
    const { id } = this.props.match.params;
    return (
      <>
        <h1 className="text-center mb-5">Nuevo Pedido</h1>
        <div className="row">
          <div className="col-md-3">
            <DatosCliente id={id} />
          </div>
          <div className="col-md-9">Pedido aqui</div>
        </div>
      </>
    );
  }
}

export default NuevoPedido;
