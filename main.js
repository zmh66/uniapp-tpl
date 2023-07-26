import App from './App'
import { createSSRApp } from 'vue'
import { createPinia } from 'pinia'
import uviewPlus from '@/uni_modules/uview-plus'
import { initRequest } from '@/utils/request/index'

export function createApp() {
	
  const app = createSSRApp(App)
  const pinia = createPinia()
	
	// 引入请求封装
	initRequest(app)
	
  app.use(pinia)
  app.use(uviewPlus)
	
	uni.$u.setConfig({
		// 修改$u.config对象的属性
		config: {
			// 修改默认单位为rpx，相当于执行 uni.$u.config.unit = 'rpx'
			unit: 'rpx'
		},
		// 修改$u.props对象的属性
		props: {
			// 修改radio组件的size参数的默认值，相当于执行 uni.$u.props.radio.size = 30
			// radio: {
			// 	size: 15
			// }
			// 其他组件属性配置
			// ......
		}
	})

  return {
    app,
		pinia
  }
}
