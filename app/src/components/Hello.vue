<template>
  <div class="hello" style="margin:auto;">
    <div v-for="i in 10" style="overflow:hidden; width:300px; height:300px; margin:10px; display:inline-block;">
      <img src="/static/photo.jpg" style="width:auto; height:100%;">
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
