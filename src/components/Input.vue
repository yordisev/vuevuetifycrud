<template>
  <input 
      type="text"
      class="form-control my-2"
      placeholder="Ingrese descripcion"
      v-model.trim="articulo.descripcion"
    >

   
    <div class="mt-2">
      <input 
        type="number"
        class="form-control"
        v-model.number="articulo.precio"
      >
    </div>


    <div class="mt-2">
      <input 
        type="number"
        class="form-control"
        v-model.number="articulo.stock"
      >
    </div>

    <button 
      class="btn btn-success mt-2 btn-block" 
      type="submit"
      :disabled="bloquear"
    >
      Procesar
    </button>

  
</template>

<script>
export default {
    props: {
        articulo: Object
    },
    computed: {
        bloquear(){
            return this.articulo.descripcion.trim() === "" ? true : false
        }
  }
}
</script>