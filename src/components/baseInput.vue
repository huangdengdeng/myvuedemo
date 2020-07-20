<template>
<input type="text" :value="age" @input="change($event.target.value)">
</template>

<script>
export default {
  name: 'baseInput',
  props: [ 'age' ],
  model: {
    prop: 'age', // 对应的变量
    event: 'change' // 触发事件
  },
  methods: {
    // 把修改后的值传递出去
    change (value) {
      console.log(value)
      this.$emit('change', value)
    }
  }
}
</script>

<style scoped>

</style>
