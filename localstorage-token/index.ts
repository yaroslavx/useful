type StoredToken = {
  value: string;
  timestamp: number;
};

const TOKEN_KEY = 'auth_token';

const TOKEN_TTL_MS = 86340000;

const isExpired = (timestamp?: number): boolean => {
  if (!timestamp) return false;

  const now = new Date().getTime();
  const diff = now - timestamp;

  return diff > TOKEN_TTL_MS;
};

const setToken = (access_token: string): void => {
  localStorage.setItem(
    TOKEN_KEY,
    JSON.stringify({
      value: access_token,
      timestamp: new Date().getTime(),
    })
  );
};

const removeToken = (): void => {
  localStorage.removeItem(TOKEN_KEY);
};

const getToken = (): StoredToken | null => {
  let result = null;

  const storedToken = localStorage.getItem(TOKEN_KEY);
  storedToken && (result = JSON.parse(storedToken));

  return result;
};

export { getToken, setToken, removeToken, isExpired };
