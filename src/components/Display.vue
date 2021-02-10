<template>
    <div id="display">
        <h2>{{info.Dtitle | TitleReprocessor}}</h2>
        <p>{{info.Ddesc}}</p> <!-- One way binding, apenas exibe; não altera dados -->
        <p v-if="showDesc" >É assim que se usa um if :)</p>
        <p v-else> \\Aqui existe uma mensagem escondida apenas para os desenvolvedores.//</p>
        <p v-show="showDesc"> \\Aqui existe uma outra mensagem, mas só acessando o HTML para achar ela.//</p>
        <button @click="childFatherComm()" v-show="showBtn">Disparar evento</button>
        <br>
        <h4>{{otherId}}</h4>
    </div>
</template>

<script>
export default {
    data(){
        /* Data irá retornar um objeto com dados para a instância */
        return{
        }
    },
    props: {
        /* Props são atributos ou objetos customizados que podem ser atribuídos ao componente */
        info: Object,
        showDesc: Boolean,
        showBtn: Boolean,
    },
    methods: {
        /* Métodos são as funções do componente */
        childFatherComm: function(){
            /* Emitindo este atributo para receber uma função no componente-pai (Ramon would be proud) */
            this.$emit('childFatherAttr', {videoaula: "n18 emissão de eventos", comunicação: "filho para pai", título: this.info.Dtitle});
        }
    },
    filters: {
        /* Filtros irão alterar a exibição mas não o dado bruto, portanto exigem o parâmetro "value" */
        TitleReprocessor: function(value){
            return value.toUpperCase();
        }
    },
    computed: {
        otherId: function(){
            return (`${this.info.Dtitle} ${this.info.Ddesc}`).toUpperCase()
        }
    }
}
</script>

<style>
    #display{
        margin-left: 1.3%;
    }
</style>