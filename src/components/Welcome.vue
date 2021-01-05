<template class="welcome">

  <div class="welcome-container">

    <div class="welcomebg">

    </div>

    <div class="welcome-content">

      <img class="main-logo" 
        src="@/assets/logoHead.png" 
        alt="main-logo"/>
      
      <p class="main-line white-text block">
        FACILITATEUR DE 
        <strong>LIENS</strong> 
        ET DE 
        <strong>CARRIÈRES</strong>
      </p>

      <p class="main-paragraph grey-text block">
        e-learning : former, impliquer, évaluer votre personnel
        créer, piloter, développer vos besoins en formation
      </p>

      <span class="main-line white-text block">
        MODULE 
        <strong>A CREER</strong>
      </span>
    
    </div>
    
    <div class="block white-text" 
      style="margin-top: 40px;">
      Vous connaissez déjà AZimuthME ?
    </div>
    
    <div class="containerright">
      
      <v-btn style="margin-right:35px" 
        dark 
        large
        @click="signinclick()">
        S'inscrire
      </v-btn>
      
      <v-btn dark 
        large 
        @click="loginclick()">
        Se connecter
      </v-btn>
    
    </div>
    
    <div class="containercenter">

      <v-btn class="discobtn" 
        dark 
        x-large 
        @click="discoverclick()">
        Découvrir AZimuthME !
      </v-btn>
    
    </div>
  
  </div>

</template>

<script>

export default {

  name: 'Welcome',

  data() {

    return {
      title: 'Welcome',
    }

  },

  methods: {

    loginclick() {
      this.$router.push({path:'/login'});
    },

    signinclick() {
      this.$router.push({path:'/signin'});
    },

    discoverclick() {
      this.$router.push({path:'/whatisazimuth'});
    }

  }

}

</script>

<style>

  .white-text 
  {
    color: white;
  }

  .grey-text 
  {
    color: #bcbcbc;
  }

  .block
  {
    position: relative;
    text-align: center;
  }

  .containercenter
  {
    display: flex;
    position: relative;
    justify-content: center;
    height: 60px;
  }

  .containerright
  {
    display: flex;
    justify-content: center;
    margin-top: 8px;
  }

  .main-paragraph 
  {
    width: 440px;
    margin: 0 auto 22px;
  }

  .discobtn
  { 
    position: fixed;
    bottom: 60px;
  }

  .welcome
  {
    height : 100%;
    margin: 0;
    padding : 0;
  }

  .welcome-container 
  {
    height: 100%;
    width: 100%;
    display: table;
    align-items: center;
  }

  .welcomebg
  {
    display: block;
    height: 100%;
    width: 100%;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;

    background-image: url("../assets/bg-chunk.png");
    background-attachment: fixed;
    background-size: 500px;
    background-repeat: repeat;
    background-position: center center;

    animation: bg-loop 8s linear 2s infinite forwards;
    -moz-animation: bg-loop 8s linear 2s infinite forwards;
  }

  .welcome-content 
  {
    display: block;
    z-index: 2;
    width: 100%;
    position: relative;
    margin-top: 50px;
    text-align: center;
  }

  .main-logo 
  {
    display: block;
    width: 480px;
    margin: 0 auto;
  }

  .main-line 
  {
    color: white;
    font-size: 26px;
  }

  @keyframes bg-loop 
  {
    0% {
      background-position-x: 0px;
    }
    100% {
      background-position-x: 500px;
    }
  }

  @-moz-keyframes bg-loop 
  {
    0% {
      background-position-x: 0px;
    }
    100% {
      background-position-x: 500px;
    }
  }

</style>