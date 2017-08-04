<template>
  <v-app>
   <appHomeBanner class="hidden-sm-and-down"></appHomeBanner>
   <appHomeBannerSm class="hidden-md-and-up"></appHomeBannerSm>
   <appHomeMain class="hidden-sm-and-down"></appHomeMain>
   <appHomeFeaturedGiver class="hidden-sm-and-down"></appHomeFeaturedGiver>
   <appHomeFeaturedProducts class="hidden-sm-and-down"></appHomeFeaturedProducts>
  </v-app>
</template>

<script>
  import HomeBanner from './HomeBanner.vue'
  import HomeBannerSm from './HomeBannerSm.vue'
  import HomeMain from './HomeMain.vue'
  import HomeFeaturedGiver from './HomeFeaturedGiver.vue'
  import HomeFeaturedProducts from './HomeFeaturedProducts.vue'
  export default {
    components: {
      appHomeBanner: HomeBanner,
      appHomeBannerSm: HomeBannerSm,
      appHomeMain: HomeMain,
      appHomeFeaturedGiver: HomeFeaturedGiver,
      appHomeFeaturedProducts: HomeFeaturedProducts
    }
  }
</script>

<style lang="stylus">
  @import '../stylus/main'
</style>
