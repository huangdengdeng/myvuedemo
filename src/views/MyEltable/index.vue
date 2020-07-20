<template>
  <!-- <el-table
    :data="tableData"
    style="width: 100%"
    height="250">
    <el-table-column
      fixed
      prop="date"
      label="日期"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="邮编"
      width="120">
    </el-table-column>
  </el-table>-->
  <div>
    <myElTableB :data="data"></myElTableB>
    <div @click="changeClick">改变btn的内容</div>
  </div>
</template>

<script>
import myElTableB from "@/components/myElTableB";
export default {
  components: {
    myElTableB
  },
  // provide: {
  //   data: [
  //     {
  //       date: "2016-05-03",
  //       name: "王小虎",
  //       province: "上海",
  //       city: "普陀区",
  //       address: "上海市普陀区金沙江路 1518 弄",
  //       zip: 200333
  //     },
  //     {
  //       date: "2016-05-02",
  //       name: "王小虎",
  //       province: "上海",
  //       city: "普陀区",
  //       address: "上海市普陀区金沙江路 1518 弄",
  //       zip: 200333
  //     },
  //     {
  //       date: "2016-05-04",
  //       name: "王小虎",
  //       province: "上海",
  //       city: "普陀区",
  //       address: "上海市普陀区金沙江路 1518 弄",
  //       zip: 200333
  //     },
  //     {
  //       date: "2016-05-01",
  //       name: "王小虎",
  //       province: "上海",
  //       city: "普陀区",
  //       address: "上海市普陀区金沙江路 1518 弄",
  //       zip: 200333
  //     },
  //     {
  //       date: "2016-05-08",
  //       name: "王小虎",
  //       province: "上海",
  //       city: "普陀区",
  //       address: "上海市普陀区金沙江路 1518 弄",
  //       zip: 200333
  //     },
  //     {
  //       date: "2016-05-06",
  //       name: "王小虎",
  //       province: "上海",
  //       city: "普陀区",
  //       address: "上海市普陀区金沙江路 1518 弄",
  //       zip: 200333
  //     },
  //     {
  //       date: "2016-05-07",
  //       name: "王小虎",
  //       province: "上海",
  //       city: "普陀区",
  //       address: "上海市普陀区金沙江路 1518 弄",
  //       zip: 200333
  //     }
  //   ]
  // },
  data() {
    return {
      data: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        }
      ]
    };
  },
  methods: {
    changeClick() {
      this.data = [
        {
          date: "2016-05-03",
          name: "hello",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-02",
          name: "hello",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "hello",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "hello",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-08",
          name: "hello",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-06",
          name: "hello",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-07",
          name: "hello",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        }
      ];
    }
  }
};
</script>