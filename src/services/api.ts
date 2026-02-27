export const login = async (cpf: string, password: string) => {
  const response = await fetch("https://overmature-lizzie-noncryptically.ngrok-free.dev/auth/login", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ cpf, password }),
  });

  const data = await response.json();

  if (!response.ok || !data.access_token) {
    throw data;
  }

  return data;
};
