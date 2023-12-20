<template>
  <div id="shop">
    <header-shop/>
    <router-view></router-view>
  </div>
  
</template>

<script>
import HeaderShop from './header/HeaderShop.vue'

export default {
  name: 'ShopHome',
  components: {
    HeaderShop
  }
}
</script>

<style>
#shop {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
