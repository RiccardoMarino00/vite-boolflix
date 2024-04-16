<script >
// import HelloWorld from './components/HelloWorld.vue'
import headerComponent from './components/HeaderComponent.vue'
import mainComponent from './components/MainComponent.vue'
// import {store} from './store.js'

export default {
  data (){
    return {
      // store

    }

    
  },
  components: {
    headerComponent,
    mainComponent,
  }

}
</script>

<template>
  <headerComponent/>
</template>

<style lang="scss" scoped>
 @use '../style/general.scss'

</style>
