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

    routeRules: {
        '/layers/ui': { redirect: '/layers/ui/getting-started', prerender: false },
        '/modules/gtm': { redirect: '/modules/gtm/getting-started', prerender: false },
        '/modules/statamic': { redirect: '/modules/statamic/getting-started', prerender: false },
    },

    icon: {
        clientBundle: {
        // list of icons to include in the client bundle
            icons: [
                'i-ph:paint-brush-broad',
                'i-ph:stack',
                'i-ph:info',
                'i-ph:download',
                'i-ph:gear',
                'i-ph:handshake',
                'i-ph:puzzle-piece',
                'i-ph:browsers',
                'i-ph:cube',
                'i-simple-icons:nuxt',
                'i-simple-icons:statamic',
            ],

            // scan all components in the project and include icons 
            scan: true,

            // include all custom collections in the client bundle
            includeCustomCollections: true, 

            // guard for uncompressed bundle size, will fail the build if exceeds
            sizeLimitKb: 256,
        }
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
