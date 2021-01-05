<template>
  <div>

    <h1 class="mt-4" 
      align="center" 
      style="title">
      Connexion
    </h1>

    <v-container class="grey lighten-5 mt-7">
      
      <v-form>
        
        <!--<p v-if="errorMessage" class="error"></p>-->

        <v-text-field name="email" 
          v-model="email" 
          label="E-mail" 
          required/>
        
        <v-text-field name="password" 
          v-model="password" 
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" 
          :type="show1 ? 'text' : 'password'" 
          label="Mot de passe" 
          counter 
          @click:append="show1 = !show1">
        </v-text-field>
        
        <div align="center">

          <v-btn class="mt-4" 
            align="center" 
            dark 
            large 
            @click="loginclick()">
            Se connecter
          </v-btn>
        
        </div>

        <!--<input type="email" name="email" /><br>    
        <input type="password" name="password" /><br>    
        <button type="submit">Se connecter</button>  -->

      </v-form>

    </v-container>

    <div class="mt-6" 
      align="right">

      <h4 class="mt-1">
        Vous n'avez pas de compte ?
      </h4>

      <v-btn class="mt-4" 
        dark 
        large>
        S'inscrire
      </v-btn>

    </div>

  </div>

</template>

<script>

import axios from "axios"

export default {
  name: "Connexion",

  props: {

    errorMessage: {
      type: String,
      default: ""
    }

  },

  data(){
    return{

      show1 : false,
      password: '',
      email: '',

    }
  },

  methods: {
/*
    login: (e) => {
      e.preventDefault()
      let email = "user@email.com"
      let password = "password"
      let login = () => {
        let data = {
          email: email,
          password: password
        }
        axios.post("http://localhost:3000/login", data)
          .then((response) => {
            console.log("Logged in")
            $router.push("/confirmationlogin")
          })
          .catch((errors) => {
            console.log(errors)
          })
      }
      login()
    },*/
    

    test(){
      axios.get("http://localhost:3000/")
        .then((response) =>{
          console.log(response)
        })
        .catch((errors) => {
          console.log(errors)
        })
    },

    submit() {
      this.$emit("submit", {
        email: this.email,
        password: this.password
      });
      console.log("Submit : oui");
    },

    signinclick() {
      this.$router.push({path:'/signin'});
    },

    loginclick() {
      this.$router.push({path:'/confirmationlogin'});
    },

  },
  
}

</script>

<style scoped>

  .error 
  { 
    color: tomato;
  }

</style>