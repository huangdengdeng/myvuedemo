<template>
  <div>1312</div>
</template>

<script>
const testArr = [
  () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(1);
        // alert(1);
        resolve();
      }, 1000);
    });
  },
  () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // alert(2);
        console.log(2);
        resolve();
      }, 1000);
    });
  },
  () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // alert(3);
        console.log(3);
        resolve();
      }, 1000);
    });
  }
];
export default {
  name: "index",
  mounted() {
    this.iterate(testArr);
  },
  methods: {
    async iterate(arr) {
      let index = 0;
      while (index < arr.length - 1) {
        await arr[index]();
        index += 1;
      }
      return arr[index]();
    }
  }
};
</script>

<style scoped>
</style>
