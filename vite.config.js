import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
    css: {
        modules: {
            localsConvention: "camelCase",
            generateScopedName: "[name]__[local]___[has:base64:5]",
            hashPrefix: "wings",
            scopeBehaviour: "local",
            globalModulePaths: [/global\.module\.css$/],
        },
    },
})
