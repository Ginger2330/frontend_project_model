<template>
  <el-menu
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect">

    <el-menu-item class="title">
      后台管理系统
    </el-menu-item>

    <el-menu-item @click="toggleFold" class="fold-btn">
      <i :class="toggleIcon" style="font-size: 1.8em"></i>
    </el-menu-item>

    <el-menu-item class="search">
      <el-autocomplete 
      v-model="searchText"
      suffix-icon="el-icon-search"></el-autocomplete>
    </el-menu-item>

    <el-menu-item>
      Logout
      <i class="el-icon-switch-button"></i>
    </el-menu-item>

  </el-menu>
</template>

<script>
export default {
    name: 'Navbar',
    data () {
        return {
          searchText: ''
        }
    },
    computed: {
      toggleIcon () {
        return this.$store.state.app.foldSidebar ? 'el-icon-s-unfold' : 'el-icon-s-fold'
      }
    },
    methods: {
        handleSelect () {},
        toggleFold () {
          this.$store.dispatch('toggle_sidebar')
        }
    }
}
</script>

<style>
  .title {
    font-size: 1.6em!important;
    color: #409EFF!important;
    font-family: '微软雅黑'！important;
    z-index: 2;
  }
  .fold-btn {
    z-index: 2;
    margin-right: calc(100vw - 357px - 194px - 69px)!important;
  }
  .search {
    max-width: calc(100vw - 194px - 69px - 48px);
  }
</style>