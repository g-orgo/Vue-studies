<template>
    <div>
        <b-col cols="12">
            <b-alert show variant="dark">
                <h2 :value="titulo">O título: {{ titulo }}</h2>
                <p :value="corpo">O corpo do texto: {{ corpo }}</p>
            </b-alert>
        </b-col>            
        <b-col md="2" sm="3">
            <div>
                <input class="card-title" v-model="titulo" placeholder="Nome"> <!-- Two way binding, tanto exibe quanto altera dados -->
                <textarea class= "card-text textarea-desc" cols="30" rows="10" v-model="corpo" placeholder="Texto" @blur="userWrote()" style="resize: none"></textarea>
            </div>
            <b-col offset-md="6" class="button">
                <b-button :class="{'btn': isReadable, 'btn-disabled': !isReadable}" type="submit">Enviar!</b-button> <!-- Também há como decidir a classe à partir de uma variável -->
            </b-col>
        </b-col>
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
                /* Confere se o campo contêm algum dado ou não */

                var textarea = document.querySelector('.textarea-desc')

                if(textarea.value.length > 0){
                    /* Antes eu usava !this.isReadable que invertia os valores, mas
                    criou um problema quando textarea.value.length não era igual a 0
                    e deveria ser igual à true. Porquê ele retornava ao false */
                    this.isReadable = true;
                } else {
                    /* Tive que acrescentar esse ELSE para que caso o campo seja limpo
                     ele bloqueie novamente o botão */
                    this.isReadable = false;
                }
            }
        },
    }

    
</script>

<style scoped>
    button{
        margin-top: 10px;
    }
    .btn-disabled{
        background: aliceblue;
        border: 0;
        color: gray;
    }
</style>