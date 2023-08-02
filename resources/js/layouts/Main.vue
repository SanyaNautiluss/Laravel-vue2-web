<template>
    <div class="container">
      <ul>
        <li>
          <v-link href="/">Page 1</v-link>
          <v-link href="/page2">Page 2</v-link>
          <v-link href="/page3">Page 3</v-link>
        </li>
      </ul>
  
      <slot></slot>
    </div>
  </template>
  
  <script>
    import VLink from '../components/VLink'

    export default {
      components: {
        VLink
      }
    }
  </script>
  
  <style scoped>
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 15px 30px;
      background: #f9f7f5;
    }
  </style>