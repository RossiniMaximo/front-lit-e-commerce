const BASE_URL = process.env.ENV_VAR || "http://localhost:3000/api";

export function getStoragedToken() {
  return localStorage.getItem("auth_token");
}
export function setLocalStorageValue(id: string, token: string) {
  return localStorage.setItem(id, token);
}

async function fetchAPI(input: RequestInfo, init: any) {
  const token = getStoragedToken();
  init.headers = init.headers || {};

  if (token) {
    init.headers["Authorization"] = "Bearer" + " " + token;
  }
  init.headers["Content-Type"] = "application/json";
  if (init.body) {
    init.body = JSON.stringify(init.body);
  }
  const res = await fetch(BASE_URL + input, init);
  const json = await res.json();
  return json;
}

export async function createOrFindUser(
  email: string,
  fullname: string,
  password: string
) {
  const res = await fetchAPI("/auth", {
    method: "POST",
    body: { email, fullname, password },
  });
  return res;
}

export async function getToken(email: string, code) {
  const res = await fetchAPI("/auth/token", {
    method: "POST",
    body: { email, code: parseInt(code) },
  });
  setLocalStorageValue("auth_token", res.result);
  return res;
}

export async function addToCart(id: string) {
  const res = await fetchAPI("/cart", {
    method: "post",
    body: { id },
  });
  return res;
}

export async function getCart() {
  const res = await fetchAPI("/cart", {
    method: "get",
  });
  const items = res.map(async (i) => {
    const res = await fetch("https://api.mercadolibre.com/items/" + i);
    const json = await res.json();
    return json;
  });
  const results = await Promise.all(items);
  return results;
}

export async function deleteItemFromCart(id: string) {
  const res = await fetchAPI("/cart", {
    method: "delete",
    body: { id },
  });
  return res;
}

export async function updatePassword(email: string, password: string) {
  const res = await fetchAPI("/auth", {
    method: "PATCH",
    body: { email, password },
  });
  alert("password changed succesfully");
  return res;
}
