declare const _default: import("vue").DefineComponent<{
    theme: {
        type: StringConstructor;
        default: any;
    };
}, unknown, unknown, {
    finalTheme(): string;
}, {
    getTargetNodes(): unknown[];
}, {
    computed: {
        themeClass(): string[];
    };
} | {
    methods: {
        show(...args: any[]): any;
        hide(...args: any[]): any;
        dispose(...args: any[]): any;
        onResize(...args: any[]): any;
    };
}, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    theme: {
        type: StringConstructor;
        default: any;
    };
}>>, {
    theme: string;
}, {}>;
export default _default;
