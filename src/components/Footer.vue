<template>
	<v-footer id="footer-lg">
	  <span id="footer-links-lg"><router-link to="about">About</router-link></span>	
      <span id="footer-links-lg"><router-link to="influencers">For Influencers</router-link></span>
      <span id="footer-links-lg"><router-link to="partners">Partners</router-link></span>
      <span id="footer-links-lg"><router-link to="terms">Terms</router-link></span> 
      <span id="footer-links-lg"><router-link to="howitworks">How it Works</router-link></span> 
      <span id="footer-links-lg-last">&copy; 2017 Barrel On</span>
	</v-footer>
</template>

<style lang="stylus">
  @import '../stylus/main'
  #footer-lg {
  height: 120px;
  background-color: #1c313a !important;
  }
  #footer-links-lg {
  	padding: 30px;
  	color: #bec6ca;
  	font-family: 'Roboto Mono', monospace;
  	text-transform: uppercase;
  	font-weight: 400;
  	text-decoration: none;
  }
  #footer-links-lg-last {
  	padding: 30px;
  	text-align: right;
  	color: #bec6ca;
  	font-family: 'Roboto Mono', monospace;
  }

  a {
    color:#bec6ca !important;
    text-decoration: none;
  }

  a:hover {
    color: #ffffff !important;
  }
</style>
