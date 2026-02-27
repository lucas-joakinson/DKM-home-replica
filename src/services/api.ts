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

  if (!response.ok || (!data.access_token && !data.acess_token)) {
    throw data;
  }

  if (data.acess_token && !data.access_token) {
    data.access_token = data.acess_token;
  }

  return data;
};

export const getUserProfile = async (token: string) => {
  const response = await fetch("https://overmature-lizzie-noncryptically.ngrok-free.dev/auth/me", {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch user profile");
  }

  return await response.json();
};
