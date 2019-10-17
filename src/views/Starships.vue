<template>
  <div>
    <div class="text-center mt-3 text-dark">
      <span class="col-md-8 underline text-bolder">Starships</span>
    </div>

    <b-card>
      <div class="row text-center mt-3">
        <div class="col-md-3 text-center" v-for="results in starwarsResponse" :key="results.name">
          <div class="card mb-3">
            <img
              src="../assets/starship-2.jpg"
              class="card-img-top"
              style="height:80%; width:100%;"
              alt
            />
            <div class="card-body">
              <h5 class="card-title text-danger text-flow">{{results.name}}</h5>
              <p class="card-text text-secondary text-flow">
                MODEL:
                <span>{{ results.model}}</span>
              </p>
              <p
                class="card-text text-secondary text-flow"
              >WORTH: {{ results.cost_in_credits}} Credits</p>
              <!--                   <b-button variant="outline-info">View Starship</b-button>
              -->
            </div>
          </div>
        </div>
        <div class="col-md-3 text-center">
          <div class="card mb-3">
            <img
              src="../assets/starship-3.jpg"
              class="card-img-top"
              style="height:80%; width:100%;"
              alt
            />
            <div class="card-body">
              <h5 class="card-title text-danger">Naboo star skiff</h5>
              <p class="card-text text-secondary text-flow">MODEL:J-type star skiff</p>
              <p class="card-text text-secondary text-flow">WORTH: 60000</p>
              <!--                <b-button variant="outline-info">View Starship</b-button>
              -->
            </div>
          </div>
        </div>
        <div class="col-md-3 text-center">
          <div class="card mb-3">
            <img
              src="../assets/starship-4.jpg"
              class="card-img-top"
              style="height:80%; width:100%;"
              alt
            />
            <div class="card-body">
              <h5 class="card-title text-danger">Calamari Cruiser</h5>
              <p class="card-text text-secondary text-flow">MODEL: MC80 Liberty type Star Cruiser</p>
              <p class="card-text text-secondary text-flow">WORTH: 10400000</p>
              <!--                <b-button variant="outline-info">View Starship</b-button>
              -->
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
  name: 'Starships',
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
    axios
      .get(baseUrl + 'starships')
      .then(resp => {
        // this.starwarsResponse = resp.data.results
        this.starwarsPagination = resp.data.next
        this.starwarsPrevious = resp.data.previous
        this.$set(this, 'starwarsResponse', resp.data.results)
        console.log(this.starwarsResponse)
        console.log(this.starwarsPagination)
        console.log(this.starwarsPrevious)
        this.$loading(false)
      })
      .catch()
  },
  methods: {
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
<style lang="css" scoped>
.text-flow {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.underline {
  text-decoration: underline;
  text-decoration-color: gray;
}
.btn-align {
  margin-bottom: 20px !important;
}
</style>
