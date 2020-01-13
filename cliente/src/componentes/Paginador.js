import React, { Component } from "react";

export class Paginador extends Component {
  state = {
    paginador: {
      paginas: Math.ceil(Number(this.props.totalClientes) / this.props.limite)
    }
  };
  render() {
    const { actual } = this.props;
    const btnAnterior =
      actual > 1 ? (
        <button type="button" className="btn btn-success mr-2">
          &laquo; Anterior
        </button>
      ) : (
        ""
      );
    // boton siguiente
    const { paginas } = this.state.paginador;

    const btnSiguiente =
      actual !== paginas ? (
        <button type="button" className="btn btn-success">
          &raquo; Siguiente
        </button>
      ) : (
        ""
      );
    return (
      <div className="mt-5 d-flex justify-content-center">
        {btnAnterior}
        {btnSiguiente}
      </div>
    );
  }
}

export default Paginador;
