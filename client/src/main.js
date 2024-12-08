import { createApp } from 'vue'
import './style.css'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import App from './App.vue'
import Menubar from 'primevue/menubar';
import Tag from 'primevue/tag';


const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'system',
            cssLayer: false
        }
    }
});
app.component('Menubar', Menubar);
app.component('Tag', Tag);
app.mount('#app');
