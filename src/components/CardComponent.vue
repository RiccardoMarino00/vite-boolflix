<script>
// import store from '../store.js'
export default {
    data(){
        return {
            // store
            info: false,

        }
    },
    props: {
        item: {
            type: Object,
            required: true,
        }
    },
   

}
</script>

<template>
    <div class="card" @mouseover="info = true" @mouseleave="info = false">
        <div class="card-img" v-if="info === false" >
            <img :src= "`https://image.tmdb.org/t/p/w342${item.poster_path}`" alt="" class="poster">
        </div>
        <div class="card-body" v-if="info === true" >
            <div class="title"><strong>Titolo: </strong>{{item.title}}</div>
            <div class="original-title"><strong>Titolo originale: </strong>{{ item.original_title }}</div>
            <div class="language" v-if="item.original_language === 'en'"><strong>Lingua: </strong> <img class="img-lin" src="../assets/inghilterra.jpg" alt=""> </div>
            <div class="language" v-else-if="item.original_language === 'it'"> <img class="img-lin" src="../assets/italia.jpg" alt=""> </div>
            <div class="language" v-else-if="item.original_language === 'zh'"> <img class="img-lin" src="../assets/cina.jpg" alt=""> </div>
            <div class="language" v-else-if="item.original_language === 'ja'"> <img class="img-lin" src="../assets/giappone.png" alt=""> </div>
            <div class="language" v-else-if="item.original_language === 'es'"> <img class="img-lin" src="../assets/spagna.jpg" alt=""> </div>
            <div class="language" v-else-if="item.original_language === 'da'"> <img class="img-lin" src="../assets/danimarca.jpg" alt=""> </div>
            <div class="language" v-else-if="item.original_language === 'no'"> <img class="img-lin" src="../assets/norvegia.jpg" alt=""> </div>
            <div class="language" v-else-if="item.original_language === 'lv'"> <img class="img-lin" src="../assets/lettonia.jpg" alt=""> </div>
            <div class="language" v-else-if="item.original_language === 'ml'"> <img class="img-lin" src="../assets/malayalam.png" alt=""> </div>
            <div class="language" v-else-if="item.original_language === 'ar'"> <img class="img-lin" src="../assets/arabic.jpg" alt=""> </div>
            <div class="language" v-else-if="item.original_language === 'sk'"> <img class="img-lin" src="../assets/slovak.jpg" alt=""> </div>
            <div class="language" v-else-if="item.original_language === 'tr'"> <img class="img-lin" src="../assets/turkish.png" alt=""> </div>
            <div class="language" v-else-if="item.original_language === 'pt'"> <img class="img-lin" src="../assets/portogallo.webp" alt=""> </div>


            <div class="language" v-else> <strong>Lingua: </strong> {{ item.original_language }} </div>
            <div class="vote" v-if="item.vote_average >= 9"><strong>Voto: </strong> 5 </div>
            <div class="vote" v-else-if="item.vote_average >= 7"><strong>Voto: </strong> 4 </div>
            <div class="vote" v-else-if="item.vote_average >= 5"><strong>Voto: </strong> 3 </div>
            <div class="vote" v-else-if="item.vote_average >= 3"><strong>Voto: </strong> 2 </div>
            <div class="vote" v-else-if="item.vote_average >= 1"><strong>Voto: </strong> 1 </div>
            <div class="vote" v-else-if="item.vote_average < 1"><strong>Voto: </strong> 0 </div>
            <div class="star" v-if="item.vote_average >= 9">
                <font-awesome-icon :icon="['fas', 'star']" v-for="n in 5" :key="n" />
            </div>
            <div class="star" v-else-if="item.vote_average >= 7">
                <font-awesome-icon :icon="['fas', 'star']" v-for="n in 4" :key="n"/>
                <font-awesome-icon :icon="['far', 'star']" />
            </div>
            <div class="star" v-else-if="item.vote_average >= 5">
                <font-awesome-icon :icon="['fas', 'star']" v-for="n in 3" :key="n" />
                <font-awesome-icon :icon="['far', 'star']" />
                <font-awesome-icon :icon="['far', 'star']" />
            </div>
            <div class="star" v-else-if="item.vote_average >= 3">
                <font-awesome-icon :icon="['fas', 'star']"  v-for="n in 2" :key="n" />
                <font-awesome-icon :icon="['far', 'star']" />
                <font-awesome-icon :icon="['far', 'star']" />
                <font-awesome-icon :icon="['far', 'star']" />
            </div>
            <div class="star" v-else-if="item.vote_average >= 1">
                <font-awesome-icon :icon="['fas', 'star']" />
                <font-awesome-icon :icon="['far', 'star']" />
                <font-awesome-icon :icon="['far', 'star']" />
                <font-awesome-icon :icon="['far', 'star']" />
                <font-awesome-icon :icon="['far', 'star']" />
            </div>
            <div class="star" v-else-if="item.vote_average < 1">
                <font-awesome-icon :icon="['far', 'star']" />
                <font-awesome-icon :icon="['far', 'star']" />
                <font-awesome-icon :icon="['far', 'star']" />
                <font-awesome-icon :icon="['far', 'star']" />
                <font-awesome-icon :icon="['far', 'star']" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '/style/partials/cardStyle.scss';
.img-lin{
    width: 20px;
}


</style>