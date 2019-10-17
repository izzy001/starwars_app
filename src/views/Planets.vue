<template>
  <div>
    <div class="text-center mt-3 text-dark">
      <span class="col-md-8 underline text-bolder">Planets</span>
    </div>

    <b-card>
      <div class="row text-center mt-3">
        <div class="col-md-6 text-center" v-for="results in starwarsResponse" :key="results.name">
          <!--  v-for="results in starwarsResponse" :key="results.name" -->
          <div class="card mb-3" style=" margin:auto; ">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img src="../assets/planet-1.jpg" class="card-img" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{{results.name}}</h5>
                  <p class="card-text text-danger">
                    Population:
                    <span class>{{results.population}}</span>
                  </p>
                  <p class="card-text text-success">Climate: {{results.climate}}</p>
                  <p class="card-text text-secondary">Rotation Period: {{results.rotation_period}}</p>
                  <p class="card-text text-primary">Orbital Period: {{results.orbital_period}}</p>
                  <!--   <b-button variant="outline-info">See More</b-button> -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12 text-center mt-2">
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
      </div>
    </b-card>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Planets',
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
    axios.get(baseUrl + 'planets').then(resp => {
      this.starwarsPrevious = resp.data.previous
      this.starwarsPagination = resp.data.next
      this.$set(this, 'starwarsResponse', resp.data.results)
      console.log(this.starwarsResponse)
      this.$loading(false)
    })
  },
  methods: {
    next () {
      this.$loading(true)
      const baseUrl = this.starwarsPagination
      axios
        .get(baseUrl)
        .then(resp => {
          this.$loading(false)
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
<style scoped>
.underline {
  text-decoration: underline;
  text-decoration-color: gray;
}
.btn-align {
  margin-bottom: 20px !important;
}
</style>
