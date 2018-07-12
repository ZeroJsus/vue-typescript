<template lang="pug">
  div(id="app")
    img(src="./assets/logo.png" v-if="!show")
    - var showname = '张三'
    p(class=showname) #{showname}么?
    - var friends = 10
    case friends
      when 0
        p 这是0
      when 1
        p 这是1
      default 
        p 这是default内容
    - for(var x = 0; x < 3; x++)
      li item#{x}
    p= '这是一段被转义的代码<张三>》'
    p!= '这是一段没有被转义的代码<张三>》'
    ul
      each val in [1, 2, 3, 4, 5]
        li(class="张三")= val
    router-view
</template>

<script lang="ts">
export default {
  name: 'App',
  data () {
    return {
      show: false
    }
  },
  mounted(): void{

  }
}
</script>

<style lang="stylus">
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
</style>
