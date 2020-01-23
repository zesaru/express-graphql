import React, { Component } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

export class ContenidoPedido extends Component {
  state = {};
  render() {
    return (
      <Select
        options={this.props.productos}
        isMulti={true}
        components={makeAnimated()}
        placeholder={"Seleccionar Producto"}
        getOptionValue={options => options.id}
        getOptionLabel={options => options.nombre}
      />
    );
  }
}

export default ContenidoPedido;
