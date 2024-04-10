import { resolve } from "path";
// eslint-disable-next-line import/namespace
import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        cart: resolve(__dirname, "src/cart/index.html"),
        checkout: resolve(__dirname, "src/checkout/index.html"),
        product: resolve(__dirname, "src/product_pages/index.html"),
        categories: resolve(__dirname, "src/product-list/index.html"),
        orders: resolve(__dirname, "src/orders/index.html"),
        login: resolve(__dirname, "src/login/index.html"),
      },
      external
        : [
          "jwt-decode",
          fileURLToPath(
              new URL(
                  "src/js/auth.mjs",
                import.meta.url
              )
            ),
          /node_modules/
        ]
    },
  },
  // Add the following line to use ESM (ECMAScript Module) build
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
  },
});
