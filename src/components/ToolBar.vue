<template>
  <v-app>
    <v-toolbar fixed style='background-color: #ffffff'>
      <v-toolbar-title id='logo'><router-link to='/'
      style="font-family: 'Product Sans';
      color: #607D8B !important;"
      >Barrel On</router-link></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field id="searchbar" prepend-icon="search" label="Search..." hide-details single-line></v-text-field>
      <v-list-tile-action>
        <v-dialog v-model="dialog">
          <v-btn id="start-earning-btn-lg" slot="activator" flat light>Start Earning</v-btn>
            <v-card id="start-earning-lg-new-user-card">
              <v-card-row>
                <v-card-title id="start-earning-lg-new-user-card-title">Welcome to Barrel On</v-card-title>
              </v-card-row>
              <v-card-row>
                <v-card-text>
                  <v-text-field 
                  label="email" 
                  required
                  v-model.lazy='userData.email'>
                
                  </v-text-field>
                  <v-text-field 
                  label="Password" 
                  type="password" 
                  required
                  v-model.lazy='userData.password'>
                
                    
                  </v-text-field>
                </v-card-text>
              </v-card-row>
              <v-card-row actions>
                <v-btn class="blue--text darken-1" flat @click.native="dialog = false">Close</v-btn>
                <v-btn class="blue--text darken-1" flat @click.native="dialog = false">Save</v-btn>
              </v-card-row>
            </v-card>
        </v-dialog>  
      </v-list-tile-action>

      <v-list-tile-action>
          <v-btn dark flat >Sign In / Sign Up</v-btn>
            
      </v-list-tile-action>
    </v-toolbar>
    
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        userData: {
          email: '',
          password: ''
        },
        dialog: false
      }
    }
  }
</script>

<style lang="stylus">
  @import '../stylus/main'
  #logo {
    font-family: 'Product Sans';
    color: #607D8B;
  }
  .toolbar .input-group--dark .icon {
    color: #607D8B !important;
  }
  #start-earning-btn-lg {
    background-color: #10B6A0 !important;
  }
  #start-earning-lg-new-user-card {

  }
  #start-earning-lg-new-user-card-title {
    font-family: 'Product Sans';
  }

</style>
