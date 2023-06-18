<template>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand to="/">Quintic</b-navbar-brand>
  
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
  
        <b-collapse id="nav-collapse" class="justify-content-center" is-nav>
          <b-navbar-nav>
            <b-nav-item>
              <nuxt-link to="/" class="nav-link" variant="white">Ana Sayfa</nuxt-link>
            </b-nav-item>
            <b-nav-item>
              <nuxt-link to="/movies" class="nav-link" variant="white">Filmler</nuxt-link>
            </b-nav-item>
            <b-nav-item>
              <nuxt-link to="/characters" class="nav-link" variant="white">Karakterler</nuxt-link>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </template>
  