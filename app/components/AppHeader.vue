<script setup lang="ts">
import type { ContentNavigationItem } from "@nuxt/content";

const navigation = inject<Ref<ContentNavigationItem[]>>("navigation");
const route = useRoute();
const { header } = useAppConfig();

const headerLinks = computed(() => {
    const firstRoutePart = route.fullPath.split('/')[1];
    const currentCollection = route.params.slug?.[0];
    const links = header?.links;
    links?.forEach((link) => {
        if (firstRoutePart === link.to.split('/')[1]) {
            link.active = true;
        }
        else if (link.to.includes(currentCollection) && link.to !== route.path) {
            link.active = true;
        }
        else {
            link.active = false;
        }
    });
    return links;
});
</script>

<template>
    <UHeader
        :to="header?.to || '/'"
        :ui="{ center: 'flex-1' }"
    >
        <template
            v-if="header?.logo?.dark || header?.logo?.light || header?.title"
            #title
        >
            <UColorModeImage
                v-if="header?.logo?.dark || header?.logo?.light"
                :alt="header?.logo?.alt"
                :dark="header?.logo?.dark!"
                :light="header?.logo?.light!"
                class="h-6 w-auto shrink-0"
            />

            <span v-else-if="header?.title">
                {{ header.title }}
            </span>
        </template>

        <template
            v-else
            #left
        >
            <NuxtLink :to="header?.to || '/'">
                <LogoPro class="w-auto h-6 shrink-0" />
            </NuxtLink>

            <TemplateMenu />
        </template>

        <div>
            <UNavigationMenu
                :items="headerLinks"
                class="w-full justify-center"
                content-orientation="vertical"
                arrow
            />
        </div>

        <template #right>
            <UContentSearchButton v-if="header?.search" />

            <UColorModeButton v-if="header?.colorMode" />

            <template v-if="header?.icons">
                <UButton
                    v-for="(icon, index) of header.icons"
                    :key="index"
                    v-bind="{ color: 'neutral', variant: 'ghost', ...icon }"
                />
            </template>
        </template>

        <template #content>
            <UContentNavigation
                :navigation="navigation"
                highlight
            />
        </template>
    </UHeader>
</template>
