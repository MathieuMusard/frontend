<template>
  
  <div>
    
    <div>
      <h1 class="mt-4" 
        align="center" 
        style="title">
        Découvrir AZimuthME !
      </h1>

      <v-carousel class="mt-4" 
        hide-delimiters>

        <v-carousel-item v-for="(item,i) in items" 
          :key="i" 
          :src="item.src">
        </v-carousel-item>
      
      </v-carousel>

      <h1 class="mt-4" 
        align="center" 
        style="title2">
        Qui sommes-nous ?
      </h1>
    
      <p class="mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac orci eu dui volutpat imperdiet. Donec a lacinia lorem. Mauris lobortis euismod pulvinar. Cras ac quam ac odio feugiat tempor. Donec tempor lectus non venenatis bibendum. Quisque pulvinar tortor ut risus elementum lobortis. Morbi consequat viverra suscipit. Sed eget iaculis purus.
      </p>
      
      <Separateur type="Découvrir"/>
      
      <p>
        Pellentesque sit amet accumsan ligula. Morbi tempor ante a tortor ultricies, non pellentesque nisi suscipit. Suspendisse id eleifend erat. Donec vehicula, sapien ac finibus fringilla, diam odio facilisis leo, at bibendum ligula felis et orci. Suspendisse pretium convallis enim, non consequat ipsum. Aliquam erat volutpat. In suscipit et metus vitae lacinia. Duis tempor aliquam sollicitudin. Morbi vehicula urna at metus ullamcorper, eu eleifend justo convallis. Maecenas cursus interdum felis tincidunt suscipit. Nulla ut eros nunc. Praesent placerat lorem sodales semper aliquam. Sed tincidunt purus diam, ac suscipit felis sollicitudin ut. Duis gravida blandit venenatis.
      </p>
    
      <Separateur type="Découvrir"/>
      
      <p>
        Donec mauris tortor, gravida nec aliquam a, pharetra sit amet urna. Quisque pretium enim facilisis nisi elementum porta. Nunc vel lectus leo. Morbi nec facilisis nunc, in iaculis orci. Maecenas ultricies velit erat, eget pellentesque dolor iaculis ac. Sed libero metus, maximus semper ullamcorper sit amet, consequat et tortor. Pellentesque id venenatis metus. Donec nulla dui, rhoncus sit amet lorem vel, eleifend blandit lacus. Donec faucibus, velit eget scelerisque gravida, est lacus ornare purus, ut faucibus tortor nibh ut erat. Integer mattis dapibus urna, sit amet placerat elit pellentesque id. Phasellus eget lobortis erat.
      </p>
    
      <Separateur type="Découvrir"/>
    
      <p>
        Nunc volutpat diam est, ac iaculis sapien interdum ac. Maecenas quis lacinia ipsum. Suspendisse vulputate neque pharetra quam pharetra iaculis. Sed ultrices, arcu ut pharetra accumsan, enim justo porta ligula, posuere vulputate lectus purus vitae mi. Suspendisse dignissim ac augue ut semper. Curabitur eget purus libero. Nunc id vehicula turpis, a gravida metus. Phasellus tincidunt posuere augue quis dapibus. Nulla volutpat vestibulum ante, non bibendum nisi sollicitudin eget. Cras ac dictum purus. Vivamus ullamcorper, augue quis aliquam porta, elit elit molestie diam, ut bibendum augue mauris id ex. Curabitur non velit in neque pellentesque aliquet vel vel sapien. Pellentesque placerat venenatis fermentum. Praesent hendrerit vehicula purus malesuada eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut sagittis rhoncus sem, ac accumsan tellus faucibus eu.
      </p>
      
      <Separateur type="Découvrir"/>
    
      <p>
        Curabitur accumsan massa consequat, dapibus massa nec, varius eros. Fusce risus nulla, suscipit vitae pellentesque in, tempus sit amet orci. Curabitur vehicula tellus magna, in rutrum risus posuere a. Donec dignissim commodo lectus, eu interdum erat tristique quis. Pellentesque in semper ipsum. Proin pharetra imperdiet leo eget sodales. Ut ligula nisi, pharetra eu nisi eget, molestie consequat odio. Morbi vitae ultricies risus, ac ullamcorper sem. Donec eleifend odio non posuere aliquam. Quisque vel mi non neque vestibulum finibus. Nam pulvinar, turpis nec pretium pharetra, enim ligula posuere metus, eget sodales arcu nisl in turpis. Proin nec neque sodales, sodales ipsum sed, dignissim metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris sed pellentesque est, lobortis suscipit dui. 
      </p>
    
    </div>

    <Separateur type="Découvrir"/>

    <div class="block" 
      style="margin-top: 40px;">
      Vous êtes convaincus ?
    </div>

    <div class="containerright">

      <v-btn dark 
        large 
        @click="signinclick()">
        S'inscrire
      </v-btn>

    </div>
  
  </div>
  
</template>

<script>

import Separateur from './Separateur'

  export default {

    components:{
      Separateur,
    },

    data () {

      return {

        items: [
          {
            src: require('@/assets/Nautilus.jpg'),
          },
          {
            src: require('@/assets/Nasus.jpg'),
          },
          {
            src: require('@/assets/Allistar.jpg'),
          },
          {
            src: require('@/assets/Thresh.jpg'),
          },

        ],

      }

    },

    methods:{

      signinclick() {
        this.$router.push({path:'/signin'});
      },

    }

  }
  
</script>

<style scoped>

  .title
  {
    font-size: 60px;
  }

  .title2
  {
    font-size: 40px;
  }

  .separator
  {
    size: 20px;
    width: 33%;
    
  }

  .block
  {
    position: relative;
    text-align: center;
  }

  .containerright
  {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 20px;
  }


</style>