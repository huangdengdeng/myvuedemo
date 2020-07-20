
<template>
  <div>
    <div>{{foo}}</div>
  </div>
</template>
 
<script>
export default {
  name: "Grandson",
 inject: {
    foo: {
      from: 'bar',
      default: () => [1, 2, 3]
    }
  },
  data () {
    return {
      a: this.foo
    }
  },
  created() {
    console.log(this.foo); // => "bar"
  }
};
</script>