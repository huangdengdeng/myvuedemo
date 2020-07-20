<template>
<div>
  <h1>6878</h1>
  <div v-if="bb">
    <p v-for="(v, i) in arr" :key="i" >{{v}}</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      bb: true,
      arr: [1, 2, 3, 4]
    }
  },
  mounted () {
    var data = [
      {
        name: '1',
        value: 0.58
      },
      {
        name: '2',
        value: 0.38
      },
      {
        name: '3',
        value: 0.28
      },
      {
        name: '4',
        value: 0.28
      },
      {
        name: '5',
        value: 0.88
      }
    ]
    this.init([1, 687, 9, 67, 67, 9, 'vnv', 'vpjoli', 'f', 'a', '2'])
    console.log(Object.prototype.toString.call([0, 9]) === '[object Array]')
    console.log(Object.prototype.isPrototypeOf([0, 'poi', 'hudg']))
    console.log(this.count('5767566123276937524798', '2'))
    console.log(this.arrDel([1, 3, 5, 23, 1, 'sdf', 889, 23]))
    console.log(this.arrDel2([1, 3, 5, 23, 1, 'sdf', 889, 23]))
    console.log(this.bubbleSort([2, 3, 8, 4, 6]))
    console.log(this.quickSort([2, 3, 8, 4, 6]))
    console.log(data.sort(this.compare))
    this.getStrObj('fsajfkllsdgfsdkjfd8')
    console.log([[2, 4], [1, 2], [2, 1], [1, 3]].sort(this.comparetwo))
    console.log('key=1'.split('='))
    console.log('key=1'.split('=').join(''))
    console.log(this.fenGetString('fssdfsdfdfdgfsdgerge', 3))
  },
  methods: {
    init (arr) {
      arr = arr.sort()
      console.log(arr.sort())
      var array = [arr[0]]
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
          array.push(arr[i])
        }
      }
      console.log(array)
      return array
    },
    count (str, num) { // 计算字符串中某个字符的个数
      var arr = []
      for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === num) {
          arr.push(str.charAt(i))
        }
      }
      return arr.length
    },
    arrDel (arr) { // 数组去重复
      var result = []
      var obj = {}
      for (var i in arr) {
        if (!obj[arr[i]]) {
          result.push(arr[i])
          obj[arr[i]] = 1
        }
      }
      return result
    },
    arrDel2 (arr) { // 数组去重复
      var result = []
      for (let i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
          result.push(arr[i])
        }
      }
      return result
    },
    arrDel3 (arr) { // 数组去重复
    },
    bubbleSort (arr) { // 冒泡排序解析，后面的每一个数都与最小的前一个数作了一遍比较，所以得出正常的排序
      for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          console.log(arr[i])
          if (arr[i] > arr[j]) { // 获取前一个值和后一个值做比较
            var temp = arr[j] // 创建中间变量，交换两个值
            arr[j] = arr[i]
            arr[i] = temp
          }
        }
      }
      return arr
    },
    quickSort (arr) {
      if (arr.length <= 1) {
        return arr
      }
      var key = Math.floor(arr.length / 2) // 选基值，可以是任意位置的
      var keyValue = arr.splice(key, 1)[0]
      var left = []
      var right = []
      for (var i = 0; i < arr.length; i++) {
        // 小于基准的放在左边、大于放右边
        if (arr[i] < keyValue) {
          left.push(arr[i])
        } else {
          right.push(arr[i])
        }
      }
      // 递归
      console.log(keyValue)
      return this.quickSort(left).concat([keyValue], this.quickSort(right))
    },
    compare (a, b) { // json 数组排序
      return b.value - a.value
    },
    getStrObj (str) { // 判断一个字符串中出现次数最多的字符，统计这个次数
      var obj = {}
      for (let i = 0; i < str.length; i++) {
        if (obj[str[i]]) {
          obj[str[i]]++
        } else {
          obj[str[i]] = 1
        }
      }
      var max = 0
      var icur = ''
      for (var key in obj) {
        if (obj[key] > max) {
          max = obj[key]
          icur = key
        }
      }
      console.log('出现次数最多的字符是' + icur + '出现次数' + max)
    },
    comparetwo (a, b) { // 数组排序,如[[1,2], [2,1],[1,3]] => [[1,2],[1,3],[2,1]]
      if (a[0] !== b[0]) {
        return a[0] - b[0]
      } else {
        return a[1] - b[1]
      }
    },
    fenGetString (str, num) { // 每num位就添加一个逗号
      var arr = str.split('')
      for (var i = num; i < str.length; i += num + 1) {
        arr.splice(i, 0, ',')
        str = arr.join('')
      }
      return arr.join('')
    }
  }
}
</script>

<style scoped>

</style>
