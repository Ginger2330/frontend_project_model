<template>
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item 
        v-for="(item, index) in breadcrumbList" 
        :key="index"
        :to="item.path">
            {{item.title}}
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
export default {
    name: 'Breadcrumb',
    computed: {
        breadcrumbList () {
            return this.$route.meta
        }
    }
}
</script>

<style>

</style>