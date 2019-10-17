<template>
  <div>
    <div class="hero-banner mt-2">
      <a href="/">
        <img
          alt="starwars-logo"
          style="width:50px; position:absolute; left:10px; top:10px;"
          src="../assets/logo.png"
        />
      </a>
      <div class="hero-text">
        <h3
          class="text-center"
        >Find your favourite Characters, Films, Species, Starships and Planets</h3>
      </div>
    </div>
    <div class="col-md-3 mt-3">
      <b-dropdown
        split
        split-variant="outline-danger"
        variant="danger"
        id="dropdown-1"
        text="Explore"
        class="m-md-2"
      >
        <b-dropdown-item>
          <router-link to="/">Characters</router-link>
        </b-dropdown-item>
        <b-dropdown-item>
          <router-link to="/starships">Starships</router-link>
        </b-dropdown-item>
        <b-dropdown-item>
          <router-link to="/planets">Planets</router-link>
        </b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
      </b-dropdown>
    </div>
  </div>
</template>
<script>
export default {
  name: 'banner'
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
</style>
