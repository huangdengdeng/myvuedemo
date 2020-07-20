<template>
<div>
  <h1>page3</h1>
  <div>
    {{str}}
  </div>
  <div>
    <el-input
  placeholder="请输入内容"
  v-model="input"
  clearable>
</el-input>
<!-- <myElSelectAdd v-model="val">
  <div>snlkdndjnidf</div>
</myElSelectAdd> -->
  </div>
</div>
</template>

<script>
// import myElSelectAdd from '@/components/myElSelectAdd'
export default {
  name: 'index',
  components: {
    // myElSelectAdd,
  },
  data () {
    return {
      val: '',
      input: '',
      str: '请你用JavaScript实现一个函数parseUrl(url),将一段url字符串解析为object'
    }
  },
  mounted () {
    this.log('0000000000000')
  },
  methods: {
    parseUrl (url) {
      var a = document.createElement('a')
      a.href = url
    },
    log (...args) {
      let str = args.join(' ')
      console.log(str)
      return '(app)' + str
    }
  }
}
</script>

<style scoped>
.c{
  color: red;
}
</style>
