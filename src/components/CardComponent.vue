<script>
// import store from '../store.js'
export default {
    data(){
        return {
            // store
        }
    },
    props: {
        item: {
            type: Object,
            required: true,
        }
    },

    
    // methods: {
    //     renameKey(){
    //         console.log(this.serieTV)
    //         serieTV.map(serie => {
    //             const {
    //                 name,
    //                 original_name,
    //             } = serie;

    //             return {
    //                 title: name,
    //                 original_title: original_name,
    //             }
    //         })
    //     },
    // },
    // mounted(){
    //     this.renameKey()
    //     console.log(serieTv)
    // }
}
</script>

<template>
    <div class="card">
        <div class="card-body">
            <div class="title"><strong>Titolo: </strong>{{item.title}}</div>
            <div class="original-title"><strong>Titolo originale: </strong>{{ item.original_title }}</div>
            <div class="language" v-if="item.original_language === 'en'"><strong>Lingua: </strong> <img class="img-lin" src="../assets/inghilterra.jpg" alt=""> </div>
            <div class="language" v-else-if="item.original_language === 'it'"> <img class="img-lin" src="../assets/italia.jpg" alt=""> </div>
            <div class="language" v-else-if="item.original_language === 'zh'"> <img class="img-lin" src="../assets/cina.jpg" alt=""> </div>
            <div class="language" v-else-if="item.original_language === 'ja'"> <img class="img-lin" src="../assets/giappone.png" alt=""> </div>
            <div class="language" v-else> <strong>Lingua: </strong> {{ item.original_language }} </div>
            <div class="vote" ><strong>Voto: </strong>  {{ item.vote_average }}</div>
            <div>
                <font-awesome-icon :icon="['far', 'star']" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.img-lin{
    width: 20px;
    aspect-ratio: 1;
}
</style>