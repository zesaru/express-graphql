import express from "express";
//graphql
import graphqlHTTP from "express-graphql";
import { schema } from "./data/schema";

const app = express();

app.get("/", (req, res) => {
  res.send("Todo listo");
});


app.use(
  "/graphql",
  graphqlHTTP({
    //que schema va a utilizar
    schema,
    // utilizar graphiql
    graphiql: true
  })
);

app.listen(8000, () => console.log("servidor esta funcionando"));
