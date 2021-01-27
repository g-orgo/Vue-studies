<template>
    <div id="display">
        <h2>{{Dtitle}}</h2>
        <p>{{Ddesc}}</p>
    </div>
</template>

<script>
export default {
    props: {
        Dtitle: String,
        Ddesc: String,
        info: Object
    }
}
</script>

<style>
 #display{
     margin-left: 2%;
 }
</style>