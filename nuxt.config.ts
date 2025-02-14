// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        "@nuxt/eslint",
        "@nuxt/image",
        "@nuxt/ui-pro",
        "@nuxt/content",
        "nuxt-og-image",
    ],

    devtools: {
        enabled: true,
    },

    css: ["~/assets/css/main.css"],

    future: {
        compatibilityVersion: 4,
    },

    compatibilityDate: "2024-07-11",

    nitro: {
        prerender: {
            routes: [
                "/",
            ],
            failOnError: false,
            crawlLinks: true,
            concurrency: 12,
        },
    },

    eslint: {
        config: {
            stylistic: {
                indent: 4,
                quotes: "double",
                semi: true,
            },
            standalone: false,
        },
    },
});
