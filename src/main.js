import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import Welcome from '@/components/Welcome';
import Actualités from '@/components/Actualités';
import Connexion from '@/components/Connexion';
import Découvrir from '@/components/Découvrir';
import Inscription from '@/components/InscriptionTest';
import Messagerie from '@/components/Messagerie';
import Salons from '@/components/Salons'; 
import Confirmation from '@/components/Confirmation';
import ConnexionConfirmation from '@/components/ConnexionConfirmation';
import Déconnexion from '@/components/Déconnexion';

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [

  { path: '/', component: Welcome },
  { path: '/news', component: Actualités },
  { path: '/login', component: Connexion },
  { path: '/signin', component: Inscription},
  { path: '/messenger', component: Messagerie},
  { path: '/hall', component: Salons},
  { path: '/whatisazimuth', component: Découvrir},
  { path: '/confirmationsignin', component: Confirmation},
  { path: '/confirmationlogin', component: ConnexionConfirmation},
  { path: '/logout', component: Déconnexion},

]

const router = new VueRouter({

  routes

})

new Vue({vuetify, 
  router, 
  render: h => h(App), 
  created () {}})
  .$mount('#app')


