<script setup lang="ts">
import type { ContentNavigationItem } from "@nuxt/content";
import { findPageBreadcrumb, findPageHeadline, mapContentNavigation } from "#ui-pro/utils/content";

definePageMeta({
    layout: "docs-get-started",
});

const route = useRoute();
const { toc, seo } = useAppConfig();
const navigation = inject<Ref<ContentNavigationItem[]>>("navigation");

const { data } = await useAsyncData(route.path, () => Promise.all([
    queryCollection("docs").path(route.path).first(),
    queryCollectionItemSurroundings("docs", route.path, {
        fields: ["title", "description"],
    }),
]), {
    transform: ([page, surround]) => ({ page, surround }),
});
if (!data.value || !data.value.page) {
    throw createError({ statusCode: 404, statusMessage: "Page not found", fatal: true });
}

const page = computed(() => data.value?.page);
const surround = computed(() => data.value?.surround);

useSeoMeta({
    title: page.value.seo.title,
    ogTitle: `${page.value.seo.title} - ${seo?.siteName}`,
    description: page.value.seo.description,
    ogDescription: page.value.seo.description,
});

defineOgImageComponent("Docs");

const headline = computed(() => findPageHeadline(navigation.value, page.value));

// const breadcrumb = computed(() => findPageBreadcrumb(navigation.value, page.value).map(link => ({
//     label: link.title,
//     to: link.path,
// })));

const breadcrumb = computed(() => {
    const links = mapContentNavigation(findPageBreadcrumb(navigation.value, page.value)).map(link => ({
        label: link.label,
        to: link.to,
    }));

    if (route.path.startsWith("/docs/bridge") || route.path.startsWith("/docs/migration")) {
        links.splice(1, 0, {
            label: "Upgrade Guide",
            to: "/docs/getting-started/upgrade",
        });
    }

    return links;
});

const links = computed(() => [toc?.bottom?.edit && {
    icon: "i-lucide-external-link",
    label: "Edit this page",
    to: `${toc.bottom.edit}/${page?.value?.path}`,
    target: "_blank",
}, ...(toc?.bottom?.links || [])].filter(Boolean));
</script>

<template>
    <UPage v-if="page">
        <UPageHeader
            :description="page.description"
            :links="page.links"
            :title="page.title"
        >
            <template #headline>
                <UBreadcrumb :items="breadcrumb" />
            </template>
        </UPageHeader>

        <UPageBody>
            <ContentRenderer
                v-if="page"
                :value="page"
            />

            <USeparator v-if="surround?.length" />

            <UContentSurround :surround="surround" />
        </UPageBody>

        <template
            v-if="page?.body?.toc?.links?.length"
            #right
        >
            <UContentToc
                :links="page.body?.toc?.links"
                :title="toc?.title"
            >
                <template
                    v-if="toc?.bottom"
                    #bottom
                >
                    <div
                        :class="{ '!mt-6': page.body?.toc?.links?.length }"
                        class="hidden lg:block space-y-6"
                    >
                        <USeparator
                            v-if="page.body?.toc?.links?.length"
                            type="dashed"
                        />

                        <UPageLinks
                            :links="links"
                            :title="toc.bottom.title"
                        />
                    </div>
                </template>
            </UContentToc>
        </template>
    </UPage>
</template>
