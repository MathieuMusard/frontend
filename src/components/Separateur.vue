<template>

  <div class="separator-wrapper mb-4">

    <hr v-if="type==='Découvrir'"
      class="separator-Découvrir"> 
  
  </div>

</template>

<script>

export default {

  name: 'Separateur',

  props:{

    type:{
      type: String,
      default: null,
    }

  }

}

</script>

<style scoped>

  .separator-Découvrir
  {
    size: 20px;
    width: 33%;
  }

  .separator-wrapper
  {
    justify-content: center;
    display: flex;
    width: 100%;
  }
  
</style>