<template>
  <h1 class="my-5">Formularios con Vue.js</h1>
  <div class="d-flex justify-content-end">
    <button class="btn btn-primary float-right" @click="Eliminararticulo">Hello world</button>
  </div>
  
  
  <form @submit.prevent="procesarFormulario">
    <Input :articulo="articulo" />
  </form>
  <hr />
  <ListaTareas />
</template>

<script>
import Input from "../components/Input";
import ListaTareas from "../components/ListaTareas";
import { mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    Input,
    ListaTareas,
  },
  data() {
    return {
      articulo: {
        // id: '',
        descripcion: "",
        precio: "",
        stock: "",
      },
    };
  },
  methods: {

    
    showAlert() {
      // Use sweetalert2
      this.$swal("Hello Vue world!!!");
    },

    Eliminararticulo() {
      this.$swal
        .fire({
          title: "Venta #123465",
          text: "¿Eliminar?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Sí, eliminar",
          cancelButtonText: "Cancelar",
        })
        .then((resultado) => {
          if (resultado.value) {
            // Hicieron click en "Sí"
            this.$swal.fire(
              "Exitoso",
              "Registro Eliminado Correctamente",
              "success"
            );
          } else {
            // Dijeron que no
            console.log("*NO se elimina la venta*");
          }
        });
    },
    ...mapActions(["setTareas"]),
    procesarFormulario() {
      console.log(this.articulo);
      if (this.articulo.precio === "" || this.articulo.descripcion.trim() === "") {
        this.$swal.fire("Requeridos", "Favor llenar todos los campos", "info");
        return;
      } else {
        // envian los datos
        this.setTareas(this.articulo);
        this.$swal.fire(
          "Exitoso",
          "Registro Insertado Correctamente",
          "success"
        ).then(function() {
                                location.reload();
                            });
        
      }

      
      
      // limpiar datos
      this.articulo = {
        // id: '',
        descripcion: "",
        precio: "",
        stock: "",
      };
    },
  },
};
</script>
