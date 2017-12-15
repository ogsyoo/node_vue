<template>
    <div>
        first:{{msg}}  {{this.$route.params.name}}
        {{$store.state.count}}
        <button id='btn' @click="kua()">跨域</button>
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
    kua:function() {
      $.getJSON("http://localhost:8088/gsy?id=0&callback=?", function(
        json
      ) {
        console.log(json);
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
