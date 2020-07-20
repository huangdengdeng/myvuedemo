<template>
<div>
  <h1>宏任务和微任务</h1>
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
    // this.init()
    this.init2()
  },
  methods: {
    init () {
      setTimeout(function () {
        console.log('1')
      })
      new Promise(function (resolve) {
        console.log('2')
        resolve()
      }).then(function () {
        console.log('3')
      }).then(function () {
        console.log('4')
      })
      console.log('5')
    },
    init2 () { // 1 7 6 8 2 4 3 5 9 11 10 12
      console.log('1')
      setTimeout(function () {
        console.log('2')
        process.nextTick(function () {
          console.log('3')
        })
        new Promise(function (resolve) {
          console.log('4')
          resolve()
        }).then(function () {
          console.log('5')
        })
      })
      process.nextTick(function () {
        console.log('6')
      })
      new Promise(function (resolve) {
        console.log('7')
        resolve()
      }).then(function () {
        console.log('8')
      })
      setTimeout(function () {
        console.log('9')
        process.nextTick(function () {
          console.log('10')
        })
        new Promise(function (resolve) {
          console.log('11')
          resolve()
        }).then(function () {
          console.log('12')
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
