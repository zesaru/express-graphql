import mongoose from 'mongoose';
import { Clientes } from './db';
import { rejects } from 'assert';

class Cliente {
  constructor(id, { nombre, apellido, empresa, emails, edad, tipo, pedidos }) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.empresa = empresa;
    this.emails = emails;
    this.edad = edad;
    this.tipo = tipo;
    this.pedidos = pedidos;
  }
}

//el resolver
export const resolver = {
  Query: {
    getCliente: ({ id }) => {
      return new Cliente(id, clientesDB[id]);
    },
  },
  Mutation: {
    crearCliente: (root, { input }) => {
      const nuevoCliente = new Clientes({
        nombre: input.nombre,
        apellido: input.apellido,
        empresa: input.empresa,
        emails: input.emails,
        edad: input.edad,
        tipo: input.tipo,
        pedidos: input.pedidos
      });
      nuevoCliente.id = nuevoCliente.__id

      return new Promise((resolve, object) => {
        nuevoCliente.save((error) => {
          if (error) rejects(error)
          else resolve(nuevoCliente)
        })
      });

      clientesDB[id] = input;
      return new Cliente(id, input);
    }
  }
}