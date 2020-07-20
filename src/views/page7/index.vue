<template>
<div>
  <h1>在vue中使用export default导出的class类</h1>
</div>
</template>

<script>
import win from '@/components/exportClass'

export default {
  data () {
    return {}
  },
  mounted () {
    this.getProcessInfoFn()
  },
  methods: {
    getProcessInfoFn () {
      console.log(win.getProcessInfo()) // 233
    }
  }
}
</script>
<style scoped>

</style>
