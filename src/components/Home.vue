<template>
  <v-app>
   <appHomeBanner class="hidden-sm-and-down"></appHomeBanner>
   <appHomeBannerSm class="hidden-md-and-up"></appHomeBannerSm>
   <appHomeMain class="hidden-sm-and-down"></appHomeMain>
   <appHomeMainSm class="hidden-md-and-up"></appHomeMainSm>
   <appHomeFeaturedGiver class="hidden-sm-and-down"></appHomeFeaturedGiver>
   <appHomeFeaturedGiverSm class="hidden-md-and-up"></appHomeFeaturedGiverSm>
   <appHomeFeaturedProducts class="hidden-sm-and-down"></appHomeFeaturedProducts>
   <appHomeFeaturedProductsSm class="hidden-md-and-up"></appHomeFeaturedProductsSm>
  </v-app>
</template>

<script>
  import HomeBanner from './HomeBanner.vue'
  import HomeBannerSm from './HomeBannerSm.vue'
  import HomeMain from './HomeMain.vue'
  import HomeMainSm from './HomeMainSm.vue'
  import HomeFeaturedGiver from './HomeFeaturedGiver.vue'
  import HomeFeaturedGiverSm from './HomeFeaturedGiverSm.vue'
  import HomeFeaturedProducts from './HomeFeaturedProducts.vue'
  import HomeFeaturedProductsSm from './HomeFeaturedProductsSm.vue'
  export default {
    components: {
      appHomeBanner: HomeBanner,
      appHomeBannerSm: HomeBannerSm,
      appHomeMain: HomeMain,
      appHomeMainSm: HomeMainSm,
      appHomeFeaturedGiver: HomeFeaturedGiver,
      appHomeFeaturedGiverSm: HomeFeaturedGiverSm,
      appHomeFeaturedProducts: HomeFeaturedProducts,
      appHomeFeaturedProductsSm: HomeFeaturedProductsSm
    }
  }
</script>

<style lang="stylus">
  @import '../stylus/main'
</style>
