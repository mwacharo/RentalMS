import { createHeadManager, Page, PageHandler, router } from '@inertiajs/core';
import { ComponentPublicInstance } from 'vue';
import useForm from './useForm';
export type VuePageHandlerArgs = Parameters<PageHandler>[0] & {
    component: ComponentPublicInstance | Promise<ComponentPublicInstance>;
};
declare module '@inertiajs/core' {
    interface Router {
        form: typeof useForm;
    }
}
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $inertia: typeof router;
        $page: Page;
        $headManager: ReturnType<typeof createHeadManager>;
    }
    interface ComponentCustomOptions {
        remember?: string | string[] | {
            data: string | string[];
            key?: string | (() => string);
        };
    }
}
