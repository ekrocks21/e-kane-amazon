<template>
     <v-container fluid id="about-container">
      <v-layout column align-center>
        <div id="about-write-up-div"> 
         <h2 id="about-title"> Our Mission </h2>
        
         <p id="about-write-up"><i id="light-bulb" class="material-icons">lightbulb_outline</i> Make it really easy for <i class="material-icons">people_outline</i> to earn <i id="money-icon" class="material-icons">attach_money</i> for causes they <i id="love-icon" class="material-icons">favorite_border</i></p>
        </div> 

         <router-link to="howitworks">  <v-btn id='start-earning-about-btn-lg' light raised>Start Earning</v-btn></router-link>


  
        <appAboutFounders class="hidden-sm-and-down"></appAboutFounders>

         <div id="about-write-up-container" class="container">
         <p id="about-write-up-made"> Made with <i id="love-icon" class="material-icons">favorite_border</i> in New York City</p>

         </div>

       </v-layout> 
     </v-container>


</template>


<script>
  import AboutFounders from './AboutFounders.vue'

  export default {
    components: {
      appAboutFounders: AboutFounders
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  @import '../stylus/main'
  #about-container {
    background-color: #fafafa;
    min-height: 600px;
  }
  #about-write-up-div {
    margin-top: 5%;
  }
  #about-title {
    color: #607D8B;
    font-size: 3.0em;
    font-weight: 300;
    text-align: center;
    margin-top: 0%;
    margin-bottom: 5% !important;
  }

  #about-write-up {
    font-family: 'Roboto' !important;
    font-weight: 300;
    color: #607D8B;
    font-size: 1.5em;
    text-align: center;
    margin-top: 20%;
    margin-bottom: 5%;
  }
  #start-earning-about-btn-lg {
    background-color: #2979ff !important;
    width: 250px;
    margin-top: 10% !important;
    margin-bottom: 60%;
  }
  #about-write-up-made {
    font-family: 'Roboto';
    font-weight: 400;
    color: #607D8B;
    font-size: 1.5em;
    text-align: center;
    margin-top: 0%;
    margin-bottom: 5%;
  }
  #love-icon {
    color: #D32F2F;
  }
  #light-bulb {
    color: #fbc02d;
  }
  #money-icon {
    color: #10b6a0;
  }

</style>
