<template>
 <main id='appHomeMain'>
      <v-container fluid>
        <v-layout id="home-featured-products-layout-lg" row wrap>
          <v-flex xs3
          v-for="(item, i) in items"
          :key="i">
            <v-card 
            id="home-featured-products-lg-card"
            raised
            hover>

              <v-card-row>
              <img id='home-featured-products-lg-image' :src="item.image">
              </v-card-row>
              <v-card-row id="home-featured-products-lg-name-row">
                <v-card-text id="home-featured-products-lg-name" v-text="item.name"></v-card-text>
              </v-card-row>
              <v-card-row>
              <v-card-text id="home-featured-products-lg-price" v-text="item.price"></v-card-text>
              <a v-bind:href="items.url"><v-btn id="launch-product-btn" dark flat><i class="material-icons" id="product-launch-icon">launch</i></v-btn></a>
              </v-card-row>
            </v-card>
          </v-flex>
      </v-layout> 
      </v-container>
    </main>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { image: '../static/google-home.png', name: 'Google Home', price: '$99.99', url: 'http://www.amazon.com' },
          { image: '../static/google-home.png', name: 'Google Home', price: '$99.99' },
          { image: '../static/google-home.png', name: 'Google Home', price: '$99.99' },
          { image: '../static/google-home.png', name: 'Google Home', price: '$99.99' },
          { image: '../static/google-home.png', name: 'Google Home', price: '$99.99' },
          { image: '../static/google-home.png', name: 'Google Home', price: '$99.99' },
          { image: '../static/google-home.png', name: 'Google Home', price: '$99.99' },
          { image: '../static/google-home.png', name: 'Google Home', price: '$99.99' },
          { image: '../static/google-home.png', name: 'Google Home', price: '$99.99' },
          { image: '../static/google-home.png', name: 'Google Home', price: '$99.99' },
          { image: '../static/google-home.png', name: 'Google Home', price: '$99.99' },
          { image: '../static/google-home.png', name: 'Google Home', price: '$99.99' },
          { image: '../static/google-home.png', name: 'Google Home', price: '$99.99' },
          { image: '../static/google-home.png', name: 'Google Home', price: '$99.99' },
          { image: '../static/google-home.png', name: 'Google Home', price: '$99.99' },
          { image: '../static/google-home.png', name: 'Google Home', price: '$99.99' }
        ]
      }
    }
  }
</script>



<style lang="stylus">
  @import '../stylus/main'
  #appHomeMain {
    background: #fafafa;
  }
  #home-featured-products-lg-image {
    margin: 0 auto;
    background-size: cover;
    width: 100%;
  }
 #home-featured-products-lg-card {
  padding: 0px;
  margin-top: 80px;
  margin-bottom: 0px;
 }
 #verified-icon {
 color: #2979FF !important;
 padding-right: 0px;
}
#home-featured-products-lg-name-row {
  justify-content: left;
  height: 10px !important;
}
#home-featured-products-lg-name {
  text-align: left;
}
#home-featured-products-lg-title {
  color: #607D8B;
}
#home-featured-products-lg-social-row {
  height:10px;
}
#home-featured-products-lg-price {
  color: #607D8B;
  text-align: left;
  padding-top: 5px;
}
#launch-product-btn {
  min-width: 40px !important;
}
#product-launch-icon {
  color: #10b6a0 !important;
}
</style>
