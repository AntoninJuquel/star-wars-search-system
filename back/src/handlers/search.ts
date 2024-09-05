import Hapi from "@hapi/hapi";
import * as swapi from "../resources/swapi.js";
export function searchHandler(request: Hapi.Request, h: Hapi.ResponseToolkit) {
  try {
    const { collection, id } = request.params;
    const { page, search } = request.query;

    if (collection) {
      if (id) {
        return swapi.getItem({ collection, id }).then((item) => {
          return h.response(item);
        });
      }
      return swapi
        .getCollection({ collection, page, search })
        .then((collection) => {
          return h.response(collection);
        });
    }

    return swapi.globalSearch({ search, page }).then((results) => {
      return h.response(results);
    });
  } catch (error) {
    console.error(error);
    return h.response({ error: "Internal Server Error" }).code(500);
  }
}
