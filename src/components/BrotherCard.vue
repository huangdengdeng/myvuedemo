
<template>
  <div class="message">
    <div class="message-header">
      <h5 v-text="theCardTitle"></h5>
    </div>
    <div class="message-body">
      <p class="message-text">我是Brother组件</p>
      <button @click="messageSister" class="btn">给妹妹发消息</button>

      <div v-if="messageSon" class="alert" v-html="messageSon"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BrotherCard',
  props: ['messageSon'],
  data: () => ({
    theCardTitle: '子组件1'
  }),
  methods: {
    messageSister () {
      this.$emit('brotherSaid', '哥哥,妈妈说，该做作业了！(^_^)!!!（哥哥说的）')
    }
  }
}
</script>
