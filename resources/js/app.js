import './bootstrap';
import '../css/app.css';
// toast
import ToastrPlugin from './toastr-plugin'


import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m'
import vuetify from './vuetify' // ensure this import points to your Vuetify 

const appName = import.meta.env.VITE_APP_NAME || 'Laravel'

createInertiaApp({
  title: title => `${title} - ${appName}`,
  resolve: name => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
  setup({ el, App, props, plugin }) {
    const app = createApp({ render: () => h(App, props) })
    app.use(plugin)
    app.use(vuetify)
    // toast
    app.use(ToastrPlugin)

    app.use(ZiggyVue, Ziggy)

    app.mount(el)


            // .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
