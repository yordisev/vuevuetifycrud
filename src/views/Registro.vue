<template>
  <h1 class="my-5"> Registrar Usuario</h1>
  <form >
      <input class="form-control my-2" v-model.trim="email" placeholder="Email">
      <input class="form-control my-2" type="password" v-model.trim="pass1" placeholder="Password">
      <input class="form-control my-2" type="password" v-model.trim="pass2" placeholder="Password">
      <button class="btn btn-outline-primary" type="submit" :disabled="bloquear">Registrar</button>
  </form>
</template>

<script>
export default {
    data(){
        return{
            email:'',
            pass1:'',
            pass2:''
        }
    },
    computed:{
        bloquear(){
            if(!this.email.includes('@')){
           return true
        }
        if (this.pass1.length > 5 && this.pass1 === this.pass2){
            return false
        }

        return true
        }
    }

}
</script>

<style>

</style>