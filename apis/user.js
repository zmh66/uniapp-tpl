const { http } = uni.$u || {};

// login
export const login = (params, config = {}) => {
	return http.post("/api/v1/record/sso/login", params, config)
}
