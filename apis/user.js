const { http } = uni.$u;

// login
export const login = (params, config = {}) =>
  http.post("/api/v1/record/sso/login", params, config);
