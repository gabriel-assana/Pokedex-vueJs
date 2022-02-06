import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createApp } from 'vue';

import App from './App.vue';

library.add(faUserSecret,faSearch)

createApp(App)
    .component('font-awesone-icon', FontAwesomeIcon)
    .mount('#app')

