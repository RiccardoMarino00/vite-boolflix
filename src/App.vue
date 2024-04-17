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
 @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');







</style>
