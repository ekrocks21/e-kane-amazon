<template>
     <v-container fluid id="about-container">
      <h1 id="about-title"> Welcome to Barrel On</h1>
        <div id="about-write-up-container" class="container">
         <p id="about-write-up"> Barrel On is community to discover and promote products while supporting impactful charity organizations</p>
         <p id="about-write-up"> Our mission is to make online shopping impactful.</p>
        </div>

        <div id="about-write-up-container" class="container">
         <p id="about-write-up"> Barrel On is made with love in Hoboken, NJ &amp; New York City.</p>
        </div>

     </v-container>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  @import '../stylus/main'
  #about-container {
    background-color: #fafafa;
    min-height: 600px;
  }
  #about-title {
    color: #607D8B;
    font-size: 3.0em;
    text-align: center;
    margin-top: 10%;
    margin-bottom: 0%;
  }
  #about-write-up-container {
    width: 50%;
  }
  #about-write-up {
    font-family: 'Roboto';
    font-weight: 300;
    color: #607D8B;
    font-size: 1.5em;
    text-align: center;
    margin-top: 0%;
    margin-bottom: 5%;
  }

</style>
