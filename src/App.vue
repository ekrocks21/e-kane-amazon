<template>
  <v-app>
   <appToolBar class="hidden-sm-and-down"></appToolBar>
   <appToolBarSm class="hidden-md-and-up"></appToolBarSm>
    <router-view></router-view>
   <appFooter class="hidden-sm-and-down"></appFooter> 
   <appFooterSm class="hidden-md-and-up"></appFooterSm> 
  </v-app>
</template>


<script>
  import ToolBar from './components/ToolBar.vue'
  import ToolBarSm from './components/ToolBarSm.vue'
  import Footer from './components/Footer.vue'
  import FooterSm from './components/FooterSm.vue'
  export default {
    components: {
      appToolBar: ToolBar,
      appToolBarSm: ToolBarSm,
      appFooter: Footer,
      appFooterSm: FooterSm
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
