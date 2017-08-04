<template>
  <v-app>
    <v-navigation-drawer 
      primary
      persistent
      :mini-variant="mini"
      v-model="drawer"

    >
    <v-divider style="height: 56px; background-color: #dcdcdc">
      </v-divider>
    <v-list-tile value="true">
      <v-list-tile-content>
              <v-list-tile-title> Barrel On</v-list-tile-title>
            </v-list-tile-content>
    </v-list-tile>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile value="true">
            <v-list-tile-action>
              <v-icon id="nav-drawer-icon" light v-html="item.icon"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title id="nav-drawer-title" v-text="item.title"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-item>
      </v-list>
      <v-divider style="height: 200px">
      </v-divider>
        <v-list-tile value="true">
            <v-list-tile-action>
              <i id="nav-drawer-icon" class="material-icons">settings</i>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title id="nav-drawer-title">Settings</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile value="true">
            <v-list-tile-action>
              <i id="nav-drawer-icon" class="material-icons">info_outline</i>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title id="nav-drawer-title">About</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

    </v-navigation-drawer>
    <v-toolbar fixed style='background-color: #ffffff'>
      <v-toolbar-side-icon id='hamburger' @click.native.stop="drawer = !drawer" dark></v-toolbar-side-icon>
        
      <v-toolbar-title id='logo'><router-link to='/'
      style="font-family: 'Product Sans';
      color: #607D8B !important;"
      >Barrel On</router-link></v-toolbar-title>

      <v-list-tile-action><v-btn id="start-earning-btn-sm" light flat>Start Earning</v-btn></v-list-tile-action>
    </v-toolbar>
    
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer: null,
        fixed: false,
        items: [
          { icon: 'home', title: 'Home' },
          { icon: 'store', title: 'Featured Shops' },
          { icon: 'list', title: 'Shopping list' },
          { icon: 'shopping_basket', title: 'Quick reorder' },
          { icon: 'restore', title: 'Orders' }
        ],
        title: 'Barrel On',
        mini: false,
        clipped: true
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
  #hamburger {
    color:#607D8B;
  }
  .navigation-drawer--dark {
    background: #fafafa !important;
  }
  #nav-drawer-icon {
    color: #212121 !important;
    font-size: 18px;
  }
  #nav-drawer-title{
    color: #212121 !important;
    font-size: 11px;
  }

  #start-earning-btn-sm {
    background-color: #10B6A0 !important;
  }
</style>
