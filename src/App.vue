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

<style lang="scss" scoped>
 @use './style/general.scss';





</style>
