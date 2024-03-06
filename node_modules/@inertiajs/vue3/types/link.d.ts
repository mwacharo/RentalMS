import { Method, PageProps, Progress } from '@inertiajs/core';
import { DefineComponent } from 'vue';
export interface InertiaLinkProps {
    as?: string;
    data?: object;
    href: string;
    method?: Method;
    headers?: object;
    onClick?: (event: MouseEvent) => void;
    preserveScroll?: boolean | ((props: PageProps) => boolean);
    preserveState?: boolean | ((props: PageProps) => boolean) | null;
    replace?: boolean;
    only?: string[];
    onCancelToken?: (cancelToken: import('axios').CancelTokenSource) => void;
    onBefore?: () => void;
    onStart?: () => void;
    onProgress?: (progress: Progress) => void;
    onFinish?: () => void;
    onCancel?: () => void;
    onSuccess?: () => void;
    queryStringArrayFormat?: 'brackets' | 'indices';
}
type InertiaLink = DefineComponent<InertiaLinkProps>;
declare const Link: InertiaLink;
export default Link;
