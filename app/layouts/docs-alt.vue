<script setup lang="ts">
import type { ContentNavigationItem, PageCollections } from "@nuxt/content";
import { mapContentNavigation } from "#ui-pro/utils/content";

const navigation = inject<Ref<ContentNavigationItem[]>>("navigation");

// const route = useRoute();
// const { header, navigations } = useAppConfig();

// const navigationLinks = computed(() => {
//     const navigationParent = `/${route.params.slug?.[0]}`;
//     const nav = navigations.find(navigation => navigation.path === navigationParent);

//     return nav ? nav?.children : navigation?.value;
// });

// const links = ref([
//     {
//         label: "UI",
//         icon: "i-ph:cube",
//         to: "/layers/ui",
//     },
//     {
//         label: "Mapbox",
//         icon: "i-ph:map-pin",
//         to: "/layers/mapbox",
//     },
// ]);

// const { data: dataNavigationDocs } = await useAsyncData("navigation-docs", () => {
//     return queryCollectionNavigation("docs");
// });

// const { data } = await useAsyncData("navigation-layers", () => {
//     return queryCollectionNavigation("layers");
// });

// const navigationLinkss = computed(() => {
//     const path = ["/docs", route.params.slug?.[0]].filter(Boolean).join("/");

//     return mapContentNavigation(navPageFromPath(path, data.value)?.children || []);
// });

// onMounted(() => {
//     console.log("dataNavigationDocs", dataNavigationDocs.value);

//     console.log(navigation?.value);
//     // console.log(route);
//     console.log(data.value);
//     console.log("asideLinks", asideLinks.value);

//     console.log(navigationLinks.value);
// });
const collections = ref(["docs", "layers", "modules", "packages", "templates"]);

const route = useRoute();
const currentCollection = computed(() => collections.value.find(collection => collection === route.params.slug?.[0]) ?? "docs");

const { data: navigationData } = await useAsyncData(`navigation-${currentCollection.value}`, () => {
    return queryCollectionNavigation(currentCollection.value as any);
}, { watch: [route] });

// const asideLinks = computed(() => {
//     const path = `/${route.params.slug?.[0]}`;
//     const pathChild = `/${route.params.slug?.[0]}/${route.params.slug?.[1]}`;

//     const parentNav = navigationData.value?.find(nav => nav.path === path);
//     const childNav = parentNav?.children?.find(child => child.path === pathChild);

//     const result = childNav?.children || parentNav || navigation?.value;
//     return typeof result === "object" ? [result] : result;
//     // return mapContentNavigation(data.value?.children || []);
// });

watch(() => navigationData.value, () => {
    console.log("navigationData", navigationData.value);
    console.log(route.path);
});

const pageAnchors = computed(() => {
    if (currentCollection.value !== "docs") {
        const path = `/${route.params.slug?.[0]}`;
        const cleanChilds = navigationData.value?.[0]?.children.filter((child: any) => child.path !== path);

        return cleanChilds.map((child: any) => ({
            label: child.title,
            icon: child.icon,
            to: child.path,
        }));
    }

    return navigationData.value?.map(child => ({
        label: child.title,
        icon: child.icon,
        to: child.path,
    }));
});

const links = computed(() => {
    if (currentCollection.value !== "docs") {
        const path = `/${route.params.slug?.[0]}`;
        const cleanChilds = navigationData.value?.[0]?.children.filter((child: any) => child.path !== path);

        return cleanChilds;
    }

    console.log("navigationData.value", navigationData.value);
    return navigationData.value?.map(child => ({
        title: child.title,
        icon: child.icon,
        to: child.path,
    }));
});

// onMounted(() => {
//     console.log("navigationData", navigationData.value);
// });
</script>

<template>
    <UContainer>
        <UPage>
            <template #left>
                <UPageAside>
                    <!-- <UContentSearchButton
                        v-if="header?.search"
                        class="w-full"
                        label="Search..."
                        variant="outline"
                    >
                        <template #trailing>
                            <div class="flex items-center gap-0.5 ms-auto">
                                <UKbd value="meta" />
                                <UKbd value="k" />
                            </div>
                        </template>
                    </UContentSearchButton> -->

                    <template v-if="currentCollection !== 'docs'">
                        <UPageAnchors :links="pageAnchors" />
                        <USeparator class="my-6" type="dashed" />
                    </template>
                    <!-- <UContentNavigation
                        :navigation="asideLinks"
                        highlight
                    /> -->
                    <UContentNavigation
                        :navigation="links"
                        highlight
                    />
                </UPageAside>
            </template>

            <slot />
        </UPage>
    </UContainer>
</template>
