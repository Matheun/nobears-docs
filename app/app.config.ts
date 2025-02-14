export default defineAppConfig({
    ui: {
        colors: {
            primary: "green",
            secondary: "sky",
            neutral: "slate",
        },
    },
    uiPro: {
        footer: {
            slots: {
                root: "border-t border-(--ui-border)",
                left: "text-sm text-(--ui-text-muted)",
            },
        },
    },
    seo: {
        siteName: "Nuxt UI Pro - Docs template",
    },
    header: {
        title: "",
        to: "/",
        logo: {
            alt: "",
            light: "/NOBEARS_Logo_SMALL.svg",
            dark: "/NOBEARS_Logo_SMALL_licht.svg",
        },
        search: true,
        colorMode: true,
        links: [
            {
                label: "Layers",
                icon: "i-ph:stack",
                to: "/layers",
                children: [
                    {
                        label: "UI",
                        icon: "i-ph:cube",
                        to: "/layers/ui",
                    },
                ],
            },
            {
                label: "Modules",
                icon: "i-ph:puzzle-piece",
                to: "/modules",
                children: [
                    {
                        label: "Statamic",
                        icon: "i-simple-icons:statamic",
                        to: "/modules/statamic",
                    },
                ],
            },
            {
                label: "Packages",
                icon: "i-ph:package",
                to: "/packages",
            },
            {
                label: "Templates",
                icon: "i-ph:browsers",
                to: "/templates",
                children: [
                    {
                        label: "Nuxt Basic",
                        icon: "i-ph:browser",
                        to: "/templates/nuxt-basic",
                    },
                    {
                        label: "Nuxt Multi-Site",
                        icon: "i-ph:users",
                        to: "/templates/nuxt-multi-site",
                    },
                    {
                        label: "Nuxt Multi-Site/ Domain",
                        icon: "i-ph:translate",
                        to: "/templates/nuxt-multi-domain-&-site",
                    },
                ],
            },
        ],
        icons: [{
            "icon": "i-simple-icons-github",
            "to": "https://github.com/nuxt-ui-pro/docs/tree/v3",
            "target": "_blank",
            "aria-label": "GitHub",
        }],
    },
    footer: {
        credits: `Copyright © ${new Date().getFullYear()}`,
        colorMode: false,
        links: [{
            "icon": "i-simple-icons-nuxtdotjs",
            "to": "https://nuxt.com",
            "target": "_blank",
            "aria-label": "Nuxt Website",
        }, {
            "icon": "i-simple-icons-discord",
            "to": "https://discord.com/invite/ps2h6QT",
            "target": "_blank",
            "aria-label": "Nuxt UI on Discord",
        }, {
            "icon": "i-simple-icons-x",
            "to": "https://x.com/nuxt_js",
            "target": "_blank",
            "aria-label": "Nuxt on X",
        }, {
            "icon": "i-simple-icons-github",
            "to": "https://github.com/nuxt/ui",
            "target": "_blank",
            "aria-label": "Nuxt UI on GitHub",
        }],
    },
    toc: {
        title: "Table of Contents",
        bottom: {
            title: "Community",
            edit: "https://github.com/nuxt-ui-pro/docs/edit/v3/content",
            links: [{
                icon: "i-lucide-star",
                label: "Star on GitHub",
                to: "https://github.com/nuxt/ui",
                target: "_blank",
            }, {
                icon: "i-lucide-book-open",
                label: "Nuxt UI Pro docs",
                to: "https://ui3.nuxt.dev/getting-started/installation/pro/nuxt",
                target: "_blank",
            }, {
                icon: "i-simple-icons-nuxtdotjs",
                label: "Purchase a license",
                to: "https://ui.nuxt.com/pro/purchase",
                target: "_blank",
            }],
        },
    },
});
