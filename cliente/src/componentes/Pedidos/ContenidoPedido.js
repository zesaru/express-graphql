import React, { Component } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import Resumen from "./Resumen";

export class ContenidoPedido extends Component {
  state = { productos: [] };
  seleccionarProductos = productos => {
    this.setState({
      productos
    });
  };
  render() {
    return (
      <>
        <h2 className="text-center mb-5">Seleccionar Productos</h2>
        <Select
          onChange={this.seleccionarProductos}
          options={this.props.productos}
          isMulti={true}
          components={makeAnimated()}
          placeholder={"Seleccionar Producto"}
          getOptionValue={options => options.id}
          getOptionLabel={options => options.nombre}
        />
        <Resumen productos={this.state.productos} />
      </>
    );
  }
}

export default ContenidoPedido;
