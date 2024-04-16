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
    <div v-for="film in store.films" :key="store.id">
        <cardComponent :film="film"/>
    </div>
</template>

<style lang="scss" scoped>

</style>