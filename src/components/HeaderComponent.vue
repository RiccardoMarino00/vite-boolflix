<script>
import store from '../store.js'
import axios from 'axios'

export default {
    data(){
        return {
            store,
        }
    },
    methods: {
    fetchFilm(){
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${store.API_KEY}&query=${store.ricerca_query}`).then((res) => {
        console.log(res.data)
        store.films = res.data.results
      })

      axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${store.API_KEY}&query=${store.ricerca_query}`).then((res) => {
            // console.log(res.data)
            store.serieTV = res.data.results
            store.renamedSerieTV = store.serieTV.map(({name: title, original_name: original_title, adult, id, original_language, release_date, vote_average, vote_count, poster_path}) => (
              {title, original_title, adult, id, original_language, release_date, vote_average, vote_count, poster_path}));
              console.log(store.renamedSerieTV)
            // console.log(store.serieTV)
      })
    },
    },
   

  created(){
    console.log(store.API_KEY)
  }
    // props: ['ricerca_query']

}
</script>

<template>
    <header>
        <div class="header-container">
            <div class="nome">BOOLFLIX</div>
            <div class="search">
                <input type="text" placeholder="Cerca" class="search-input" v-model="store.ricerca_query" @keydown.enter="fetchFilm()" >
                <button class="button-search" @click="fetchFilm()">Cerca</button>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
  @use '/style/partials/headerStyle.scss'
</style>