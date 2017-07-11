<template>
      <v-container fluid>
        <v-layout id="partners-layout-lg" row wrap style="margin-left: 20%; margin-right:20%">
          <v-flex xs6
          v-for="(item, i) in items"
          :key="i">
            <v-card 
            id="partners-lg-card"
            raised
            hover>
              <v-card-row>
                  <v-icon id="partners-icon" v-html="item.icon"></v-icon>
                <div>
                  <v-card-text id="partners-lg-title" v-text="item.title"></v-card-text>
                </div>  
              </v-card-row>
              <v-card-row>
              <img id='partners-lg-image' :src="item.image">
              </v-card-row>
              <v-card-row id="partners-lg-name-row">
                <v-card-text id="partners-lg-name" v-text="item.name"></v-card-text>
              </v-card-row>
            </v-card>
          </v-flex>
          <p id='affiliate-disclosure'> * We are a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for us to earn fees by linking to Amazon.com and affiliated sites.</p>
      </v-layout> 
      </v-container>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { image: '../static/amazon-smile.png', title: 'Hosting & Inspiration ', name: '* Amazon Smile', icon: 'cloud', social: '@erictkane' },
          { image: '../static/google-material.png', title: 'Design & Code', name: 'Google Material Design', icon: 'code' }
        ]
      }
    }
  }
</script>

<style lang="stylus">
  @import '../stylus/main'
  #partners-card-lg {
    height:125px !important;
  }
  #appPartnersMain {
    background: #fafafa;
  }
  #partners-lg-image {
    margin: 0 auto;
    background-size: contain;
    width: 100px;
  }
 #partners-lg-card {
  padding: 10px;
  margin-top: 50%;
  margin-bottom: 30%;
 }
 #partners-icon {
 color: #D32F2F !important;
 padding-right: 0px;
}
#apartners-lg-name-row {
  justify-content: center;
  height: 10px !important;
}
#partners-lg-name {
  margin-top: 15px;
  text-align: center;
}
#partners-lg-title {
  color: #607D8B;
}
#partners-lg-social-row {
  height:10px;
}
#partners-lg-social {
  color: #607D8B;
  text-align: center;
  padding-top: 5px;
}
#affiliate-disclosure {
  font-size: 10px;
  color: #607D8B;
  padding-left: 20px;
}
</style>
