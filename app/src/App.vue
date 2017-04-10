<template>
  <div id="app">

    <!--<img src="./assets/logo.png">-->
    <jp-navi-bar></jp-navi-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import JPNaviBar from './layouts/JPNaviBar'

export default {
  name: 'app',
  components: {
    'jp-navi-bar': JPNaviBar
  }
}
</script>

<style lang="scss">
@import './assets/styles/base.scss'
</style>
