<script>
import store from '../store.js'
export default {
    data(){
        return {
            store
        }
    },
    // props: ['films'],

    // props: ['info'],
        
    

}
</script>

<template>
    <div class="card">
        <div class="card-body">
            <div class="title">{{ store.films.title}}</div>
            <div class="original-title"></div>
            <div class="language"></div>
            <div class="vote"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>