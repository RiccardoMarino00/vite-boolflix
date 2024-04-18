<script >
import headerComponent from './components/HeaderComponent.vue'
import mainComponent from './components/MainComponent.vue'
import store from './store.js'

export default {
  data (){
    return {
      store

    }

    
  },
  components: {
    headerComponent,
    mainComponent,
  },
  
  
  
  
  // created(){
  //   this.fetchFilm()
  // }

}
</script>

<template>
  <headerComponent/>
  <mainComponent/>
</template>

<style lang="scss">
 @use './style/general.scss';
 @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap');







</style>
