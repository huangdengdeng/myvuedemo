<template>
<div>
  <h1>我在使用一个继承组件</h1>
  <base-c></base-c>
</div>
</template>

<script>
import baseC from '@/components/extendsBase'
export default {
  name: 'index',
  components: {
    baseC
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {}
}
</script>

<style scoped>

</style>
