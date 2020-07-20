<template>
  <div id="app">
      <router-link to="/home">Go to home</router-link>
    <router-link to="/new">Go to new</router-link>
    <router-link to="/page1">Go to pge1</router-link>
    <keep-alive>
      <router-link to="/page2">Go to pge2</router-link>
    </keep-alive>
    <router-link to="/page3">Go to pge3</router-link>
    <router-link to="/page4">Go to pge4</router-link>
    <router-link to="/page5">Go to pge5</router-link>
    <router-link to="/page6">Go to pge6</router-link>
    <router-link to="/page7">Go to pge7</router-link>
    <router-link to="/page8">Go to pge8</router-link>
    <router-link to="/page9">Go to pge9</router-link>
    <router-link to="/page10">Go to pge10</router-link>
    <router-link to="/page11">Go to pge11</router-link>
    <router-link to="/page12">Go to pge12</router-link>
    <router-link to="/myEltable">Go to MyEltable</router-link>
    <router-link to="/vueProvideInject">Go to vueProvideInject</router-link>
    
    <router-view>
    </router-view>
    <!-- <router-view name="his"></router-view> // 复用路由 -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
