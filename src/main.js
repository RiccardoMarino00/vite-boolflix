import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {faStar} from '@fortawesome/free-regular-svg-icons'
import {faStar as faStarSolid} from '@fortawesome/free-solid-svg-icons'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

library.add(faStar, faStarSolid, faMagnifyingGlass )

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')


// createApp(App).mount('#app')
