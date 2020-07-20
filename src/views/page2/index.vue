<template>
     <div>
       <h1>page1</h1>
     <input />
     <base-c></base-c>
     <!-- <myElSelect v-model="select"></myElSelect> -->
     <my-el-select v-model="value" clearable  placeholder="请选择" @change="changeS">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </my-el-select>
     <div>
       {{str}}
     </div>
   </div>
</template>

<script>
import baseC from '@/components/extendsBase'
import myElSelect from '@/utils/myElSelect.js'
export default {
  name: 'index',
   components: {
    baseC,
    myElSelect
  },
  data () {
    return {
      options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
      obj: [
        {id: 3, parent: 2},
        {id: 1, parent: null},
        {id: 2, parent: 3}
      ],
      str: '1、关系型数组转换成树形结构对象\n' +
        '       关系型数组\n' +
        '       var obj = [\n' +
        '       {id: 3, parent: 2},\n' +
        '       {id :1 ,parent: null},\n' +
        '       {id:2, parent:3}\n' +
        '       ]\n' +
        '       //期望结果:\n' +
        '       o = {\n' +
        '       obj:{\n' +
        '       id: 1,\n' +
        '       parent:null,\n' +
        '       child: {\n' +
        '       id : 2,\n' +
        '       parent : 1,\n' +
        '       child: {\n' +
        '       id:3,\n' +
        '       parent:2\n' +
        '       }\n' +
        '       }\n' +
        '       }\n' +
        '       }'
    }
  },
  mounted () {
    this.obj = this.treeObj2(this.obj)
    console.log(JSON.stringify(this.obj))
  },
  methods: {
    changeS() {
       console.log('changes')
    },
    /**
     *  //1、关系型数组转换成树形结构对象
     //关系型数组
     var obj = [
     {id: 3, parent: 2},
     {id :1 ,parent: null},
     {id:2, parent:3}
     ]
     //期望结果:
     o = {
            obj:{
                id: 1,
                parent:null,
                child: {
                    id : 2,
                    parent : 1,
                    child: {
                        id:3,
                        parent:2
                    }
                }
            }
        }
     * @param obj
     * @returns {*}
     */
    treeObj (obj) { // 不能正确返回结果
      obj.map(item => {
        if (item.parent !== null) {
          obj.map(o => {
            if (item.parent === o.id) {
              if (!o.child) {
                o.child = []
              }
              o.child.push(item)
              // o.child = o.child
            }
          })
        }
      })
      return obj.filter(item => item.parent === null)[0]
    },
    treeObj2 (obj) { // 正确实现结果
      return obj.sort((a, b) => b.parent - a.parent).reduce((acc, cur) => (acc ? {...cur, child: acc} : cur))
    }
  }
}
</script>

<style scoped>
.b{
  color: red;
}
</style>
