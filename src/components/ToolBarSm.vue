<template>
  <v-app>
    <v-navigation-drawer 
      primary
      persistent
      :mini-variant="mini"
      v-model="drawer"
      clipped
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile value="true">
            <v-list-tile-action>
              <v-icon light v-html="item.icon"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="item.title"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed style='background-color: #ffffff'>
      <v-toolbar-side-icon id='hamburger' @click.native.stop="drawer = !drawer" dark></v-toolbar-side-icon>
      
      <v-toolbar-title id='logo' v-text="title"></v-toolbar-title>

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
          { icon: 'whatshot', title: 'Featured' },
          { icon: 'explore', title: 'Explore' }
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
  .toolbar .input-group--dark .icon {
    color: #607D8B !important;
  }
  .navigation-drawer--dark {
    background: #2979FF !important;
  }

  .navigation-drawer > .list .list__tile--active > *:first-child .icon {
    color: #ffffff !important;
  }
  #start-earning-btn-sm {
    background-color: #10B6A0 !important;
  }
</style>
