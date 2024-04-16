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
    <ul v-for="film in store.films" :key="store.id">
        <li>
            <cardComponent :film="film"/>
        </li>
    </ul>
</template>

<style lang="scss" scoped>

</style>