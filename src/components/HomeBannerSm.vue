<template>
 <main id='appMain-sm'>
          <v-layout column align-center>
          <div id="background-gradient">

            <img id="home-banner-sm-logo" src='../assets/homeimagesm.svg'/>
            <h1 id="home-banner-sm-slogan">Shop everywhere <br> and give back anywhere
    			 </h1>
           <h2 id="home-banner-sm-slogan-2">Simple shopping, fast delivery, huge impact
           </h2>
          </div> 
    	</v-layout>	
    </main>
</template>

<style lang="stylus">
  @import '../stylus/main'
  #home-banner-image-sm {
  	margin-top: 5%;
  	margin-bottom: 5%;
  }
  #appMain-sm{
  	background: #fafafa;
  }
  #background-gradient {
    background-image: linear-gradient(0deg, #6F79A8 0%, #9FA8DA 30%, #FFFFFF 99%);
    width: 100%;
    height: 400px;
  }
  #home-banner-sm-logo {
    height: 230px;
    float: right;
    margin-right: 10%
    margin-top: 50px;
  }
  #home-banner-sm-slogan {
    font-family: 'Product Sans';
    font-size: 1.8em;
    color: #ffffff;
    z-index: 1;
    margin-top: 280px;
    margin-left: 30px;
  }
  #home-banner-sm-slogan-2 {
    font-family: 'Product Sans';
    font-size: 1.1em;
    color: #ffffff;
    z-index: 1;
    margin-left: 30px;
  }
</style>
