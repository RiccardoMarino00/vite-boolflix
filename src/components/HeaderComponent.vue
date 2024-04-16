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
        console.log(store.films)

      })
    }
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
                <input type="text" placeholder="Cerca" class="search-input" v-model="store.ricerca_query" @keydown.enter="fetchFilm()">
                <button class="button-search" @click="fetchFilm">Cerca</button>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
  @use '/style/partials/headerStyle.scss'
</style>