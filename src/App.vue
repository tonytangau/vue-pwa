<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title logo">
          <router-link to="/">VueCat</router-link>
        </span>
      </div>
    </header>
    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">VueCat</span>
      <nav class="mdl-navigation">
        <router-link class="mdl-navigation__link" to="/" @click.native="toggleDrawer">Home</router-link>
        <router-link class="mdl-navigation__link" to="/post" @click.native="toggleDrawer">Post new</router-link>
      </nav>
    </div>
    <main class="mdl-layout__content">
      <div class="page-content">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
require('material-design-lite')

export default {
  name: 'app',
  methods: {
    toggleDrawer: function () {
      var d = document.querySelector('.mdl-layout')
      d.MaterialLayout.toggleDrawer()
    }
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import url('../node_modules/material-design-lite/dist/material.blue-red.min.css');

body {
  margin: 0;
}

.logo {
  margin-top: 5px;
}

.logo a {
  color: inherit;
  text-decoration: none;
}
</style>
