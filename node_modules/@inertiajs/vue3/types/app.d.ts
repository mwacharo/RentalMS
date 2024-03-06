import { Page, PageProps } from '@inertiajs/core';
import { DefineComponent, Plugin } from 'vue';
export interface InertiaAppProps {
    initialPage: Page;
    initialComponent?: object;
    resolveComponent?: (name: string) => DefineComponent | Promise<DefineComponent>;
    titleCallback?: (title: string) => string;
    onHeadUpdate?: (elements: string[]) => void;
}
export type InertiaApp = DefineComponent<InertiaAppProps>;
declare const App: InertiaApp;
export default App;
export declare const plugin: Plugin;
export declare function usePage<SharedProps extends PageProps>(): Page<SharedProps>;
