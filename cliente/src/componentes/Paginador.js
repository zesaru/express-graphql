import React, { Component } from "react";

export class Paginador extends Component {
  state = {};
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
    return (
      <div className="mt-5 d-flex justify-content-center">{btnAnterior}</div>
    );
  }
}

export default Paginador;
