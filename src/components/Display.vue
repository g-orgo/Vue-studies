<template>
    <div id="display">
        <h2>{{info.Dtitle}}</h2>
        <p>{{info.Ddesc}}</p>
        <p v-if="showDesc" >É assim que se usa um if :)</p>
        <p v-else> \\Aqui existe uma mensagem escondida apenas para os desenvolvedores.//</p>
        <p v-show="showDesc"> \\Aqui existe uma outra mensagem, mas só acessando o HTML para achar ela.//</p>
        <button @click="childFatherComm()" v-show="showBtn">Disparar evento</button>
        <br>
    </div>
</template>

<script>
export default {
    data(){
        return{
            titulo: '',
            corpo: '',
        }
    },
    props: {
        info: Object,
        showDesc: Boolean,
        showBtn: Boolean,
    },
    methods: {
        childFatherComm: function(){
            this.$emit('childFatherAttr'); /* Emitindo este atributo para o componente-pai está acontecendo uma comunicação de filho para pai (Ramon would be proud) */
        }
    }
}
</script>

<style>
    #display{
        margin-left: 1.3%;
    }
</style>