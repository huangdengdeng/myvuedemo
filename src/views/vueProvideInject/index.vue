<template>
<div>
  <h1>vue高级组件之provide / inject</h1>
  <Grandson></Grandson>
</div>
</template>

<script>
import Grandson from '@/components/grandson'
export default {
  name: 'index',
  components: {
    Grandson
  },
  provide: {
    bar: 'bar asdsfgr'
  },
  data () {
    return {}
  },
  mounted () {
  },
  methods: {}
}
</script>

<style scoped>
</style>
