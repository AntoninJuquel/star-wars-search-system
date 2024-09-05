const API_URL = import.meta.env.VITE_API_URL;

function getSessionToken() {
  const session = sessionStorage.getItem("authentication");
  return session ? JSON.parse(session).state.token : null;
}

export async function login(username: string, password: string) {
  try {
    const token = `Basic ${btoa(`${username}:${password}`)}`;
    await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        authorization: token,
      },
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Invalid credentials");
      }
    });
    return token;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getCollections(): Promise<Record<string, string> | null> {
  try {
    const response = await fetch(`${API_URL}/`, {
      headers: {
        authorization: getSessionToken(),
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch collections");
    }
    return response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function search(url: string) {
  try {
    const newUrl = new URL(url);

    if (newUrl.pathname.split("/").length <= 2 && !newUrl.search) return null;

    const response = await fetch(
      `${API_URL}${newUrl.pathname}${newUrl.search}`,
      {
        headers: {
          authorization: getSessionToken(),
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch search results");
    }
    return response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}
