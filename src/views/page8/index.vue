<template>
<div>
  <h1>使用自定一个v-model</h1>
  <div>
    <base-checkbox v-model="lovingVue"></base-checkbox>
  </div>
  <base-input v-model="lovingInput"></base-input>
  <div>{{lovingInput}}</div>
</div>
</template>

<script>
import baseCheckbox from '@/components/baseCheckbox'
import baseInput from '@/components/baseInput'
export default {
  name: 'index',
  components: {
    baseCheckbox,
    baseInput
  },
  data () {
    return {
      lovingVue: true,
      lovingInput: ' '
    }
  },
  mounted () {
    console.log(typeof undefined) // 2
    this.init()
  },
  methods: {
    async init () {
      let promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('done!')
        }, 1000)
      })
      let promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('done!')
        }, 2000)
      })
      let promise3 = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('done!')
        }, 3000)
      })
      let promise4 = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('done!')
        }, 4000)
      })
      let result1 = await promise1
      let result2 = await promise2
      let result3 = await promise3
      let result4 = await promise4
      console.log(result1)
      console.log(result2)
      console.log(result3)
      console.log(result4)
    }
  }
}
</script>

<style scoped>

</style>
