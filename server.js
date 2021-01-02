const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const app = express();
const env = require("dotenv");
const schema = require("./schema/schema");
const cors = require("cors");
const path = require('path')

env.config();

app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`App running on port : ${PORT}`));
