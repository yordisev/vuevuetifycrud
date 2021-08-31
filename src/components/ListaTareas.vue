<template>
    {{articulos}}
    <table class="table table-bordered">
        <thead class="table-primary">
            <tr>
                <th scope="col" class="text-center">#</th>
                <!-- <th scope="col" class="text-center">ID</th> -->
                <th scope="col" class="text-center">Nombre</th>
                <th scope="col" class="text-center">Estado</th>
                <th scope="col" class="text-center">Numero</th>
                <th scope="col" class="text-center">Acción</th>
            </tr>
        </thead>
        <tbody>
            <!-- <tr v-for="item in articulos" :key="item.id"> -->
            <tr v-for="(item, index) in articulos" :key="index">
                <th scope="row" class="text-center">{{index + 1}}</th>
                <!-- <th scope="row" class="text-center">{{item.id}}</th> -->
                <td class="text-center">{{item.descripcion}}</td>
                <td class="text-center">{{item.precio}}</td>
                <td class="text-center">{{item.stock}}</td>
                <td class="text-center">
                    <button class="btn btn-danger btn-sm" @click="btnBorrar(item.id)">
                     <i class="bi bi-trash-fill"></i>
                    </button>
                    <router-link 
                        class="btn btn-primary ml-2 btn-sm"
                        :to="{
                            name: 'Editar',
                            params: {
                                id: item.id
                            }
                        }"
                    >
                     <i class="bi bi-pencil-square"></i>
                    </router-link>
                </td>
            </tr>
        </tbody>
    </table>
    <!-- <table>
        <ul>
    <li 
    v-for="(item, index) in articulos" :key="index"
    >
        {{index + 1}} - {{item}}
    </li>
</ul>
    </table> -->
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
    computed: {
        ...mapState(['articulos'])
    },
    methods: {
        
        ...mapActions(['deleteTareas']),

        btnBorrar:function(id){        
       this.$swal.fire({
          title: '¿Está seguro de borrar el registro: '+id+" ?",         
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor:'#d33',
          cancelButtonColor:'#3085d6',
          confirmButtonText: 'Borrar'
        }).then((result) => {
          if (result.value) {            
            this.deleteTareas(id);             
            //y mostramos un msj sobre la eliminación  
            this.$swal.fire(
              '¡Eliminado!',
              'El registro ha sido borrado.',
              'success'
            )
          }
        })                
    } 
        
    }
}
</script>