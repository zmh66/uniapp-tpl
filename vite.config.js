import uni from "@dcloudio/vite-plugin-uni";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    build: {
      outDir: "dist",
    },
    // 配置插件：uni
    plugins: [uni()],
    resolve: {
      alias: {
        "@": "",
      },
    },
    define: {
      "process.env": {
        BASE_URL: "https://idcos.yun.shop",
      },
    },
    server: {
      port: 4400,
      proxy: {
        "^/api/": {
          target: "https://idcos.yun.shop",
          changeOrigin: true,
          // rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  };
});
