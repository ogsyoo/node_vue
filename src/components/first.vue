<template>
    <div>
        first:{{msg}}  {{this.$route.params.name}}
        store:{{$store.test.state}}
        <button id='btn' @click="kua()">跨域</button>
        <button id='btn' @click="post()">post</button>
        <button id='btn' @click="put()">put</button>
    </div>
</template>
<script>
import $ from "jquery";
import store from '../vuex/store';

export default {
  data: function() {
    return {
      msg: this.$route.params.name
    };
  },
  store,
  methods: {
    post: function() {
      this.$http.post("/post", { emulateJSON: true }).then(response => {
        console.log(response.data);
      });
      // $.getJSON("http://localhost:8088/api/gsy?id=0&callback=?", function(
      //   json
      // ) {
      //   console.log(json);
      // });
    },
    put:function(){
        this.$http.put("/post", { emulateJSON: true }).then(response => {
        console.log(response.data);
      });
    }
  },
  watch: {},
  mounted() {
    console.log("mounted  params :", this.$route.params);
    // $.ajax({
    //   url: "http://localhost:8088/gsy",
    //   dataType: "jsonp",
    //   jsonpCallback: "cb",
    //   success: function(data) {
    //     console.log(data);
    //   }
    // });
    // $.getJSON("http://localhost:8088/gsy?jsoncallback=?", function(json) {});
  }
};
</script>
