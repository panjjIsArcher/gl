// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  base: "./", // 确保相对路径正确
  server: {
    port: 3000,
    open: false,
    host: "0.0.0.0", // 支持局域网访问
  },
  build: {
    target: "esnext",
    rollupOptions: {
      output: {
        manualChunks: {
          three: ["three"], // 单独打包 Three.js
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": "/src", // 路径别名
    },
  },
  assetsInclude: ["**/*.glb", "**/*.gltf", "**/*.hdr"], // 支持3D模型
});
