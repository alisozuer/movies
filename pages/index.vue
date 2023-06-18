<template>
  <b-container class="pt-5">
    <b-row class="my-5">
      <b-col xl="6">
        <nuxt-link to="/movies" class="movie-card">
          <div class="overlay"></div>
          <div class="movie-content">
            <h1>Filmler</h1>
          </div>
        </nuxt-link>
      </b-col>
      <b-col xl="6">
        <nuxt-link to="/characters" class="character-card">
          <div class="overlay"></div>
          <div class="character-content">
            <h1>Karakterler</h1>
          </div>
        </nuxt-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>
.movie-card {
  position: relative;
  background-image: url("@/assets/movies.jpg");
  width: 100%;
  height: 500px;
  background-size: cover;
  background-position: center;
  display: block;
}

.character-card {
  position: relative;
  background-image: url("@/assets/characters.jpg");
  width: 100%;
  height: 500px;
  background-size: cover;
  background-position: top;
  display: block;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}

.movie-content,
.character-content {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 1;
  color: rgb(224, 224, 224);
  transform: translate(-50%, -50%);
}
</style>