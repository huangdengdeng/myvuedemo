<template>
  <myElTable :data="data"></myElTable>
</template>

<script>
import myElTable from "./myElTable";
export default {
  components: {
    myElTable
  },
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
  },
  methods: {}
};
</script>
