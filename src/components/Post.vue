<template>
  <form>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--8-col">
        <div class="card-image__picture image_container">
          <img :src="this.catUrl" />
        </div>
      </div>
      <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty">
          <input id="title" v-model="title" type="text" class="mdl-textfield__input" />
          <label for="title" class="mdl-textfield__label">Title</label>
        </div>
        <div class="actions">
          <a @click.prevent="postCat" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
            POST A CAT
          </a>
        </div>
        <a @click.prevent="loadCat" class="refresh-button mdl-button mdl-js-button mdl-button--fab">
          <i class="material-icons">refresh</i>
        </a>
      </div>
    </div>
  </form>
</template>

<script>
import firebase from 'firebase'
import parse from 'xml-parser'

export default {
  mounted() {
    firebase.auth().signInAnonymously()
    this.loadCat()
  },

  data() {
    return {
      catUrl: '',
      title: ''
    }
  },

  methods: {
    loadCat() {
      this.$http.get('http://thecatapi.com/api/images/get?format=xml&results_per_page=1').then(response => {
        this.catUrl = parse(response.body).root.children['0'].children['0'].children['0'].children['0'].content
      })
    },
    postCat() {
      this.$root.$firebaseRefs.cat.push(
        {
          'url': this.catUrl,
          'title': this.title,
          'created_at': new Date().getTime()
        })
        .then(this.$router.push('/'))
        .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>
.waiting {
  padding: 10px;
  color: #555;
}

.image_container img {
  max-width: 100%;
}

.refresh-button {
  margin-top: 25px;
}
</style>
