<template>
  <div id="app">
    <b-container fluid>
      <h1>Estudos de Vue</h1>
      <hr>
      <Forms/>
      <hr>
      <b-row>
        <Display :info="example" :showDesc="false" @childFatherAttr="childFatterCommEnd($event)" :showBtn="true"/>
      </b-row>
      <hr>
      <b-row>
        <div v-for="fruta in fruitsOrderizer" :key="fruta.id">
          <Display :info="fruta" :showDesc="false" :showBtn="false"/>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import Forms from './components/Forms';
  import Display from './components/Display';
  import _ from 'lodash'; // Biblioteca de organização


  export default {
    name: 'App',
    data(){
      return{
        example: {
          Dtitle: "Propriedades",
          Ddesc: "Elas acrescentam atributos aos componentes e podem ser acrescentadas como um objeto também."
        },
        fruits: [
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
          {
            id: 3,
            Dtitle: "Pera",
            Ddesc: "Fruta verde",
          },
          {
            id: 4,
            Dtitle: "Mamão",
            Ddesc: "Fruta laranja",
          },
        ]
      }
    },
    components: {
      Forms,
      Display
    },
    methods:{
      childFatterCommEnd: function($event){
        console.log('Comunicação de filhos para pais :)')
        console.log($event)
      }
    },
    computed: {
      /* Computed properties são dados que retornarão com alterações entre renderizações. (É como o data() só que com watchers)*/
      fruitsOrderizer: function(){
          return _.orderBy(this.fruits, ['Dtitle'], ['asc']) // Estou usando uma função da biblioteca "lodash" para ordenar o que está escrito
      }
    },
    created: function(){ // "created" é uma função que é ativada sempre que o componente é rodado no browser
      console.log('Component loaded')
    }
  }
</script>
<style>
  body{
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
</style>
