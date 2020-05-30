<!--Author:YangQi-->
<template>
  <div class="index">
    <header-top />
    <router-view></router-view>
    <footer-data :data='tabbarData'/>
  </div>
</template>

<script>
import Footerdata from "./layout/footer.vue";
import HeaderTop from "./layout/HeaderTop.vue";
export default {
  components: {
    "footer-data": Footerdata,
    "header-top": HeaderTop
  },
  data() {
    return {
      tabbarData: [
        { title: "首页", icon: "home", path: "/home" },
        { title: "项目", icon: "compass", path: "/dstance" },
        { title: "发布", icon: "file-text-o", path: "/order" },
        // { title: "消息", icon: "user", path: "/message" },
        // { title: "我的", icon: "user", path: "/mine" }
      ]
    };
  },
  computed: {},
  watch: {},
  created() {},
  methods: {}
};
</script>
<style lang='less' scoped>
</style>