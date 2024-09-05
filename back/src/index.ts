import Hapi from "@hapi/hapi";
import Basic from "@hapi/basic";
import { searchHandler } from "handlers/search.js";
import { getCollections } from "resources/swapi.js";

const users: Record<
  string,
  {
    username: string;
    password: string;
    name: string;
    id: string;
  }
> = {
  Luke: {
    username: "Luke",
    password: "DadSucks",
    name: "Luke",
    id: "1",
  },
};

const validate = async (request: any, username: string, password: string) => {
  const user = users[username];

  if (!user) {
    return { credentials: null, isValid: false };
  }

  const isValid = password === user.password;
  const credentials = { id: user.id, name: user.name };

  return { isValid, credentials };
};

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
    routes: {
      cors: true,
    },
  });

  await server.register(Basic);

  server.auth.strategy("simple", "basic", { validate });

  server.auth.default("simple");

  server.route({
    method: "POST",
    path: "/login",
    handler: (_, h) => {
      return h.response({ message: "Login successful" }).code(200);
    },
  });

  server.route({
    method: "GET",
    path: "/",
    handler: getCollections,
  });

  server.route({
    method: "GET",
    path: "/search/",
    handler: searchHandler,
  });

  server.route({
    method: "GET",
    path: "/search/{collection}/{id?}",
    handler: searchHandler,
  });

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
