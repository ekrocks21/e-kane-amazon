<template>
 <main id='appHomeMain'>
      <v-container fluid>
           <appGiver></appGiver>
           <appHomeFeaturedProducts class="hidden-sm-and-down"></appHomeFeaturedProducts>
      </v-container>
    </main>
</template>

<script>
  import Giver from './Giver.vue'
  import HomeFeaturedProducts from './HomeFeaturedProducts.vue'
  export default {
    components: {
      appGiver: Giver,
      appHomeFeaturedProducts: HomeFeaturedProducts
    }
  }
</script>
