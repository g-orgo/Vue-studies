<template>
  <div id="app" class="container">
    <div class="container">
      <h1>Escreva uma mensagem aqui!</h1>
      <hr>
      <Cards/>
      <hr>
      <Display :info="example"/> <!--  -->
    </div>
  </div>
</template>

<script>
import Cards from './components/Cards';
import Display from './components/Display';


export default {
  name: 'App',
  data(){
    return{
      example: {
        Dtitle: "Propriedades",
        Ddesc: "Acrescentam atributos aos modulos"
      }
    }
  },
  components: {
    Cards,
    Display
  }
}
</script>

<style>
</style>
