<template>
    <div>
        <b-row>
            <b-col cols="12">
                <div class="alert">
                    <h2 :value="titulo">O título: {{ titulo }}</h2>
                    <p :value="corpo">O corpo do texto: {{ corpo }}</p>
                </div>
            </b-col>            
        </b-row>
        <b-row>
            <b-col md="2" sm="3">
                <div>
                    <input class="card-title" v-model="titulo" placeholder="Nome"> <!-- Two way binding, tanto exibe quanto altera dados -->
                    <textarea class= "card-text textarea-desc" cols="30" rows="10" v-model="corpo" placeholder="Texto" @change="userWrote()"></textarea>
                </div>
                <b-col offset-md="6" class="button">
                    <b-button :class="{'btn': isReadable, 'btn-disabled': !isReadable}" type="submit">Enviar!</b-button> <!-- Também há como decidir a classe à partir de uma variável -->
                </b-col>
            </b-col>
        </b-row>
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