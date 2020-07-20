<template>
    <div>
      <h1>兄弟组件之间的通信{{ id }}</h1>
      <button @click="momSaidChill" v-if="stopFighting()" class="btn">停止通讯</button>
      <brother-card :messageSon="messageson" @brotherSaid="messageDaughter($event)"></brother-card>
      <sister-card :messageDaughter="messagedaughter" @sisterSaid="messageSon($event)">
        不具名插槽
      </sister-card>
    </div>
</template>

<script>
import BrotherCard from '@/components/BrotherCard'
import SisterCard from '@/components/SisterCard'
// import { Service } from '@/config/api.js'
// import axios from 'axios'
export default {
  name: 'index',
  props: ['id'],
  data: () => ({
    input: '',
    theCardTitle: '父组件',
    messagedaughter: '',
    messageson: ''
  }),
  beforeUpdate () {
    console.log('11111111111')
  },
  updated () {
    console.log('updated')
  },
  mounted () {
    setInterval(this.init, 2000)
    this.getData()
  },
  components: {
    BrotherCard,
    SisterCard
  },
  methods: {
    getData () {
      // axios.get('http://192.168.1.101:8888/users', {
      //   firstName: 'Fred',
      //   lastName: 'Flintstone'
      // })
      //   .then(function (response) {
      //     console.log(response)
      //   })
      //   .catch(function (error) {
      //     console.log(error)
      //   })
      // Service({
      //   method: 'get',
      //   url: 'users'
      //   // 传递参数
      //   // data: obj,
      //   // 设置请求头信息
      //   // headers: {s
      //   //   key: ''
      //   // },
      //   // responseType: 'json'
      // }).then(response => {
      //   // 请求成功
      //   let res = response.data
      //   console.log(res)
      // }).catch(error => {
      //   // 请求失败，
      //   console.log(error)
      // })
    },
    messageDaughter (message) {
      this.messagedaughter = message
    },
    messageSon (message) {
      this.messageson = message
    },
    stopFighting () {
      if (this.messagedaughter && this.messageson) {
        return true
      }
      return false
    },
    momSaidChill () {
      this.messagedaughter = ''
      this.messageson = ''
    },
    getColor () {
      var str = '#'
      var arr = ['1', '2', '3', '4', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
      for (var i = 0; i < 6; i++) {
        var num = parseInt(Math.random() * 16)
        str += arr[num]
      }
      return str
    },
    init () {
      // document.body.style.background = this.getColor()
      // document.body.style.backgroundImage = 'linear-gradient(to right, ' + this.getColor() + ',' + this.getColor() + ',' + this.getColor() + ')'
    }
  }
}
</script>

<style scoped>
.a{
  color: red;
}
</style>
