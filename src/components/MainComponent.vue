<script>
import cardComponent from './CardComponent.vue';
import store from '../store.js'
export default {
    data(){
        return {
            store
        }
    },
    components: {
        cardComponent,
    },
    
}
</script>

<template>
    <div class="container">
        <div  class="row">
            <cardComponent  class="col"  v-for="film in store.films" :key="store.id" :item="film" v-if="store.films.length >= 1"/>
            <cardComponent  class="col" v-for="serie in store.renamedSerieTV" :key="store.id" :item="serie"  v-if="store.renamedSerieTV.length >= 1" />
            <span class="no-film" v-else>Purtroppo non abbiamo questo film...</span>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
    @use '/style/partials/mainStyle.scss'
</style>