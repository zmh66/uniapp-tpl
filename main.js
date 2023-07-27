import App from "./App";
import { createSSRApp } from "vue";
import { createPinia } from "pinia";
import uvUI from "@/uni_modules/uv-ui-tools";
import { Request } from "@/utils/request/index";

export function createApp() {
  const app = createSSRApp(App);
  const pinia = createPinia();

  // 引入请求封装
  Request(app);

  app.use(pinia);
  app.use(uvUI);

  // 调用setConfig方法，方法内部会进行对象属性深度合并，可以放心嵌套配置
  // 需要在Vue.use(uvUI)之后执行
  uni.$uv.setConfig({
    // 修改$uv.config对象的属性
    config: {
      // 修改默认单位为rpx，相当于执行 uni.$uv.config.unit = 'rpx'
      unit: "rpx",
    },
    // 修改$uv.props对象的属性
    props: {
      // 修改uv-text组件的size参数的默认值，注意：默认值都要用default声明
      text: {
        color: {
          // default: "red",
        },
      },
      // 其他组件属性配置，具体的参数名称可以去每个组件的props.js中进行查看
      // ......
    },
  });

  return {
    app,
    pinia,
  };
}
