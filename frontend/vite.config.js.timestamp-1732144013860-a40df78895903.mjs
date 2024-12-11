// vite.config.js
import { defineConfig } from "file:///C:/Users/a933554/OneDrive%20-%20Eviden/Escritorio/frontend/react-eccomerce/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/a933554/OneDrive%20-%20Eviden/Escritorio/frontend/react-eccomerce/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    // Necesario para pruebas con React
    include: ["src/**/*.test.{js,jsx,ts,tsx}"],
    // Incluye pruebas con extensiones JSX y TSX
    setupFiles: "./src/__test__/setupTest.js",
    // Ruta al archivo de configuración
    coverage: {
      provider: "v8",
      reporter: ["text", "lcov"],
      reportsDirectory: "./coverage"
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxhOTMzNTU0XFxcXE9uZURyaXZlIC0gRXZpZGVuXFxcXEVzY3JpdG9yaW9cXFxcZnJvbnRlbmRcXFxccmVhY3QtZWNjb21lcmNlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxhOTMzNTU0XFxcXE9uZURyaXZlIC0gRXZpZGVuXFxcXEVzY3JpdG9yaW9cXFxcZnJvbnRlbmRcXFxccmVhY3QtZWNjb21lcmNlXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9hOTMzNTU0L09uZURyaXZlJTIwLSUyMEV2aWRlbi9Fc2NyaXRvcmlvL2Zyb250ZW5kL3JlYWN0LWVjY29tZXJjZS92aXRlLmNvbmZpZy5qc1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gICAgcGx1Z2luczogW3JlYWN0KCldLFxuICAgIHRlc3Q6IHtcbiAgICAgICAgZ2xvYmFsczogdHJ1ZSxcbiAgICAgICAgZW52aXJvbm1lbnQ6IFwianNkb21cIiwgLy8gTmVjZXNhcmlvIHBhcmEgcHJ1ZWJhcyBjb24gUmVhY3RcbiAgICAgICAgaW5jbHVkZTogW1wic3JjLyoqLyoudGVzdC57anMsanN4LHRzLHRzeH1cIl0sIC8vIEluY2x1eWUgcHJ1ZWJhcyBjb24gZXh0ZW5zaW9uZXMgSlNYIHkgVFNYXG4gICAgICAgIHNldHVwRmlsZXM6ICcuL3NyYy9fX3Rlc3RfXy9zZXR1cFRlc3QuanMnLCAvLyBSdXRhIGFsIGFyY2hpdm8gZGUgY29uZmlndXJhY2lcdTAwRjNuXG4gICAgICAgIGNvdmVyYWdlOiB7XG4gICAgICAgICAgICBwcm92aWRlcjogXCJ2OFwiLFxuICAgICAgICAgICAgcmVwb3J0ZXI6IFtcInRleHRcIiwgXCJsY292XCJdLFxuICAgICAgICAgICAgcmVwb3J0c0RpcmVjdG9yeTogXCIuL2NvdmVyYWdlXCIsXG4gICAgICAgIH0sXG4gICAgfSxcbn0pO1xuXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXNaLFNBQVMsb0JBQW9CO0FBQ25iLE9BQU8sV0FBVztBQUVsQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUN4QixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsTUFBTTtBQUFBLElBQ0YsU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBO0FBQUEsSUFDYixTQUFTLENBQUMsK0JBQStCO0FBQUE7QUFBQSxJQUN6QyxZQUFZO0FBQUE7QUFBQSxJQUNaLFVBQVU7QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLFVBQVUsQ0FBQyxRQUFRLE1BQU07QUFBQSxNQUN6QixrQkFBa0I7QUFBQSxJQUN0QjtBQUFBLEVBQ0o7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
