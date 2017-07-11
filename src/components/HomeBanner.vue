<template>
 <main id='appMain'>
      <v-container fluid>
          <v-layout column align-center>
          <div class="hidden-xs-only">
            <h1 id='slogan'>
              Shop everywhere give back anywhere
            </h1>
          </div>  

    			     <img class="hidden-sm-and-down" src="../assets/homeimage.svg" width="800px"/>
        <router-link to="howitworks">  <v-btn id='learn-more-lg' light raised>Learn More</v-btn></router-link>
              

    	</v-layout>	
      </v-container>
    </main>
</template>


<style lang="stylus">
  @import '../stylus/main'
  #slogan {
  	color: #607D8B;
  	font-size: 3.0em;
  	text-align: center;
  	margin-top: 20%;
  	margin-bottom: 5%;
  }
  #appMain{
  	background: #fafafa;
  }
  #learn-more-lg {
    margin-top: 8%;
    background-color: #2979FF;
    width: 250px;
  }
 
</style>
