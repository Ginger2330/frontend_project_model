<template>
  <div class="frame-container">
        <Navbar class="navbar"/>
        <el-container class="content-container">
            <Sidebar class="sidebar"/>
            <el-container class="main-container">
                <el-header class="header">
                    <Breadcrumb class="header-bread"/>
                </el-header>
                <el-main class="main">
                    <transition name="fade">
                        <router-view/>
                    </transition>
                </el-main>
                <div class="footer-container">
                    <Footer class="footer"/>
                </div>
            </el-container>
        </el-container>
  </div>
</template>

<script>
import Navbar from './navbar'
import Sidebar from './sidebar'
import Footer from './footer'
import Breadcrumb from './breadcrumb'

export default {
    name: 'Layout',
    components: { 
        Navbar, 
        Sidebar, 
        Footer, 
        Breadcrumb 
    }
}
</script>

<style>
    .navbar {
        height: 60px;
    }
    .sidebar {
        height: calc(100vh - 61px);
        width: 180px;
    }
    .content-container {
        
    }
    .main-container {
        height: calc(100vh - 61px);
    }
    .header-bread {
        line-height: 60px!important;
        font-size: 0.9em!important;
    }
    .main {
        display: flex!important;
        flex-direction: column!important;
        justify-content: flex-start!important;
        align-items: center!important;
        background-color: #eee;
    }
    .footer-container {
        position: relative;
        background-color: lightcoral
    }
    .footer {
        position: absolute;
        bottom: 0;
        right: 10px;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .4s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>