<script>
import store from '../store.js'
export default {
    data(){
        return {
            store
        }
    },
    props: ['film'],
}
</script>

<template>
    <div class="card">
        <div class="card-body">
            <div class="title">{{film.title}}</div>
            <div class="original-title">{{ film.original_title }}</div>
            <div class="language">{{ film.original_language }}</div>
            <div class="vote">{{ film.vote_average }}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>