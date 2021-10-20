<template>
  <div class="home">
    <header>fsds</header>
    <body></body>
    <footer>footer</footer>
  </div>
</template>

<script>
import {test_weather} from "@/api/test";

export default {
  name: 'Home',
  data() {
    return{

    }
  },
  created() {
    this.onTest()
  },
  mounted() {
    window.onscroll = function () {
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      console.log("滚动距离" + scrollTop);
    }
  },
  methods: {
    async onTest(){
      const {data} = await test_weather({subject: 1, model: 'css1', key: '30c7c759c4060a0dee8f69f8b9847571'})
      console.log(data)
      console.log('1')
    }
  }
}
</script>
<style lang="scss">
.home{
  width: 100vw;
  height: 100vh;
  background: #42b983;
  header{
    background: rgba(0,0,0,0.5);
    height: 10vh;
    @include center;
    color: $primary;
  }
  body{
    height: 180vh;
  }
  footer{
    background: rgba(0,0,0,0.5);
    height: 10vh;
    @include center;
    color: $primary;
  }
}
</style>
