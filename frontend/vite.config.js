import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],

    server: {
        port: 3000,

        proxy: {
            "/api": {
                target: "http://artvisionoptical.lan",
                changeOrigin: true,
            },

            "/assets": {
                target: "http://artvisionoptical.lan",
                changeOrigin: true,
            },

            "/files": {
                target: "http://artvisionoptical.lan",
                changeOrigin: true,
            },
        },
    },

    build: {
        outDir: "../optical_manager/public/frontend",
        emptyOutDir: true,
    },
});