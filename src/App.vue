<template>
  <div id="app" class="container">
    <div class="container">
      <h1>Estudos de Vue</h1>
      <hr>
      <Cards/>
      <hr>
      <Display :info="example"/>
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
        Ddesc: "Elas acrescentam atributos aos componentes e podem ser acrescentadas como um objeto também."
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
  body{
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
</style>
