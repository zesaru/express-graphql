import express from "express";
//graphql
import graphqlHTTP from "express-graphql";
import schema from "./schema";

const app = express();

app.get("/", (req, res) => {
  res.send("Todo listo");
});

//el resolver
const root = {
  cliente: () => {
    return {
      id: 35345345345234,
      nombre: "cesar",
      apellido: "murillo",
      empresa: "embajada",
      email: "n@ede.com"
    };
  }
};

app.use(
  "/graphql",
  graphqlHTTP({
    //que schema va a utilizar
    schema,
    // el resolver se pasa como rootValue
    rootValue: root,
    // utilizar graphiql
    graphiql: true
  })
);

app.listen(8000, () => console.log("servidor esta funcionando"));
