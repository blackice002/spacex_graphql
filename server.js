const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const app = express();
const env = require("dotenv");
const schema = require("./schema/schema");
const cors = require('cors')

env.config();

app.use(cors()) 
app.use(
        "/graphql",
        graphqlHTTP({
            schema,
            graphiql: true,
        })
        );

const PORT = process.env.PORT || 8010;

app.listen(PORT, () => console.log(`App running on port : ${PORT}`));
