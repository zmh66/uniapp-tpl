const { http } = uni.$uv;

// login
export const login = (params, config = {}) =>
  http.post("/api/v1/record/sso/login", params, config);
