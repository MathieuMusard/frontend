<template>

  <v-app>

    <v-content>

      <Navbar/>

      <transition name="fade">

        <router-view></router-view>

      </transition>

      <Footer v-if="togglemask"/>

      <v-btn icon 
        class="btnscrolltop" 
        @click="scrolltop()">
        
        <v-icon>
          mdi-arrow-up-bold
        </v-icon>
      </v-btn>
      
      <v-btn icon 
        class="btnmask" 
        @click="togglefooter()">
      
        <v-icon>
          {{togglemask? 'mdi-minus' :'mdi-plus'}}
        </v-icon>
      
      </v-btn>
    
    </v-content>
  
  </v-app>

</template>

<script>

  import Navbar from './components/Navbar';
  import Footer from './components/Footer';
  import { login } from "./authentification";

  export default {

    name: 'App',

    components: {
      Navbar, 
      Footer,
    },

    data() {

      return {

        togglemask: true,
        user: null,
        

        /*users: [
          {
            email: "mathieu@email.com",
            password: "testtest"
          },
          {
            email:"nathalie@email.com",
            password: "testtest2"
          }
        ]*/
      };

    },

    methods: {

      login (email, password) {
        return this.users.find(user => user.email === email && user.password === password) || null;
        this.errorMessage = this.user ? "" : "Connexion échouée, veuillez recommencer";
      },

      /*login({email, password}) {
        this.user = { email, password };
        this.errorMessage = this.user ? "" : "Connexion échouée, veuillez recommencer";
        console.log(email);
      },*/

      togglefooter(){
        this.togglemask = !this.togglemask;
      },

      scrolltop(){
        window.top.window.scrollTo(0,0);
      }
    }
  };

  


</script>

<style scoped>

  .btnmask
  {
    position: fixed;
    bottom: 5px;
    right: 5px;
    color: red !important;
  }

  .btnscrolltop
  {
    position: fixed;
    bottom: 5px;
    right: 40px;
    color: red !important;
  }

  .fade-enter-active, .fade-leave-active 
  {
    transition: opacity .5s;
  }
  
  .fade-enter, .fade-leave-to 
  {
    opacity: 0;
  }

</style>


