import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./componentes/Layout/Header";
import Clientes from "./componentes/Clientes/Clientes";
import NuevoCliente from "./componentes/Clientes/NuevoCliente";
import NuevoProducto from "./componentes/Productos/NuevoProducto";
import EditarCliente from "./componentes/Clientes/EditarCliente";
import Productos from "./componentes/Productos/Productos";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache({
    addTypename: false
  }),
  onError: ({ networkError, graphQLErrors }) => {
    console.log("graphQLErrors", graphQLErrors);
    console.log("networkError", networkError);
  }
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Clientes} />
              <Route
                exact
                path="/cliente/editar/:id"
                component={EditarCliente}
              />
              <Route exact path="/cliente/nuevo" component={NuevoCliente} />
              <Route exact path="/productos/nuevo" component={NuevoProducto} />
              <Route exact path="/productos" component={Productos} />
            </Switch>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
