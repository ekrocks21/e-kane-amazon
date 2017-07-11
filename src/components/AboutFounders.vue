<template>
      <v-container fluid>
        <h4 id="team-title"> Meet the team </h4>
        <v-layout id="about-founders-layout-lg" row wrap style="margin-left: 20%; margin-right:20%">
          <v-flex xs6
          v-for="(item, i) in items"
          :key="i">
            <v-card 
            id="about-founders-lg-card"
            raised
            hover>
              <v-card-row>
                  <v-icon id="founders-icon" v-html="item.icon"></v-icon>
                <div>
                  <v-card-text id="home-featured-giver-lg-title" v-text="item.title"></v-card-text>
                </div>  
              </v-card-row>
              <v-card-row>
              <img id='about-founders-lg-image' :src="item.image">
              </v-card-row>
              <v-card-row id="about-founders-lg-name-row">
                <v-card-text id="about-founders-lg-name" v-text="item.name"></v-card-text>
              </v-card-row>
              <v-card-row id="about-founders-lg-social-row">
                <v-card-text id="about-founders-lg-social" v-text="item.social"></v-card-text>
              </v-card-row>  
            </v-card>
          </v-flex>
    	</v-layout>	
      </v-container>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { image: '../static/featured-giver-eric.png', title: 'Founder & CEO ', name: 'Eric Kane', icon: 'build', social: '@erictkane' },
          { image: '../static/featured-giver-taylor.png', title: 'Founder & CTO', name: 'Taylor Mason', icon: 'code', social: '@taylor' },
          { image: '../static/founder-elizabeth.png', title: 'People Lead', name: 'Elizabeth Bryndza', icon: 'directions_walk', social: '@lizard' },
          { image: '../static/featured-giver-monica.png', title: 'Influencer in Residence', name: 'Monica Stylemuse', icon: 'verified_user', social: '@monicastylemuse' }
        ]
      }
    }
  }
</script>

<style lang="stylus">
  @import '../stylus/main'
  #about-founders-card-lg {
    height:125px !important;
  }
  #appAboutFoundersMain {
    background: #fafafa;
  }
  #team-title {
    text-align: center;
    color: #607D8B;
    font-weight: 300;
    font-size: 2.7em;
    margin-bottom: 40px;
  }
  #about-founders-lg-image {
    margin: 0 auto;
    background-size: contain;
    width: 100px;
  }
 #about-founders-lg-card {
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 80px;
 }
 #founders-icon {
 color: #D32F2F !important;
 padding-right: 0px;
}
#about-founders-lg-name-row {
  justify-content: center;
  height: 10px !important;
}
#about-founders-lg-name {
  margin-top: 15px;
  text-align: center;
}
#about-founders-lg-title {
  color: #607D8B;
}
#about-founders-lg-social-row {
  height:10px;
}
#about-founders-lg-social {
  color: #607D8B;
  text-align: center;
  padding-top: 5px;
}
</style>
