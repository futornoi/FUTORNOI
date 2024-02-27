import react from "@vitejs/plugin-react"
import path from "path"
import { defineConfig } from "vite"
import svgr from "vite-plugin-svgr"

export default defineConfig({
    plugins: [
        react(),
        svgr({
            include: "**/*.svg",
        }),
    ],
    preview: { open: true },
    server: { host: false, port: 3000 },
    resolve: {
        alias: {
            "@app": path.resolve("src/app"),
            "@pages": path.resolve("src/pages"),
            "@modules": path.resolve("src/modules"),
            "@assets": path.resolve("src/assets"),
            "@styles": path.resolve("src/styles"),
            "@ui": path.resolve("src/ui"),
            "@hooks": path.resolve("src/hooks"),
        },
    },
})
