<template>
  <div class="message">
    <div class="message-header">
      <h5 v-text="theCardTitle"></h5>
    </div>
    <div class="message-body">
      <p class="message-text">我是Sister组件</p>
      <button @click="messageBrother" class="btn">给哥哥发消息</button>
      <slot></slot>
      <div v-if="messageDaughter" class="alert" v-html="messageDaughter"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SisterCard',
  props: ['messageDaughter'],
  data: () => ({
    theCardTitle: '子组件2'
  }),
  methods: {
    messageBrother () {
      this.$emit('sisterSaid', '妈妈说，该做作业了！(^_^)!!!(妹妹说的)')
    }
  }
}

</script>

<style scoped>

</style>
