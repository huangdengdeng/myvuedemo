<template>
  <div>
    <h1>vue-router懒加载</h1>
    <h2>new doc</h2>
    <div class="form_title_div" style="float: left;">
      <span>注册信息</span>
    </div>
    <div class="form_title_div_2" style="float: left;">
      <span>注册信息</span>
    </div>
    <baidu-map class="map" :center="center" :zoom="zoom" @ready="handler">
    </baidu-map>
  </div>
</template>

<script>
export default {
  name: 'New.vue',
  data () {
    return {
      center: {lng: 0, lat: 0},
      zoom: 3
    }
  },
  methods: {
    handler ({BMap, map}) {
      console.log(BMap, map)
      this.center.lng = 116.404
      this.center.lat = 39.915
      this.zoom = 15
    }
  }
}
</script>

<style scoped>
  .map {
    width: 100%;
    height: 300px;
  }
  .form_title_div{
     width:100px;
     font-size: 18px;
     border-right: 23px solid transparent;
     border-bottom: 23px solid #3DAEE9;
     border-bottom-color: #3DAEE9;
     border-top-left-radius: 5px;
     -webkit-border-left-radius: 5px;
    ttransform: rotate(90deg);
    -ms-transform: rotate(30deg); /* IE 9 */

    -moz-transform: rotate(30deg); /* Firefox */

    -webkit-transform: rotate(180deg); /* Safari and Chrome */
   }
  .form_title_div_2{
    width:100px;
    font-size: 18px;
    border-left: 23px solid transparent;
    border-top: 23px solid #3DAEE6;
    border-bottom-color: #3DAEE6;
    border-top-left-radius: 5px;
    -webkit-border-left-radius: 5px;
  }
  .form_title_div span
  {
    display: block; margin-bottom: -130px; margin-left: 15px; color: #ffffff;
    -webkit-transform: rotate(-180deg); /* Safari and Chrome */
  }
  .form_title_div_2 span{
    display: block; margin-top: -130px; margin-left: 15px; color: #ffffff;
  }
  h1 {
    color: red;
  }
</style>
