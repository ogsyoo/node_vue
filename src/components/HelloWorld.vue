<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <button @click="clock()">点击</button>
    <button @click="redirect()">跳转</button>
    <router-link :to="{name: 'First', params: {name: 'name'}}">跳转</router-link>
</router-link>
  </div>
</template>

<script>
import $ from "jquery";
import Vue from "vue";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    clock: function() {
      $.ajax({
        url: "/api/gsy",
        success: function(data) {
          console.log(data);
        }
      });
    },
    redirect() {
      this.$router.push({
        name: "First",
        params: {
          name: "name"
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
