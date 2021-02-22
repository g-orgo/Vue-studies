<template>
    <div id="display">
        <b-col>
            <h2>{{info.Dtitle | TitleReprocessor}}</h2>
            <p>{{info.Ddesc}}</p> <!-- One way binding, apenas exibe; não altera dados -->
            <p v-if="showDesc" >É assim que se usa um if :)</p>
            <p v-else> \\Aqui existe uma mensagem escondida apenas para os desenvolvedores.//</p>
            <p v-show="showDesc"> \\Aqui existe uma outra mensagem, mas só acessando o HTML para achar ela.//</p>
            <b-btn @click="childFatherComm()" v-show="showBtn" variant="success">Disparar evento</b-btn>
            <br>
        </b-col>
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
        /* Props são atributos customizados que são atribuídos ao componente
        Isto é, são dados que o componente espera receber de um componente-pai */
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
        /* Filtros irão alterar a exibição mas não o dado, e exigem o parâmetro "value" */
        TitleReprocessor: function(value){
            return value.toUpperCase();
        }
    }
}
</script>

<style>
</style>