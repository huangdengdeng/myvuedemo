<template>
<div>
  <h1>promise练习</h1>
  <div>
    <p>使用promise实现:</p>
    <p>开始的时候console.log('start')</p>
    <p>等待3秒后console.log('first step finished')</p>
    <p>之后用ajax对www.baidu.com发出get请求，</p>
    <p>请求返回后结果给下个promise</p>
    <p>console.log输出结果</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'index',
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
.e{
  color: red;
}
</style>
