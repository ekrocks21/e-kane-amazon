<template>
  <v-app>
   <appToolBar class="hidden-sm-and-down"></appToolBar>
    <router-view></router-view>
   <appFooter class="hidden-sm-and-down"></appFooter> 
  </v-app>
</template>


<script>
  import ToolBar from './components/ToolBar.vue'
  import ToolBarSm from './components/ToolBarSm.vue'
  import Footer from './components/Footer.vue'
  export default {
    components: {
      appToolBar: ToolBar,
      appToolBarSm: ToolBarSm,
      appFooter: Footer
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
