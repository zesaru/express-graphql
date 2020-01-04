import { buildSchema } from "graphql";

const schema = buildSchema(`
  type Cliente {
    id: ID
    nombre:String
    apellido:String
    empresa:String
    emails:[Email]
    edad: Int
    tipo: TipoCliente
    pedidos: [Pedido]
  }
  type Email{
    email:String
  }
  type Pedido{
    producto:String
    precio: Int
  }
  enum TipoCliente{
    BASICO
    PREMIUM
  }
  type Query {
    getCliente(id: ID):Cliente
  }
  input PedidoInput {
    producto: String
    precio: Int
  }
  input EmailInput{
    email: String 
  }
  """ campos para los clientes nuevos """
  input ClienteInput {
    id: ID
    nombre:String!
    apellido:String!
    empresa:String!
    emails:[EmailInput]
    edad:Int!
    tipo: TipoCliente!
    pedidos: [PedidoInput]
  }
  """ Mutation para crear nuevos clientes """
  type Mutation {
    #Nombre del resolver, Input con Datos y Valor que retorna
    """ Te permite crear nuevos clientes """
    crearCliente(input: ClienteInput) : Cliente
  }
`);

export default schema;
