<template>

  <div>

    <h1 class="mt-4" 
      align="center">
      Notification
    </h1>
      
    <v-container class="grey lighten-5 mt-7" 
      align="center">

      <h2 class="mt-4" 
        align="center">
        Authentification réussie !
      </h2>

      <div align="center">
      
        <v-btn class="mt-4" 
          dark 
          large 
          @click="homeclick()">
          Accueil
        </v-btn>
    
      </div>

    </v-container>
  
  </div>

</template>

<script>

  export default {
    
    methods: {

      homeclick() {
        this.$router.push({path:'/'});
      },

    }

  }
</script>