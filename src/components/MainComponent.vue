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
    }
}
</script>

<template>
    <div  class="row">
        <cardComponent  class="col" v-for="film in store.films" :key="store.id" :item="film" />
    </div>
</template>

<style lang="scss" scoped>
    @use '/style/partials/mainStyle.scss'
</style>