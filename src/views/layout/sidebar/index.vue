<template>
  <el-menu
    mode="vertical"
    router
    :default-active="$route.path"
    :collapse="foldSidebar"
    @select="handleSelect">

    <Avatar class="avatar"/>
    <template v-for="menu in menuList">
      <el-menu-item 
      :key="menu.path" 
      v-if="menu.children.length===1"
      :index="menu.path">
        <i :class="menu.icon"></i>
        <span slot="title" v-text="menu.title"></span>
      </el-menu-item>
      
      <el-submenu 
      :key="menu.path"
      v-else
      :index="menu.path">
        <template slot="title">
          <i :class="menu.icon"></i>
          <span v-text="menu.title"></span>
        </template>
        <el-menu-item-group>
          <el-menu-item 
          v-for="(item, index) in menu.children" 
          :key="index"
          :index="item.meta[item.meta.length-1].path"
          v-text="item.meta[item.meta.length-1].title">
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </template>
  </el-menu>
</template>

<script>
import Avatar from './avatar'

export default {
    name: 'Sidebar',
    components: {Avatar},
    computed: {
      menuList () {
        const routes = this.$router.options.routes.filter(
          item => item.component && item.component.name && item.component.name==='Layout'
          )
        return routes
      },
      foldSidebar () {
        console.log(this.$store.state.app.foldSidebar)
        return this.$store.state.app.foldSidebar
      }
    },
    created () {
    },
    methods: {
        handleSelect () {}
    }
}
</script>

<style>

</style>