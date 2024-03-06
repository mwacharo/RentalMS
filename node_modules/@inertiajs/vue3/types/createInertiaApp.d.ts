import { Page } from '@inertiajs/core';
import { App as VueApp, DefineComponent, Plugin } from 'vue';
import { InertiaApp, InertiaAppProps } from './app';
interface CreateInertiaAppProps {
    id?: string;
    resolve: (name: string) => DefineComponent | Promise<DefineComponent> | {
        default: DefineComponent;
    };
    setup: (props: {
        el: Element;
        App: InertiaApp;
        props: InertiaAppProps;
        plugin: Plugin;
    }) => void | VueApp;
    title?: (title: string) => string;
    progress?: false | {
        delay?: number;
        color?: string;
        includeCSS?: boolean;
        showSpinner?: boolean;
    };
    page?: Page;
    render?: (app: VueApp) => Promise<string>;
}
export default function createInertiaApp({ id, resolve, setup, title, progress, page, render, }: CreateInertiaAppProps): Promise<{
    head: string[];
    body: string;
}>;
export {};
