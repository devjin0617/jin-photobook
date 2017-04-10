<template>

  <el-col :xs="8" :sm="6" :md="4" :lg="3">
    <el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo">
      <el-menu-item-group title="Group One">
        <el-menu-item index="1"><i class="el-icon-message"></i>Navigator One</el-menu-item>
        <el-menu-item index="2"><i class="el-icon-message"></i>Navigator Two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="3"><i class="el-icon-message"></i>Navigator Three</el-menu-item>
        <el-menu-item index="4"><i class="el-icon-message"></i>Navigator Four</el-menu-item>
      </el-menu-item-group>
    </el-menu>
  </el-col>


</template>

<script>
export default {
  name: 'jp-side-bar',
  created () {

  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
.el-menu {
  height: 100%;
}
</style>
