<template>
  Editar {{$route.params.id}} - {{articulo}}
  <h1 class="my-5">Editar Tarea: {{articulo.descripcion}}</h1>
  <form @submit.prevent="updateTarea(articulo)">
    <Input :articulo="articulo" />
  </form>
    <router-link  class="btn btn-warning mt-2 btn-block"  to="/">Regresar</router-link>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import Input from '../components/Input'
import axios from 'axios';
export default {
    //  name:'EditarArticulo',
        components:{
            Input
        },
        data(){
      return{
        id:null,
        articulo:{
          descripcion:'',
          precio:'',
          stock:''
        }
      }
    },
    mounted(){
      this.id = this.$route.params.id;
    //   console.log(this.$route);
      axios.get('http://localhost/apirest/articulos.php?id='+this.id)
      .then(r =>{
        this.articulo = r.data;
      })
      .catch(function(error){
        console.log(error);
      });
    },
    // computed: {
    //     ...mapState(['articulo'])
    // },
    methods: {
        ...mapActions(['updateTarea'])
        // ...mapActions(['setTarea', 'updateTarea'])
        
    },
    // created(){
    //     this.setTarea(this.$route.params.id)
    // }
}
</script>
