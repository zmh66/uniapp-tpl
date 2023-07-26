const { http } = uni.$u

// test
export const test = (params, config = {}) => http.post('/api/test', params, config)