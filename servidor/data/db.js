import mongoose from "mongoose";
import { Stream } from "stream";

mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost/clientes", {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => console.log("DB Connected!"))
  .catch(err => {
    console.log(`DB Connection Error: ${err.message}`);
  });

const clientesSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  empresa: String,
  emails: Array,
  edad: Number,
  tipo: String,
  pedidos: Array
});

const Clientes = mongoose.model("clientes", clientesSchema);

const productosSchema = new mongoose.Schema({
  nombre: String,
  precio: Number,
  stock: Number
});

const Productos = mongoose.model("productos", productosSchema);

export { Clientes, Productos };
