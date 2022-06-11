export async function createOrFindUser(
  email: string,
  fullname: string,
  password: string
) {
  const res = await fetch("http://localhost:3000/api/auth", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({ email, fullname, password }),
  });
  console.log({ res });
  const data = await res.json();
  return data;
}
