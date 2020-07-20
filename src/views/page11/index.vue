<template>
<div>
  <h1>6878</h1>
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
    let a = [{a: 2, b: 2}, 1, 2, 45]
    a = this.deepClone1(a)
    console.log(a)
  },
  methods: {
    deepClone1 (obj) { // 使用递归的方法实现数组、对象的深拷贝
      var objClone = Array.isArray(obj) ? [] : {}
      if (obj && typeof obj === 'object') {
        for (let key in obj) {
          if (obj.hasOwnProperty(key)) {
            if (obj[key] && typeof obj[key] === 'object') {
              objClone[key] = this.deepClone1(obj[key])
            } else {
              objClone[key] = obj[key]
            }
          }
        }
      }
      return objClone
    },
    deepClone2 (obj) {
      let _obj = JSON.stringify(obj)
      let objClone = JSON.parse(_obj)
      return objClone
    },
    async aa (arg) {
      return arg
    }
    // init: function () {
    //   const tasks = []
    //   setTimeout(() => {
    //     cons
    //   })
    //   const output = (i) => {
    //     return new Promise((res) => {
    //     })
    //   }
    // }
  }
}
</script>

<style scoped>

</style>
