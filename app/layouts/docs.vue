<script setup lang="ts">
import type { ContentNavigationItem } from "@nuxt/content";

const navigation = inject<Ref<ContentNavigationItem[]>>("navigation");
const route = useRoute();

const collections = ref(["layers", "modules", "packages", "templates"]);
const collectionType = computed(() => route.params.slug?.[0] as string);
const isCollection = computed(() => collections.value.includes(collectionType.value));
const isSubCollection = computed(() => route.params.slug?.[1] !== undefined);

const currentCollectionData = computed(() => {
    if (isCollection.value) {
        return navigation?.value?.find(nav => nav.path === `/${collectionType.value}`);
    }

    return null;
});

const pageAnchors = computed(() => {
    const childSlug = route.params.slug?.[1];
    if (isCollection.value) {
        return currentCollectionData?.value?.children?.map(child => ({
            label: child.title,
            icon: child.icon,
            to: child.path,
            active: childSlug && child.path.includes(childSlug),
        }));
    }

    return navigation?.value?.map(child => ({
        label: child.title,
        icon: child.icon,
        to: child.path,
        active: childSlug && child.path.includes(childSlug),
    }));
});

const contentNavigation = computed(() => {
    if (!isCollection.value) {
        return navigation?.value;
    }

    const collectionChildren = currentCollectionData?.value?.children?.filter((child: any) => child.path !== `/${collectionType.value}`);

    if (!isSubCollection.value) {
        return null;
    }

    if (isSubCollection.value) {
        const subCollectionChildren = collectionChildren?.find(child => child.path === `/${collectionType.value}/${route.params.slug?.[1]}`)?.children;

        return subCollectionChildren?.filter((child: any) => child.path !== `/${collectionType.value}/${route.params.slug?.[1]}`);
    }

    return collectionChildren;
});
</script>

<template>
    <UContainer>
        <UPage>
            <template #left>
                <UPageAside>
                    <UPageAnchors :links="pageAnchors" />
                    <USeparator v-if="contentNavigation" class="my-6" type="dashed" />
                    <UContentNavigation :navigation="contentNavigation" highlight />
                </UPageAside>
            </template>
            <slot />
        </UPage>
    </UContainer>
</template>
