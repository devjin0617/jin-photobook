<template>
  <div id="app">

    <!--<img src="./assets/logo.png">-->
    <jp-navi-bar></jp-navi-bar>
    <div class="container">
      <el-row type="flex" justify="space-between">
        <jp-side-bar></jp-side-bar>
        <el-col :xs="14" :sm="18" :md="20" :lg="21">
          <router-view></router-view>
        </el-col>
        <el-col :span="0"></el-col>
      </el-row>

    </div>

  </div>
</template>

<script>
import JPNaviBar from './layouts/JPNaviBar'
import JPSideBar from './layouts/JPSideBar'

export default {
  name: 'app',
  components: {
    'jp-navi-bar': JPNaviBar,
    'jp-side-bar': JPSideBar
  }
}
</script>

<style lang="scss">
@import './assets/styles/base.scss';
#app {
  height: 100vh;
  min-width:600px;
}
.container {
  height:100%;

  .el-row {
    height:100%;
    padding-top:60px;
  }
}

</style>
