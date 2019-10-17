<template>
  <div>
    <div class="text-center mt-3 text-dark">
      <span class="col-md-8 underline text-bold">Starwars Characters</span>
    </div>

    <b-card>
      <div class="row text-center mt-3">
        <div class="col-md-6 text-center" v-for="results in starwarsResponse" :key="results.name">
          <div class="card mb-3" style=" margin:auto;">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img src="../assets/character-1.jpg" class="card-img" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{{results.name}}</h5>
                  <p class="card-text">
                    Birth Year:
                    <span class>{{ results.birth_year}}</span>
                  </p>
                  <p class="card-text">Gender: {{ results.gender}}</p>
                  <!--                   <b-button variant="outline-info">View Full Profile</b-button>
                  -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <b-button
          class="col-md-6 btn-align"
          size="sm"
          variant="outline-secondary"
          @click="previous"
        >Previous</b-button>
        <b-button
          class="col-md-6 btn-align"
          size="sm"
          variant="outline-secondary"
          @click="next"
        >Next</b-button>
      </div>
    </b-card>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'Home',
  data () {
    return {
      starwarsResponse: [],
      starwarsPagination: '',
      starwarsPrevious: ''
    }
  },
  mounted () {
    this.$loading(true)
    const baseUrl = 'https://swapi.co/api/'
    axios.get(baseUrl + 'people').then(resp => {
      // this.starwarsResponse = resp.data.results
      this.starwarsPagination = resp.data.next
      this.starwarsPrevious = resp.data.previous
      this.$set(this, 'starwarsResponse', resp.data.results)
      console.log(this.starwarsResponse)
      this.$loading(false)
    })
  },
  methods: {
    /*  starships() {
      this.$router.push('/starships')
    }, */
    next () {
      this.$loading(true)
      const baseUrl = this.starwarsPagination
      axios
        .get(baseUrl)
        .then(resp => {
          this.$loading(false)
          // this.starwarsResponse = resp.data.results
          this.starwarsPagination = resp.data.next
          this.starwarsPrevious = resp.data.previous
          this.$set(this, 'starwarsResponse', resp.data.results)
          console.log(this.starwarsResponse)
          console.log(this.starwarsPagination)
          console.log(this.starwarsPrevious)
        })
        .catch()
    },
    previous () {
      this.$loading(true)
      const baseUrl = this.starwarsPrevious
      axios
        .get(baseUrl)
        .then(resp => {
          this.starwarsPrevious = resp.data.previous
          this.$set(this, 'starwarsResponse', resp.data.results)
          console.log(this.starwarsResponse)
          console.log(this.starwarsPrevious)
          this.$loading(false)
        })
        .catch()
    }
  }
}
</script>
<style  scoped>
.hero-banner {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../assets/hero-banner.jpg");
  background-position: center;
  height: 400px;
}
.hero-text {
  text-align: center;
  position: absolute;
  top: 30%;
  left: 45%;
  transform: translate(-50%, -50%);
  color: white;
}

.underline {
  text-decoration: underline;
  text-decoration-color: gray;
}

.btn-align {
  margin-bottom: 20px !important;
}
</style>
