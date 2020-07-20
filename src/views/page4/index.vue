<template>
<div>
  <h1>promise</h1>
  <div>
    <p>promise练习之 红灯三秒亮 黄灯两秒亮 绿灯一秒亮</p>
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
    this.clickLinght()
    this.proAll()
    this.get(3)
  },
  methods: {
    green () {
      console.log('绿灯1')
    },
    yellow () {
      console.log('黄灯2')
    },
    red () {
      console.log('红灯3')
    },
    promiseFn (cb, timer) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(timer)
          cb()
        }, timer)
      })
    },
    clickLinght () {
      const that = this
      Promise.resolve().then(res => {
        console.log(res)
        return that.promiseFn(that.green, 1000)
      }).then(res => {
        console.log(res)
        // return that.promiseFn(that.yellow, 1000)
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            reject(new Error('errorMsg1'))
          }, 1000)
        })
      }).then(res => {
        console.log(res)
        return that.promiseFn(that.red, 1000)
        // return new Promise((resolve, reject) => {
        //   setTimeout(() => {
        //     reject(new Error('errorMsg2'))
        //   }, 1000)
        // })
      }).catch((err) => {
        console.log(err)
      })
    },
    proAll () {
      let p1 = Promise.resolve(1)
      let p2 = Promise.resolve(2)
      let p3 = Promise.resolve(3)
      let p4 = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(4000)
        }, 6000)
      })
      Promise.all([p1, p2, p3, p4]).then((res) => {
        console.log(res)
      }).catch(e => {
        console.log(JSON.stringify(e))
      })
    },
    get (i) {
      console.log('in', i)
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(i * 1000)
          console.log('Out', i, 'Out')
        }, i * 1000)
      })
    }
  }
}
</script>

<style scoped>
.d{
  color: red;
}
</style>
