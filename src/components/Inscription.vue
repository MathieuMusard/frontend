<!--<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <v-container>
              <form @submit.prevent="onSignup">
                <v-layout row>
                  <v-flex>
                    <v-text-field name="email" label="Mail" id="email" v-model="email" :rules="emailRules" type="email" required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex>
                    <v-text-field name="password" label="Password" id="password" v-model="password" :rules="passwordRules" type="password" required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex>
                    <v-text-field name="confirmPassword" label="ConfirmPassword" id="confirmPassword" v-model="confirmPassword" :rules="verificationPasswordRules" type="password"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-btn type="submit" @click="validate()">S'inscrire</v-btn>
                  </v-flex>
                </v-layout>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      confirmPassword:'',

      emailRules: [
        v => !!v || 'Champ obligatoire',
        v => /.+@.+\..+/.test(v) || 'E-mail invalide',
      ],

      passwordRules: {
        required: value => !!value || 'Champ obligatoire.',
        min: v => v.length >= 8 || 'Min 8 characters',
      },

      verificationPasswordRules: [
        v => !!v || 'Champ obligatoire.',
        v => v === this.password || 'Vérification incorrecte'
      ],
    }
  },

  methods: {
    validate(){
      //this.registerWithFirebase();
      this.$router.push({path:'/confirmation'});
    },

    registerWithFirebase(){
      firebase.auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((response) => {
          alert('success')
          console.log(response)
        })
        .catch((error) => {
          alert('failure')
          console.log(error)
        })
    }
  }
}
</script>-->