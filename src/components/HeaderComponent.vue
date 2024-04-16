<script>
export default {
    data(){
        return {

        }
    }

}
</script>

<template>
    <header>
        <div class="header-container">
            <div class="nome">BOOLFLIX</div>
            <div class="search">
                <input type="text" placeholder="Cerca" class="search-input">
                <button class="button-search">Cerca</button>
            </div>
          
        </div>
    </header>
</template>

<style lang="scss" scoped>
  @use '/style/partials/headerStyle.scss'
</style>