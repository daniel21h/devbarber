const BASE_API = 'https://api.b7web.com.br/devbarber/api';

export default {
  checkToken: async (token) => {
    const request = await fetch(`${BASE_API}/auth/refresh`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({token}),
    });
    const json = await request.json();

    return json;
  },

  signIn: async (email, password) => {
    const request = await fetch(`${BASE_API}/auth/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, password}),
    });
    const json = await request.json();

    return json;
  },

  signUp: async (name, email, password) => {
    const request = await fetch(`${BASE_API}/user`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, email, password}),
    });
    const json = await request.json();

    return json;
  },
};
