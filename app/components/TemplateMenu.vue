<template>
    <UDropdownMenu
        v-slot="{ open }"
        :items="[{
            label: `Starter`,
            to: 'https://ui-pro-starter.nuxt.dev/',
        }, {
            label: `Landing`,
            to: 'https://landing-template.nuxt.dev/',
        }, {
            label: `Docs`,
            to: 'https://docs-template.nuxt.dev/',
            color: 'primary',
            checked: true,
            type: 'checkbox',
        }, {
            label: `SaaS`,
            to: 'https://saas-template.nuxt.dev/',
        }, {
            label: `Dashboard`,
            to: 'https://dashboard-template.nuxt.dev/',
        }]"
        :modal="false"
        :ui="{ content: 'w-(--reka-dropdown-menu-trigger-width) min-w-0' }"
        size="xs"
    >
        <UButton
            :class="[open && 'bg-[var(--ui-primary)]/15']"
            :ui="{
                trailingIcon: ['transition-transform duration-200', open ? 'rotate-180' : undefined].filter(Boolean).join(' '),
            }"
            class="-mb-[6px] font-semibold rounded-full truncate"
            label="Docs"
            size="xs"
            trailing-icon="i-lucide-chevron-down"
            variant="subtle"
        />
    </UDropdownMenu>
</template>
