<template>
  <!-- <div class="navbar navbar-dark bg-primary">
      <router-link to="/" class="navbar-brand">
          Formularios
      </router-link>
      <div class="d-flex">
          <router-link class="btn btn-dark" to="/">
            Tareas
          </router-link>
      </div>
  </div> -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <a class="navbar-brand" href="#">
    <img src="http://localhost/apirest/img/cliente.svg" width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy">
    MIGESTION
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarScroll">
    <ul class="navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll" style="max-height: 100px;">
       <router-link class="navbar-brand" to="/inicio">
            Inicio
          </router-link>
      <router-link to="/editarf" class="navbar-brand">
          Funcionarios
      </router-link>
      <router-link class="navbar-brand" to="/">
            Lista F
          </router-link>
    </ul>
    <form class="d-flex">
      <input class="form-control mr-2" type="search" placeholder="Buscar" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Buscar</button>
    </form>
  </div>
</nav>
</template>

<script>
export default {

}
</script>

