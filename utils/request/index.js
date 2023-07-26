// 引入拦截器配置
import { requestInterceptors, responseInterceptors } from "./interceptors.js";
//  初始化请求配置
const initRequest = (vm) => {
  // uni.$u.http.setConfig((defaultConfig) => {
  // 	/* defaultConfig 为默认全局配置 */
  // 	defaultConfig.baseURL = process.env.BASE_URL /* 根域名 */
  // 	return defaultConfig
  // })
  requestInterceptors();
  responseInterceptors();
};
export { initRequest };
