<template>
  <el-table :data="data" style="width: 100%" height="250">
    <el-table-column fixed prop="date" label="日期" width="150"></el-table-column>
    <el-table-column prop="name" label="姓名" width="120"></el-table-column>
    <el-table-column prop="province" label="省份" width="120"></el-table-column>
    <el-table-column prop="city" label="市区" width="120"></el-table-column>
    <el-table-column prop="address" label="地址" width="300"></el-table-column>
    <el-table-column prop="zip" label="邮编" width="120"></el-table-column>
  </el-table>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  
  //  inject: {
  //   data: {
  //     from: 'data',
  //     default: () => []
  //   }
  // },
  data() {
    return {};
  },
  created() {
      console.log(this.data);
      console.log(this.$parent);
  },
  methods: {}
};
</script>
