<template>
  <div>
    <factsfeed></factsfeed>
  </div>
</template>

<script>
  import { QBtn } from 'quasar'
  import Vue from 'vue'
  export default {
    components: { QBtn, Vue },
    name: 'home',
    props: ['auth', 'authenticated']
  }
</script>

<style>
  a {
    cursor: pointer;
  }
</style>
