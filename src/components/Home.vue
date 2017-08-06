<template>
  <div>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--3-col mdl-cell mdl-cell--1-col-tablet mdl-cell--hide-phone"></div>
      <div class="mdl-cell mdl-cell--6-col mdl-cell--4-col-phone">
        <div v-for="picture in this.cats" :key="picture.id" class="image-card" @click="displayDetails(picture['.key'])">
          <div class="image-card__picture">
            <img :src="picture.url" />
          </div>
          <div class="image-card__title mdl-card__actions">
            <span>{{ picture.title }}</span>
          </div>
        </div>
      </div>
    </div>
    <router-link class="add-picture-button mdl-button mdl-js-button mdl-button--fab mdl-button--colored" to="/post">
      <i class="material-icons">add</i>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cats: this.getCats()
    }
  },

  methods: {
    displayDetails(id) {
      this.$router.push({ name: 'Detail', params: { id: id } })
    },
    saveToLocalStorage() {
      this.$root.$firebaseRefs.cat.once('value', (data) => {
        localStorage.setItem('cats', JSON.stringify(data.val()))
      })
    },
    getCats() {
      // Service Workers don't work with Firebase WebSockets.
      if (navigator.onLine) {
        this.saveToLocalStorage()
        return this.$root.cat
      } else {
        return JSON.parse(localStorage.getItem('cats'))
      }
    }
  }
}
</script>

<style scoped>
.add-picture-button {
  position: fixed;
  right: 50px;
  bottom: 50px;
  z-index: 100;
}

.image-card {
  position: relative;
  margin-bottom: 8px;
}

.image-card__picture>img {
  width: 100%;
}

.image-card__title {
  position: absolute;
  bottom: 0;
  height: 52px;
  padding: 16px;
  text-align: right;
  background: rgba(0, 0, 0, 0.5);
}

.image-card__title>span {
  color: #fff;
  font-size: 14px;
  font-weight: bold;
}
</style>
