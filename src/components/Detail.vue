<template>
  <div class="mdl-grid">
     <div class="mdl-cell mdl-cell--8-col">
      <div class="picture">
        <img :src="this.cat.url" />
      </div>
    </div>
    <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
      <div class="title">
        <span>{{ this.cat.title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cat: this.$root.cat.find(c => c['.key'] === this.$route.params.id)
    }
  }
}
</script>

<style scoped>
.picture > img {
  color: #fff;
  width: 100%;
}

.title {
  padding: 10px;
  color: #555;
}
</style>
