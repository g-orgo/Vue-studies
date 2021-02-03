<template>
  <div id="app" class="container">
    <div class="container">
      <h1>Estudos de Vue</h1>
      <hr>
      <Cards/>
      <hr>
      <Display :info="example" :showDesc="false" @childFatherAttr="childFatterCommEnd()" :showBtn="true"/>
      <hr>
      <div v-for="fruta in frutas" :key="fruta.id">
        <Display :info="fruta" :showDesc="false" :showBtn="false"/>
      </div>
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
          
        },
        frutas: [
          {
            id: 1,
            Dtitle: "Maçã",
            Ddesc: "Fruta vermelha",
          },
          {
            id: 2,
            Dtitle: "Banana",
            Ddesc: "Fruta amarela",
          },
        ]
      }
    },
    components: {
      Cards,
      Display
    },
    methods:{
      childFatterCommEnd: function(){
        console.log('Comunicação de filhos para pais :)')
      }
    }
  }
</script>
<style>
  body{
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
</style>
