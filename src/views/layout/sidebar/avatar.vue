<template>
    <div class="avatar-container">
        <el-avatar 
        shape="square" 
        :size="60"
        icon="el-icon-user-solid"
        class="avatar-pic">
        </el-avatar>
        <div class="user-name">GINGER</div>
    </div>
</template>

<script>
export default {
    name: 'avatar'
}
</script>

<style>
    .avatar-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin: 30px auto;
        font-size: 1em;
        overflow: hidden;
    }

</style>