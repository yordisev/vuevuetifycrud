import { createStore } from 'vuex'
import router from '../router'
import axios from 'axios';

export default createStore({
  state: {
    articulos: [],
    articulo: {
      // id: '',
      descripcion: '',
      precio: '',
      stock: ''
    }
  },
  mutations: {
    cargar(state, payload) {
      state.articulos = payload
    },
    set(state, payload) {
      state.articulos.push(payload)
    },
    eliminar(state, payload) {
      state.articulos = state.articulos.filter(item => item.id !== payload)
    },
    tarea(state, payload) {
      if (!state.articulos.find(item => item.id === payload)) {
        router.push('/')
        return
      }
      state.tarea = state.articulos.find(item => item.id === payload)
    },
    update(state, payload) {
      state.articulos = state.articulos.map(item => item.id === payload.id ? payload : item)
      router.push('/')
    }
  },
  actions: {
    async cargarLocalStorage({ commit }) {
      try {
        const res = await axios.get('http://localhost/apirest/articulos.php')
        // .then(res => {
        //   const articulos = res.data;
        //     console.log(articulos);
        // })
        const dataDB = res.data;
        // const arrayTareas = []
        // for (let id in dataDB){
        //   arrayTareas.push(dataDB[id])
        // }
        console.log(dataDB)
        commit('cargar', dataDB)
        // commit('cargar',articulos)

      } catch (error) {
        console.log(error)
      }
    },
    async setTareas({ commit }, articulo) {
      // var router = this.$router;
      const formData = new FormData();
      formData.append('descripcion',articulo.descripcion);
      formData.append('precio',articulo.precio);
      formData.append('stock',articulo.stock);
      try {
        const res = await axios.post('http://localhost/apirest/articulos.php',formData)
        .then(()=>{
            router.push('/');
        })

       
      } catch (error) {
        console.log(error)
      }
      
      commit('set', articulo)
    },
    async deleteTareas({ commit }, id) {
      try {
        
        await axios.delete('http://localhost/apirest/articulos.php?id='+id)
        .then(()=>{
                
                
        })
        commit('eliminar', id)
      } catch (error) {
        console.log(error)
      }
    },
    // setTarea({ commit }, id) {
    //   commit('tarea', id)
    // },
    async updateTarea({ commit }, articulo) {
      try {
        const res = await axios.put('http://localhost/apirest/articulos.php?id='+articulo.id+'&descripcion='+articulo.descripcion+'&precio='+articulo.precio+'&stock='+articulo.stock)
        .then(function(){
           router.push('/'); 
           
        })
        
        
        commit('update',articulo)
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
