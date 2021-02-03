<template>
    <div id="card">
        <div class="alert">
            <h2 :value="titulo">O título: {{ titulo }}</h2>  <!-- One way binding, só exibe dado do servidor -->
            <p :value="corpo">O corpo do texto: {{ corpo }}</p>
        </div>
        <div class="card">
            <input class="card-title textarea-title" v-model="titulo" placeholder="Nome"> <!-- Two way binding, troca dados com o servidor -->
            <textarea class= "card-body textarea-desc" cols="30" rows="10" v-model="corpo" placeholder="Texto" @blur="userWrote()"></textarea>
        </div>
        <div class="button">
            <button :class="{'btn': isReadable, 'btn-disabled': !isReadable}" type="submit">Enviar!</button> <!-- Aqui ele está decidindo a classe a partir de uma variável -->
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                titulo: '',
                corpo: '',
                isReadable: false
            }
        },
        props: {
            title: String,
            body: String,
        },
        methods: {
            userWrote: function(){
                var textarea = document.querySelector('.textarea-desc')

                if(textarea.value.length > 0){
                    this.isReadable = !this.isReadable;
                }else{
                    this.isReadable = false
                }
            }
        },
    }

    
</script>

<style scoped>
    #card{
        margin: 10px;
        width: 300px;
        height: 330px;
    }

    .card-title{
        margin-top: 30px;
        margin-left: 5%;
    }

    .card-body{
        margin-top: 10px;
        margin-left: 5%;
    }

    h2, p {
        margin-left: 5%
    }

    button{
        margin-top: 10px;
        margin-left: 190px;
    }
    .btn-disabled{
        background: aliceblue;
        border: 0;
        color: gray;
    }
</style>