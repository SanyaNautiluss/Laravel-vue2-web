// import './bootstrap';

import Vue from 'vue'
import routes from './routes.js'

import Page1 from './pages/Page1.vue'
import Page2 from './pages/Page2.vue'
import Page3 from './pages/Page3.vue'
import Error from './pages/404.vue'


import { MdMenu, MdField, MdRipple, MdCard, MdTable, MdButton, MdContent, MdTabs, MdIcon, MdList, MdDrawer, MdToolbar, MdApp } from 'vue-material/dist/components/index.js'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(MdMenu)
Vue.use(MdCard)
Vue.use(MdField)
Vue.use(MdRipple)
Vue.use(MdTable)
Vue.use(MdApp)
Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)
Vue.use(MdIcon)
Vue.use(MdList)
Vue.use(MdDrawer)
Vue.use(MdToolbar)

const app = new Vue({
    el: '#app',
    data: {
      currentRoute: window.location.pathname
    },
    computed: {
      ViewComponent () {
        const matchingView = routes[this.currentRoute]
        switch(matchingView){
            case 'Page1':
                return Page1; 
            case 'Page2':
                return Page2;
            case 'Page3':
                return Page3;
            default:
                return Error;
        }
      }
    },
    render (h) {
      return h(this.ViewComponent)
    }
  })
  
  window.addEventListener('popstate', () => {
    app.currentRoute = window.location.pathname
  })