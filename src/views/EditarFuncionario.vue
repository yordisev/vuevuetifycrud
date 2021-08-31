<template>
  <h1 class="my-5">Buscar Funcionario</h1>
  <div class="form-inline">
    <!-- <div class="form-group mb-2">
    <label for="staticEmail2" class="sr-only">Email</label>
    <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com">
  </div> -->
    <div class="form-group mx-sm-3 mb-2">
      <label for="inputPassword2" class="sr-only">Password</label>
      <input
        type="number"
        class="form-control"
        placeholder="Cedula"
        v-model="cedula"
      />
    </div>
    <button class="btn btn-outline-primary mb-2" @click="buscarCedula(cedula)">
      Buscar
    </button>
  </div>

  <div>
    <template v-if="personas.cedula" !="">
     <div class="mb-5 col-lg-12">
    <div class="card">
      <div class="card-header">
        <h4 class="card-heading">Datos Basicos</h4>
      </div>
      <div class="card-body">
        <form action="#">
        <div class="form-row">
        <div class="form-group col-md-3">
          <label>1er. Nombre</label>
          <input type="text" class="form-control" v-model="personas.nombre" />
        </div>
        <div class="form-group col-md-3">
          <label>2do. Nombre</label>
          <input type="text" class="form-control" v-model="personas.nombre" />
        </div>
        <div class="form-group col-md-3">
          <label>1er. Apellido</label>
          <input type="text" class="form-control" v-model="personas.apellido" />
        </div>
        <div class="form-group col-md-3">
          <label>2do. Apellido</label>
          <input type="text" class="form-control" v-model="personas.apellido" />
        </div>
      </div>
          
          <div class="mb-3">
            <button type="submit" class="btn btn-primary">Editar <i class="bi bi-pencil-square" ></i></button>
          </div>
        </form>
      </div>
    </div>
  </div>
    </template>
  </div>

<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
       <h1>test</h1>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  

  
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      cedula: "",
      personas: {
        nombre: "",
        apellido: "",
        cedula: "",
      },
    };
  },

  methods: {
    buscarCedula(cedula) {
      axios
        .get(
          "http://localhost/spa-master/public/apirest/persona.php?cedula=" +
            cedula
        )
        .then((respuesta) => {
          this.personas = respuesta.data;
          console.log(this.personas);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>