<template>
    <div id="card">
        <h2 :value="titulo">O título: {{ titulo }}</h2>  <!-- One way binding, só exibe dado do servidor -->
        <p :value="corpo">O corpo do texto: {{ corpo }}</p>

        <div class="card">
            <input class="title" v-model="titulo" placeholder="Nome"> <!-- Two way binding, troca dados com o servidor -->
            <textarea class= "body" cols="30" rows="10" v-model="corpo" placeholder="Texto"></textarea>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            titulo: "",
            corpo: ""
        }
    },

    props: {
        title: String,
        body: String,
    }
}
</script>

<style scoped>
    #card{
        margin: 10px;
        width: 300px;
        height: 320px;
    }

    .title{
        margin-top: 30px;
        margin-left: 5%;
    }

    .body{
        margin-top: 10px;
        margin-left: 5%;
    }

    h2, p {
        margin-left: 5%
    }

</style>