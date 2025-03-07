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
        // '/getting-started': { redirect: '/getting-started/introduction', prerender: false },
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
                'i-ph:browser',
                'i-ph:cube',
                'i-ph:house',
                'i-simple-icons:nuxt',
                'i-simple-icons:statamic',
                'i-simple-icons:googletagmanager',
                'i-simple-icons:github',
                'i-lucide:moon',
                'i-lucide:sun',
                'i-lucide:search',
                'i-lucide:external-link',
                'i-lucide:hash',
                'i-lucide:chevron-down',
                'i-mdi:palette-outline',
                'i-mdi:web',
                'i-mdi:page-layout-header',
                'i-mdi:format-title',
                'i-mdi:link-variant',
                'i-mdi:image-filter-center-focus-strong-outline',
                'i-mdi:white-balance-sunny',
                'i-mdi:moon-waning-crescent',
                'i-mdi:alphabet-latin',
                'i-mdi:magnify',
                'i-mdi:page-layout-footer',
                'i-mdi:circle-edit-outline',
                'i-mdi:table-of-contents',
                'i-ph:note-pencil',
                'i-lucide:arrow-right',
                'i-lucide:arrow-left',
                'i-lucide:arrow-up',
                'i-lucide:arrow-down',
                'i-lucide:arrow-right',
                'i-lucide:arrow-left',
                'i-lucide:arrow-up',
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
