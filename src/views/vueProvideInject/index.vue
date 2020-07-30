<template>
<div>
  <h1>vue高级组件之provide / inject</h1>
  <Grandson></Grandson>
  <div>
    
<el-row :gutter="24">
  <el-col :xs="24" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></el-col>
  <el-col :xs="24" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :xs="24" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></el-col>
  <el-col :xs="24" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>



  </div>
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
 .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
