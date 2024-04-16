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
        <cardComponent :film="film" class="col" v-for="film in store.films" :key="store.id"/>
    </div>
</template>

<style lang="scss" scoped>
    @use '/style/partials/mainStyle.scss'
</style>