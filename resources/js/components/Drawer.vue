<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-primary">
        <span class="md-title"></span>
      </md-app-toolbar>

      <md-app-drawer md-permanent="full">
        <md-toolbar class="md-transparent" md-elevation="0">
          <img v-bind:src="require('../logo/logo.jpg')" />
        </md-toolbar>

        <md-list>
          <v-link class="md-list-item-text" href="/">
            <md-list-item>
              <md-button>
                Page 1
              </md-button> 
            </md-list-item>
          </v-link>

          <v-link class="md-list-item-text" href="/page2">
            <md-list-item>
              <md-button>
                Page 2
              </md-button>
            </md-list-item>
          </v-link>

          <v-link class="md-list-item-text" href="/page3">
            <md-list-item>
              <md-button>
                Page 3
              </md-button>
            </md-list-item>
          </v-link>
        </md-list>
      </md-app-drawer>
      
      <md-app-content>
        <slot></slot>  
      </md-app-content>
    </md-app>
  </div>
</template>

<style lang="scss" scoped>
  .md-app {
    max-height: 400px;
    border: 1px solid rgba(#000, .12);
  }

  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>

<script>
import VLink from '../components/VLink'

export default {
  name: 'Waterfall',
  components: {
    VLink
  }
}
</script>