<template>

  <div>

    <h1 class="mt-4" 
      align="center" 
      style="title">
      Inscription
    </h1>
    
    <div align="right">
      
      <h4 class="mt-1">
        Vous avez déjà un compte ?
      </h4>
      
      <v-btn class="mt-4" 
        dark 
        large   
        @click="loginclick()">
        Se connecter
      </v-btn>
    
    </div>
  
    <v-container class="grey lighten-5 mt-7">

      <v-row align-stretch 
        no-gutters>
        
        <v-col>
          
          <v-card class="pa-2" 
            outlined 
            tile>

            <v-form ref="form" 
              v-model="valid" 
              lazy-validation>
              
              <v-text-field v-model="name" 
                :counter="10" 
                :rules="nameRules" 
                label="Nom" 
                required/>
            
              <v-text-field v-model="firstname" 
                :counter="10" 
                :rules="nameRules" 
                label="Prénom" 
                required/>
            
              <v-text-field v-model="username" 
                :rules="usernameRules" 
                label="Pseudo" 
                required 
                disabled/>
              
              <v-text-field v-model="email" 
                :rules="emailRules"  
                label="E-mail" 
                required/>
            
              <v-text-field v-model="emailvalidation" 
                :rules="emailvalidationRules" 
                label="Validation E-mail" 
                required/>
            
              <v-text-field v-model="password" 
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" 
                :rules="[passwordRules.required, passwordRules.min]" 
                :type="show1 ? 'text' : 'password'" 
                name="input-10-1" 
                label="Mot de passe" 
                hint="Entrer un mot de passe de 8 caractères minimum" 
                counter 
                @click:append="show1 = !show1">
              </v-text-field>
              
              <v-text-field v-model="verificationPassword" 
                :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'" 
                :rules="verificationPasswordRules" 
                :type="show2 ? 'text' : 'password'" 
                name="input-10-1" 
                label="Vérification mot de passe" 
                counter 
                @click:append="show2 = !show2">
              </v-text-field>
            
              <v-select v-model="select" 
                :items="items" 
                :rules="[v => !!v || 'Blanc']" 
                label="Item" 
                required/>
            
              <v-checkbox v-model="checkbox" 
                :rules="[v => !!v || 'Veuillez accepter les conditions d\'utilisation avant de continuer.']" 
                label="Accepter les conditions d'utilisation ?" 
                required/>
              
              <v-btn :disabled="!valid" 
                color="success" 
                class="mr-4" 
                @click="validate">
                S'inscrire
              </v-btn>
              
              <v-btn color="error" 
                class="mr-4" 
                @click="reset">
                Tout effacer
              </v-btn>
            
            </v-form>
        
          </v-card>
        
        </v-col>
      
        <v-col>
          
          <v-card>
          
            <h2>Conditions liées à l'inscription</h2>
            
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel sagittis mi. Donec vestibulum id felis at facilisis. Nulla sodales bibendum mollis. Sed cursus ultrices lorem, quis rhoncus lacus rutrum nec. Duis et vestibulum sem. Proin vitae ipsum dictum, aliquet risus ac, ultricies elit. Nulla ac leo eget massa vestibulum aliquet. Nullam ullamcorper lobortis purus, non ultricies risus. Suspendisse sollicitudin luctus quam scelerisque pulvinar. Sed a gravida velit, et efficitur leo. Aliquam erat volutpat. Aliquam in nibh non erat malesuada rhoncus id in velit. Nulla eu nibh quis nunc euismod pellentesque. Fusce interdum, nunc a maximus lacinia, elit justo viverra ante, ac consequat nisi neque in leo. Quisque metus purus, aliquam vitae sapien eget, convallis finibus massa. 
            </p>
            
            <p>
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque sagittis, orci ac congue convallis, neque massa sodales nisi, quis suscipit odio ipsum sed nunc. Donec viverra consectetur porttitor. Pellentesque faucibus sodales luctus. Sed eget risus at enim luctus scelerisque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam vitae sem non eros aliquam convallis. 
            </p>
            
            <p>
              Integer at sem nunc. Vestibulum quis posuere nunc, ac posuere quam. Mauris vel lobortis magna, et hendrerit metus. In hac habitasse platea dictumst. Nullam et varius sem. In in enim nisl. Sed ac risus a erat fringilla ultrices. Aliquam finibus turpis ac efficitur dapibus. Nam tincidunt nibh ante, ut sagittis orci semper a. Duis tempor est vitae mi feugiat, at porttitor magna lacinia. Vivamus ultrices sit amet ligula a bibendum. Quisque in sollicitudin ante, nec laoreet nunc. Etiam lorem mi, convallis non eros mattis, sagittis accumsan ante. 
            </p>
        
          </v-card>
      
        </v-col>
    
      </v-row>
  
    </v-container>
  
  </div>

</template>

<script>
  import {connection} from '../main';

  export default {
    data() {

      return{

        inscriptiondate: new Date().toISOString().substr(0, 10),

        valid: true,

        name: '',
        nameRules: [
          v => !!v || 'Champ obligatoire',
          v => (v && v.length <= 20) || 'Le nom ne doit pas dépasser 20 caractères',
        ],

        firstname: '',
        firstnameRules: [
          v => !!v || 'Champ obligatoire',
          v => (v && v.length <= 20) || 'Le prénom ne doit pas dépasser 20 caractères',
        ],

        email: '',
        emailRules: [
          v => !!v || 'Champ obligatoire',
          v => /.+@.+\..+/.test(v) || 'E-mail invalide',
        ],

        emailvalidation: '',
        emailvalidationRules: [
          v => !!v || 'Champ obligatoire',
          v => /.+@.+\..+/.test(v) || 'E-mail invalide',
          v => v === this.email || 'Vérification incorrecte'
        ],
        
        usernameRules: [
          v => !!v || 'Champ obligatoire',
        ],

        show1: false,
        show2: false,
        
        password: '',
        verificationPassword: '',

        passwordRules: {
          required: value => !!value || 'Champ obligatoire.',
          min: v => v.length >= 8 || 'Min 8 characters',
        },

        verificationPasswordRules: [
          v => !!v || 'Champ obligatoire.',
          v => v === this.password || 'Vérification incorrecte'
        ],

        select: null,
        items: [
          'Professionnel',
          'Particulier',   
        ],
        
        checkbox: false,
      }
    },

    computed: {

      username(){
        return `${this.name}.${this.firstname}`
      }

    },

    methods: {

      loginclick() {
        this.$router.push({path:'/login'});
      },

      createNewUser(){
        connection.query(this.requestuser, function (error, results, fields){
          if (error) console.log(error);
        });
      },

      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true;
          //this.createNewUser();
          this.$router.push({path:'/confirmationsignin'});
        }
      },

      reset () {
        this.$refs.form.reset()
      },

      resetValidation () {
        this.$refs.form.resetValidation()
      },

    },

  }

</script>

<style scoped>

  .title
  {
    font-size: 60px;
  }

</style>