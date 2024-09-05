const BASE_URL = "https://swapi.dev/api";
const collections = {
  people: "https://swapi.dev/api/people/",
  planets: "https://swapi.dev/api/planets/",
  films: "https://swapi.dev/api/films/",
  species: "https://swapi.dev/api/species/",
  vehicles: "https://swapi.dev/api/vehicles/",
  starships: "https://swapi.dev/api/starships/",
};

export async function getCollections() {
  return collections;
}

export async function getCollection({
  collection,
  page,
  search,
}: {
  collection: string;
  page?: number;
  search?: string;
}) {
  const url = new URL(`${BASE_URL}/${collection}/`);
  if (page) {
    url.searchParams.set("page", page.toString());
  }
  if (search) {
    url.searchParams.set("search", search);
  }
  return fetch(url.toString()).then((response) => response.json());
}

export async function getItem({
  collection,
  id,
}: {
  collection: string;
  id: string;
}) {
  return fetch(`${BASE_URL}/${collection}/${id}`).then((response) =>
    response.json()
  );
}

export async function globalSearch({
  search,
  page,
}: {
  search: string;
  page?: number;
}) {
  const searchResults = await Promise.all(
    Object.keys(collections).map(async (collection) => {
      const url = new URL(`${BASE_URL}/${collection}/`);
      url.searchParams.set("search", search);
      if (page) {
        url.searchParams.set("page", page.toString());
      }
      return fetch(url.toString()).then((response) => response.json());
    })
  );

  return Object.keys(collections).reduce((acc, collection, index) => {
    return {
      ...acc,
      [collection]: searchResults[index],
    };
  }, {});
}
