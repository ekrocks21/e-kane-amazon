<template>
 <main id='appHomeMain'>
      <v-container fluid>
        <v-layout id="home-featured-products-layout-sm" row wrap>
          <v-flex xs12
          v-for="(item, i) in items"
          :key="i">
            <v-card 
            id="home-featured-giver-sm-card"
            raised
            hover><a id="launch-featured-giver-url" v-bind:href="item.url">
              <v-card-row>
                <v-icon id="verified-icon" v-html="item.icon"></v-icon>
                <div>
                  <v-card-text id="home-featured-giver-sm-title" v-text="item.title"></v-card-text>

                </div>  
              </v-card-row>
              <v-card-row>
              <img id='home-featured-giver-sm-image' :src="item.image">
              </v-card-row>
              <v-card-row id="home-featured-giver-sm-name-row">
                <v-card-text id="home-featured-giver-sm-name" v-text="item.name"></v-card-text>
              </v-card-row>
              <v-card-row id="home-featured-giver-sm-social-row">
                <v-card-text id="home-featured-giver-sm-social" v-text="item.social"></v-card-text>
              </v-card-row>  
            </a></v-card>
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
          { image: '../static/featured-giver-monica.png', title: 'Featured Giver ', name: 'Monica Style Muse', icon: 'verified_user', social: '@monica', url: '#/monica' },
          { image: '../static/featured-giver-taylor.png', title: 'Featured Giver ', name: 'Taylor Mason', icon: 'verified_user', social: '@taylor' },
          { image: '../static/featured-giver-eric.png', title: 'Featured Giver ', name: 'Eric Kane', icon: 'verified_user', social: '@kane' }
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
  #home-featured-giver-sm-image {
    margin: 0 auto;
    background-size: contain;
    width: 100px;
  }
 #home-featured-giver-sm-card {
  padding: 10px;
  margin-top: 80px;
  margin-bottom: 0px;
 }
 #verified-icon {
 color: #2979FF !important;
 padding-right: 0px;
}
#home-featured-giver-sm-name-row {
  justify-content: center;
  height: 10px !important;

}
#home-featured-giver-sm-name {
  margin-top: 15px;
  text-align: center;
  color: #212121 !important;
}
#home-featured-giver-sm-title {
  color: #607D8B !important;
}
#home-featured-giver-sm-social-row {
  height:10px;
}
#home-featured-giver-sm-social {
  color: #607D8B;
  text-align: center;
  padding-top: 5px;
  font-size: 11px;
}

#launch-featured-giver-url {
  text-decoration: none;
}
</style>
