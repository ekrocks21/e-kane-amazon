<template>
 <main id='appHomeMain'>
      <v-container fluid>
        <v-layout id="giver-layout-lg" row wrap>
          <v-flex xs12
          v-for="(item, i) in items"
          :key="i">
            <v-card 
            id="giver-lg-card"
            raised>
              <v-card-row>
              <img id='giver-lg-image' :src="item.image">
              </v-card-row>
              <v-card-row id="giver-lg-name-row">
                <v-card-text id="giver-lg-name" v-text="item.name">
                </v-card-text>
              </v-card-row>
              <v-card-row id="giver-lg-social-row">
                <v-card-text id="giver-lg-social" v-text="item.social"></v-card-text>
              </v-card-row> 
              <v-card-row id="giver-lg-share-row"> 
              <v-card-text id="home-featured-products-lg-price" v-text="item.charity"></v-card-text>
              <v-btn id="share-giver-shop" dark flat outline small><i id="share-icon" class="material-icons">share</i>Share</v-btn>
              <v-btn id="follow-giver-shop" dark flat outline small><i id="follow-icon" class="material-icons">add</i>Follow</v-btn>
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
          { cover: '../static/google-home.png', image: '../static/featured-giver-monica.png', title: 'Featured Giver ', name: 'Monica Style Muse', icon: 'verified_user', social: '@monica', charity: 'I support The Young & Brave Foundation' }
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
  #giver-lg-image {
    margin: 0 auto;
    background-size: contain;
    width: 100px;
  }
 #giver-lg-card {
  padding: 10px;
  margin-top: 80px;
  margin-bottom: 0px;
 }
 #verified-icon {
 color: #2979FF !important;
 padding-right: 0px;
}
#giver-lg-name-row {
  justify-content: center;
  height: 10px !important;
}
#giver-lg-name {
  margin-top: 15px;
  text-align: center;
  color: #607D8B !important;
}
#giver-lg-title {
  color: #607D8B !important;
}
#giver-lg-social-row {
  height:10px;
}
#giver-lg-social {
  color: #607D8B;
  text-align: center;
  padding-top: 5px;
}
#share-icon {
  font-size: 13px;
  padding-right: 5px;
}
#follow-icon {
  font-size: 13px;
  padding-right: 5px;
}
#share-giver-shop {
  color: #607D8B;
}
#follow-giver-shop {
  color: #2979ff;
}

</style>
