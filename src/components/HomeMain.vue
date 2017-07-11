<template>
 <div id='appHomeMain'>
      <v-container fluid>
        <v-layout row wrap>
          <v-flex xs2 
          v-for="(item, i) in items"
          :key="i">
            <v-card 
            id="home-main-categories-lg-card"
            raised
            hover>
              <v-card-row>
                <img id='home-main-categories-lg-image' :src="item.image">
              </v-card-row>

            </v-card>
          </v-flex>
    	</v-layout>	
      </v-container>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { image: '../static/kitchen-dining.svg' },
          { image: '../static/sports-outdoors.svg' },
          { image: '../static/home-living.svg' },
          { image: '../static/kids-baby.svg' },
          { image: '../static/tech-electronics.svg' },
          { image: '../static/art-paint.svg' }
        ]
      }
    }
  }
</script>

<style lang="stylus">
  @import '../stylus/main'
  #home-main-card-lg {
    height:125px !important;
  }
  #appHomeMain {
    background: #fafafa;
  }
  #home-main-categories-lg-name {
    padding-left: 10px;
  }
  #home-main-categories-lg-card {
    margin-top: 80px;
  }
 
</style>
