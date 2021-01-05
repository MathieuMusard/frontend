<template>

  <div>

    <div>

      <h1 class="mt-4" 
        align="center" 
        style="title">
        Fil d'actualité
      </h1>
    
    </div>
    
      <v-checkbox align="center" 
        v-model="createNews" 
        :label="`Rédiger une actualité`">
      </v-checkbox>

    <v-container v-if="createNews"
      class="grey lighten-5 mt-7">

      <h3>Rédiger une actualité</h3>

      <v-form ref="form" 
        v-model="valid" 
        lazy-validation>

        <v-text-field v-model="name" 
          counter 
          label="Nom de l'actu" 
          :rules="namerules" 
          required>
        </v-text-field>

        <v-checkbox v-model="salonornot" 
          :label="`Cette actualité correspond à la programmation d'un salon.`">
        </v-checkbox>
        
        <div v-if="salonornot" 
          class="d-flex align-center">

          <v-menu v-model="menu2" 
            :close-on-content-click="false" 
            :nudge-right="40" 
            lazy 
            transition="scale-transition" 
            offset-y 
            full-width min-width="290px">

            <template v-slot:activator="{ on }">

              <v-text-field v-model="date" 
                :rules="daterules" 
                label="Choisir une date" 
                prepend-icon="mdi-calendar" 
                readonly 
                v-on="on" 
                required>
              </v-text-field>
            
            </template>

            <v-date-picker v-model="date" 
              @input="menu2 = false">
            </v-date-picker>
          </v-menu>
        
          <v-menu ref="menu" 
            v-model="menu3" 
            :close-on-content-click="false" 
            :nudge-right="40" 
            :return-value.sync="time" 
            transition="scale-transition" 
            offset-y 
            max-width="290px" 
            min-width="290px">

            <template v-slot:activator="{ on }">

              <v-text-field v-model="time" 
                :rules="hourrules" 
                label="Choisir l'heure" 
                prepend-icon="mdi-clock" 
                readonly 
                v-on="on" 
                required>
              </v-text-field>

            </template>

            <v-time-picker v-if="menu3" 
              v-model="time" 
              full-width 
              @click:minute="$refs.menu.save(time)">
            </v-time-picker>
          
          </v-menu>
        
          <v-select v-model="select" 
            :items="durées" 
            :rules="[v => !!v || 'Blanc']" 
            label="Durée du Salon" 
            prepend-icon="mdi-clock" 
            required/>

          <v-text-field v-model="number" 
            :rules="usermaxrules" 
            label="Nombre de Participants max" 
            prepend-icon="mdi-account-multiple" 
            required/>
      
        </div>
      
        <v-select v-model="categorieSelected" 
          :items="people" 
          box 
          chips 
          color="blue-grey lighten-2" 
          label="Catégorie(s)" 
          item-text="name" 
          item-value="name" 
          multiple>

          <template slot="selection" 
            slot-scope="data">
            
            <v-chip :selected="data.selected" 
              close 
              class="chip--select-multi"  
              @input="remove(data.item)">
              {{ data.item.name }}
            </v-chip>

          </template>

          <template slot="item" 
            slot-scope="data">
            
            <template v-if="typeof 
              data.item !== 'object'">
              
              <v-list-tile-content v-text="data.item"/>
            
            </template>
            
            <template v-else>
              
              <v-list-tile-content>
                
                <v-list-tile-title v-html="data.item.name"/>
              
              </v-list-tile-content>
            
            </template>
          
          </template>
        
        </v-select>

        <v-textarea v-model="description" 
          counter label="Description" 
          :rules="describerules" 
          required>
        </v-textarea>

      </v-form>

      <div align="right">

        <v-btn :disabled="!valid" 
          class="mt-4" 
          dark 
          large 
          @click="validate()">
          Publier
        </v-btn>
      
      </div>

    </v-container>

  </div>
  
</template>

<script>
  

  export default {
    el: "#app",
    data: () => ({

      createNews: false,

      salonornot: false,

      categorieSelected:[],

      durées:[
        '15 min',
        '30 min',
        '45 min',
        '1h',
        '1h30',
        '2h',
        'Plus de 2h',
      ],

      min: 0,
      max: 50,

      people: [

        { header: 'Orientation' },
        { name: 'Bilan de Compétences', group: 'Group 1'},
        { name: 'Bilan de Reconversion', group: 'Group 1' },
        { name: 'Bilan d\'Orientation', group: 'Group 1' },
        { name: 'Bilan Express', group: 'Group 1' },
        { name: 'Bilan Mi-carrière', group: 'Group 1' },
        { name: 'Bilan Sénior', group: 'Group 1' },
        { name: 'Bilan Sportif de Haut Niveau', group: 'Group 1' },
        { name: 'E-Bilan', group: 'Group 1' },
        
        { divider: true },

        { header: 'Formation' },
        { name: 'Apprentissage', group: 'Group 2' },
        { name: 'Créer des modules de Formation', group: 'Group 2' },
        { name: 'E-Learning', group: 'Group 2'},
        { name: 'E-Salon Formation', group: 'Group 2'},
        { name: 'Formation à Distance', group: 'Group 2' },
        { name: 'Formation Continue', group: 'Group 2' },
        { name: 'Formation Digitale', group: 'Group 2' },
        { name: 'Formation en Ligne', group: 'Group 2' },
        { name: 'Formation Professionnelle', group: 'Group 2' },
        { name: 'Formation Virtuelle', group: 'Group 2' },
        { name: 'Monter en Compétences', group: 'Group 2' },
        { name: 'Mooc', group: 'Group 2' },
        { name: 'Outil', group: 'Group 2' },
        { name: 'Plan de Développement de Compétences', group: 'Group 2' },
        { name: 'Plan de Formation en Entreprise', group: 'Group 2' },
        { name: 'Plan de Formation Individuel', group: 'Group 2' },
        { name: 'Plan de Montée en Compétences', group: 'Group 2' },
        { name: 'Proposer des Formations', group: 'Group 2' },
        { name: 'Trouver sa Formation', group: 'Group 2' },
        { name: 'Valider ses Acquis', group: 'Group 2' },
        { name: 'Veille Technologique', group: 'Group 2' },

        { divider: true },

        { header: 'Emploi'},
        { name: 'CDD', group: 'Group 3' },
        { name: 'CDI', group: 'Group 3' },
        { name: 'Contrat d\'Alternance', group: 'Group 3' },
        { name: 'Contrat d\'Apprentissage', group: 'Group 3' },
        { name: 'Contrat de Professionnalisation', group: 'Group 3' },
        { name: 'Intérim', group: 'Group 3' },
        { name: 'Job', group: 'Group 3' },
        { name: 'Offre d\'emploi', group: 'Group 3' },
        { name: 'Recherche d\'Emploi', group: 'Group 3' },
        { name: 'Recrutement', group: 'Group 3' },
        { name: 'Stage', group: 'Group 3' },
        
      ],

      select: ['add-tags-with', 'enter', 'tab', 'paste'],
      items: [],
      search: "",

      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,

      time: null,
      menu3: false,
      modal3: false,

      dialog: false,

      valid: true,
      date:'',
      name:'',
      namerules: [
        v => !!v || 'Champ obligatoire',
        v => v.length <= 50 || 'Ne pas dépasser 50 caractères'
        ],

      description:'',
      describerules: [
        v => !!v || 'Champ obligatoire',
        v => v.length <= 500 || 'Ne pas dépasser 500 caractères'
        ],

      date:'',
      daterules: [
        v => !!v || 'Champ obligatoire',
      ],

      time:'',
      hourrules: [
        v => !!v || 'Champ obligatoire',
      ],

      date:'',
      daterules: [
        v => !!v || 'Champ obligatoire',
      ],

      number:'',
      usermaxrules: [
        v => !!v || 'Champ obligatoire',
      ],

    }),

    computed: {
      functionEvents () {
        return this.month ? this.monthFunctionEvents : this.dateFunctionEvents
      },
    },

    methods: {

      dateFunctionEvents (date) {
        const [,, day] = date.split('-')
        if ([12, 17, 28].includes(parseInt(day, 10))) return true
        if ([1, 19, 22].includes(parseInt(day, 10))) return ['red', '#00f']
        return false
      },

      monthFunctionEvents (date) {
        const month = parseInt(date.split('-')[1], 10)
        if ([1, 3, 7].includes(month)) return true
        if ([2, 5, 12].includes(month)) return ['error', 'purple', 'rgba(0, 128, 0, 0.5)']
        return false
      },

      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
          this.publish();
        }
      },

      publish() {
        window.location.reload(true);
      },

    }
  }
</script>

<style scoped>

  .title
  {
    font-size: 60px;
  }

  
</style>




