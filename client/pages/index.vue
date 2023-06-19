<template>
  <b-container class="pt-lg-5">
    <b-row class="my-5" style="row-gap: 2rem;">
      <b-col lg="4" md="6">
        <nuxt-link to="/movies" class="card card--movie" aria-label="Filmler Sayfasına Git">
          <div class="card__content">
            <div class="card__overlay"></div>
            <img src="@/assets/img/movies.jpg" alt="Filmler" class="card__image">
            <h3 class="card__title">Filmler</h3>
          </div>
        </nuxt-link>
      </b-col>
      <b-col lg="4" md="6">
        <nuxt-link to="/characters" class="card card--character" aria-label="Karakterler Sayfasına Git">
          <div class="card__content">
            <div class="card__overlay"></div>
            <img src="@/assets/img/characters.jpg" alt="Karakterler" class="card__image">
            <h3 class="card__title">Karakterler</h3>
          </div>
        </nuxt-link>
      </b-col>
      <b-col lg="4" md="6">
        <nuxt-link to="/books" class="card card--book" aria-label="Kitaplar Sayfasına Git">
          <div class="card__content">
            <div class="card__overlay"></div>
            <img src="@/assets/img/books.jpg" alt="Kitaplar" class="card__image">
            <h3 class="card__title">Kitaplar</h3>
          </div>
        </nuxt-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<style lang="scss" scoped>
.card {
  position: relative;
  width: 100%;
  height: 350px;
  display: block;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  &__content {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: rgb(224, 224, 224);

    .card__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .card__overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      z-index: 1;
    }

    .card__title {
      font-size: 18px;
      font-weight: bold;
      margin: 0;
      position: absolute;
      z-index: 2;
    }
  }
}
</style>