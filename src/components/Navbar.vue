<template>
    
    <v-app-bar app
      color="primary">

      <div class="d-flex align-center">
        
        <img alt="AzimuthME Logo" 
          class="shrink mr-2" 
          contain 
          :src="require('@/assets/logoHead.png')" 
          transition="scale-transition" 
          height="54px"/>

        <v-btn class="ml-3" 
          text 
          icon 
          color="white"
          @click="homeclick()">
          
          <v-icon>
            mdi-home
          </v-icon>
        
        </v-btn>

        <v-btn text 
          @click="newsclick()">
          
          <span class="btnText">
            Actualités
          </span>
        
        </v-btn>

        <v-btn text 
          @click="hallclick()">
          
          <span class="btnText">
            Salons
          </span>
        
        </v-btn>

        <v-btn text 
          @click="messengerclick()">
          
          <span class="btnText">
            Messagerie
          </span>
        
        </v-btn>

        <v-btn text 
          @click="blogclick()">

          <span class="btnText">
            Blog
          </span>
        
        </v-btn>

      </div>

      <v-spacer></v-spacer>

      <v-text-field color="white" 
        dark class="search" 
        label="Chercher" 
        outlined>
      </v-text-field>

      <v-btn class="ml-1" 
        text 
        icon 
        color="white" 
        @click="searchclick()">
        
        <v-icon>
          mdi-magnify
        </v-icon>
      
      </v-btn>

      <v-dialog v-model="dialog" 
        width="500">
        
        <template v-slot:activator="{ on }">
          
          <v-btn class="ml-1" 
            text 
            color="white" 
            v-on="on">
            
            <span class="btnText">
              {{user.username}}
            </span>
          
          </v-btn>
        
        </template>

        <v-card>

          <div align="center">

            <v-card-title class="headline grey lighten-2" 
              primary-title>
              Notification
            </v-card-title>

            <v-card-text>
              Etes-vous sûr de vouloir vous déconnecter ?
            </v-card-text>
          
          </div>
          
          <v-divider></v-divider>
          
          <v-card-actions>
            
            <v-spacer></v-spacer>
              
              <v-btn color="primary" 
                text 
                @click="confirm()">
                Oui
              </v-btn>
            
          </v-card-actions>
          
        </v-card>
        
      </v-dialog>
  
    </v-app-bar>

</template>

<script>

import axios from "axios"

export default {

  name: 'Navbar',

  data() {

    return {

      title: 'AzimuthME',
      dialog: false,

      user:{
        username: "mathieu.musard"
      }

    }

  },

  methods:  {
    /*getUserData: function() {
      let self = this 
      axios.get("/api/user")
        .then((response) => {
          console.log(response)
          self.$set(this, "user", response.data.user)
        })
        .catch((error) => {
          console.log(errors)
          $router.push("/")
        })
    },*/

    homeclick() {
      this.$router.push({path:'/'});
    },

    newsclick() {
      this.$router.push({path:'/news'});
    },

    hallclick() {
      this.$router.push({path:'/hall'});
    },

    messengerclick() {
      this.$router.push({path:'/messenger'});
    },

    logoutclick() {
      this.$router.push({path:'/logout'});
    },

    blogclick() {
      window.open('https://www.youtube.com/', '_blank');
    },

    searchclick() {
      window.location.reload(true);
    },

    confirm() {
      this.dialog = false;
      this.$router.push({path:'/logout'});
    }

  },

  mounted(){
    this.getUserData()
  }

};

</script>

<style scoped>

  .title 
  {
    color: white;
    font-size: 1em;
    margin-left: 1em;
  }

  .btnText 
  {
    color: white;
    font-size: 1em;
  }

  .search
  {
    margin-left: 1em !important;
    margin-top: 30px !important;
    color: white !important;
    max-width: 240px;
  }
  
</style>
