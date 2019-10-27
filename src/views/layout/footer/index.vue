<template>
  <div>
    Copyright &copy; {{ getYear }} 
    <a target="_blank" href="https:// ginger2330.github.io">Ginger2330</a>
    . All rights reserved.
  </div>
</template>

<script>
export default {
    name: 'Footer',
    computed: {
        getYear () {
            let fullYear = new Date().getFullYear()
            if (fullYear > 2019) { fullYear = '2019-' + fullYear }
            return fullYear
        }
    }
}
</script>

<style>
    
</style>