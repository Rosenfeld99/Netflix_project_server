const indexR = require("./index");
const usersR = require("./users");
const productsR = require("./products");
const categoriesR = require("./categories");
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
const { SECRET } = require("../config/secret");


// Swagger setup
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Netflix API Documentation",
      version: "1.0.0",
      description: "This is a exemple of API Netflix Swagger",
    },
    servers: [
      {
        url: `http://localhost:${SECRET.PORT}`, // --> local server URL
      },
    ],
  },
  apis: ["./swagger/*.js"], // Path to API documentation
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

exports.routesInit = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  app.use("/", indexR);
  app.use("/users", usersR);
  app.use("/products", productsR);
  app.use("/categories", categoriesR);
};


