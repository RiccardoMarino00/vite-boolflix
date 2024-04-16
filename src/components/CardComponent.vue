<script>
import store from '../store.js'
export default {
    data(){
        return {
            store
        }
    },
    props: ['film', 'serieTv'],

}
</script>

<template>
    <div class="card">
        <div class="card-body">
            <div class="title"><strong>Titolo: </strong>{{film.title}}</div>
            <div class="original-title"><strong>Titolo originale: </strong>{{ film.original_title }}</div>
            <div class="language" v-if="film.original_language === 'en'"><strong>Lingua: </strong> <img class="img-lin" src="../assets/inghilterra.jpg" alt=""> </div>
            <div class="language" v-else-if="film.original_language === 'it'"> <img class="img-lin" src="../assets/italia.jpg" alt=""> </div>
            <div class="language" v-else-if="film.original_language === 'zh'"> <img class="img-lin" src="../assets/cina.jpg" alt=""> </div>
            <div class="language" v-else-if="film.original_language === 'ja'"> <img class="img-lin" src="../assets/giappone.png" alt=""> </div>
            <div class="language" v-else> <strong>Lingua: </strong> {{ film.original_language }} </div>
            <div class="vote" ><strong>Voto: </strong>  {{ film.vote_average }}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.img-lin{
    width: 20px;
    aspect-ratio: 1;
}
</style>